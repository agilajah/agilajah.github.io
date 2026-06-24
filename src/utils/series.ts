import type { CollectionEntry } from "astro:content";

// Posts that belong to a series are grouped by a shared tag.
const SERIES_BY_TAG: Record<string, string> = {
	"moments-series": "Moments",
	"generative-modelling": "Generative Modelling",
	"random-ml": "Random ML",
	"weekly-digest": "Superficiality",
};

export interface SeriesInfo {
	name: string;
	parts: Array<{ slug: string; title: string; current: boolean }>;
	index: number;
	total: number;
}

/** Series context for a post (ordered Part 1 = earliest), or null if not in a series. */
export function getSeries(
	post: CollectionEntry<"post">,
	allPosts: Array<CollectionEntry<"post">>,
): SeriesInfo | null {
	const tag = post.data.tags.find((t) => t in SERIES_BY_TAG);
	if (!tag) return null;
	const members = allPosts
		.filter((p) => p.data.tags.includes(tag))
		.sort((a, b) => a.data.publishDate.valueOf() - b.data.publishDate.valueOf());
	if (members.length < 2) return null;
	return {
		name: SERIES_BY_TAG[tag]!,
		parts: members.map((p) => ({
			slug: p.slug,
			title: p.data.title,
			current: p.slug === post.slug,
		})),
		index: members.findIndex((p) => p.slug === post.slug),
		total: members.length,
	};
}

/**
 * Up to `limit` other posts sharing the most tags, newest first as a tiebreak.
 * `exclude` slugs are skipped (e.g. same-series posts already shown by SeriesNav).
 */
export function getRelatedPosts(
	post: CollectionEntry<"post">,
	allPosts: Array<CollectionEntry<"post">>,
	limit = 3,
	exclude: Set<string> = new Set(),
): Array<CollectionEntry<"post">> {
	const tags = new Set(post.data.tags);
	return allPosts
		.filter((p) => p.slug !== post.slug && !exclude.has(p.slug))
		.map((p) => ({ p, score: p.data.tags.filter((t) => tags.has(t)).length }))
		.filter((x) => x.score > 0)
		.sort(
			(a, b) =>
				b.score - a.score || b.p.data.publishDate.valueOf() - a.p.data.publishDate.valueOf(),
		)
		.slice(0, limit)
		.map((x) => x.p);
}
