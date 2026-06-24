import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const ROOT = "/Users/febiagil/dev/agilajah.github.io";
const BOOK_DIR = path.join(ROOT, "src/content/book");
const COVER_DIR = path.join(ROOT, "public/assets/books");

function fm(md, key) {
	const m = md.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?`, "m"));
	return m ? m[1].trim() : null;
}

// Saturation-weighted hue: vivid pixels drive the hue; returns {hue, sat} where
// sat reflects overall colorfulness (0 for greyscale/B&W covers).
async function coverAccent(coverPath) {
	const { data, info } = await sharp(coverPath)
		.resize(48, 48, { fit: "inside" })
		.raw()
		.toBuffer({ resolveWithObject: true });
	const ch = info.channels;
	let sx = 0, sy = 0, wsum = 0, satSum = 0, n = 0;
	for (let i = 0; i < data.length; i += ch) {
		const r = data[i] / 255, g = data[i + 1] / 255, b = data[i + 2] / 255;
		const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
		if (d === 0) { n++; continue; }
		const s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
		let h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
		h = (h / 6) * 2 * Math.PI;
		// downweight very dark / very light pixels (ink + paper) so mid-tone colour wins
		const lw = 1 - Math.abs(l - 0.5) * 1.2;
		const w = s * Math.max(0, lw);
		sx += Math.cos(h) * w; sy += Math.sin(h) * w; wsum += w; satSum += s; n++;
	}
	if (wsum < 0.5) return { hue: 0, sat: 0 }; // greyscale-ish cover
	let hue = (Math.atan2(sy, sx) * 180) / Math.PI;
	if (hue < 0) hue += 360;
	const avgSat = satSum / n; // 0..1
	return { hue: Math.round(hue), sat: Math.round(Math.min(0.42, 0.12 + avgSat * 0.6) * 100) };
}

async function fetchPages(title, author) {
	try {
		const t = encodeURIComponent(title.split(":")[0].trim());
		const a = encodeURIComponent(author);
		const url = `https://openlibrary.org/search.json?title=${t}&author=${a}&fields=number_of_pages_median&limit=1`;
		const ctrl = new AbortController();
		const to = setTimeout(() => ctrl.abort(), 8000);
		const res = await fetch(url, { signal: ctrl.signal });
		clearTimeout(to);
		const j = await res.json();
		return j.docs?.[0]?.number_of_pages_median ?? null;
	} catch {
		return null;
	}
}

const files = fs.readdirSync(BOOK_DIR).filter((f) => f.endsWith(".md"));
const out = {};
let i = 0, withPages = 0, withColor = 0;

// limited concurrency
const queue = [...files];
async function worker() {
	while (queue.length) {
		const file = queue.shift();
		const slug = file.replace(/\.md$/, "");
		const md = fs.readFileSync(path.join(BOOK_DIR, file), "utf8");
		const title = fm(md, "title") || slug;
		const author = fm(md, "author") || "";
		const cover = fm(md, "cover");
		let color = { hue: 0, sat: 0 };
		if (cover && fs.existsSync(path.join(COVER_DIR, cover))) {
			try { color = await coverAccent(path.join(COVER_DIR, cover)); } catch {}
		}
		const pages = await fetchPages(title, author);
		if (pages) withPages++;
		if (color.sat > 0) withColor++;
		out[slug] = { hue: color.hue, sat: color.sat, pages };
		i++;
		if (i % 20 === 0) console.error(`${i}/${files.length}`);
	}
}
await Promise.all(Array.from({ length: 6 }, worker));

const sorted = Object.fromEntries(Object.entries(out).sort());
const ts =
	"// Auto-generated: per-book spine colour (cover accent hue/sat) + page count.\n" +
	"export const spineData: Record<string, { hue: number; sat: number; pages: number | null }> =\n" +
	JSON.stringify(sorted, null, 2) +
	";\n";
fs.writeFileSync(path.join(ROOT, "src/data/spine-data.ts"), ts);
console.error(`done: ${files.length} books, ${withPages} with pages, ${withColor} with colour`);
