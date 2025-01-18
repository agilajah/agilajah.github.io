import fs from "node:fs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { expressiveCodeOptions } from "./src/site.config";

// Remark plugins
import remarkDirective from "remark-directive";
import remarkUnwrapImages from "remark-unwrap-images";
import { remarkAdmonitions } from "./src/plugins/remark-admonitions";
import { remarkReadingTime } from "./src/plugins/remark-reading-time";

// Rehype plugins
import rehypeExternalLinks from "rehype-external-links";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
	site: "https://agilajah.github.io",
	integrations: [
		expressiveCode(expressiveCodeOptions),
		icon(),
		tailwind({
			applyBaseStyles: false,
			nesting: true,
		}),
		sitemap(),
		mdx({
			remarkPlugins: [remarkMath],
			rehypePlugins: [[rehypeKatex, { strict: false }]],
		}),
	],
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
		rehypePlugins: [
			rehypeKatex, // Correct:  rehypeKatex is included directly.
			[
				rehypeExternalLinks,
				{
					//  rehypeExternalLinks as an array with options
					rel: ["nofollow, noreferrer"],
					target: "_blank",
				},
			],
		],
		remarkPlugins: [
			remarkUnwrapImages,
			remarkReadingTime,
			remarkDirective,
			remarkAdmonitions,
			remarkMath,
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: [""],
			},
		},
	},
	prefetch: true,
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
		plugins: [rawFonts([".ttf", ".woff"])],
	},
});

function rawFonts(ext: string[]) {
	return {
		name: "vite-plugin-raw-fonts",
		transform(_, id) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return {
					code: `export default ${JSON.stringify(Buffer.from(buffer))}`, // Use Buffer.from
					map: null,
				};
			}
		},
	};
}
