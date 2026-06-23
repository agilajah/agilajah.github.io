import type { MarkdownHeading } from "astro";

export interface TocItem extends MarkdownHeading {
	subheadings: Array<TocItem>;
}

function diveChildren(item: TocItem, depth: number): Array<TocItem> {
	if (depth === 1 || !item.subheadings.length) {
		return item.subheadings;
	} else {
		// e.g., 2
		return diveChildren(item.subheadings[item.subheadings.length - 1] as TocItem, depth - 1);
	}
}

export function generateToc(headings: ReadonlyArray<MarkdownHeading>) {
	// this ignores/filters out h1 element(s)
	const bodyHeadings = [...headings.filter(({ depth }) => depth > 1)];
	const toc: Array<TocItem> = [];

	bodyHeadings.forEach((h) => {
		const heading: TocItem = { ...h, subheadings: [] };

		const lastItemInToc = toc[toc.length - 1];
		// Promote to the top level when it's an h2, when there's no parent yet,
		// or when it would otherwise be an orphan (same/shallower depth than the
		// last top-level item). This keeps loosely-structured posts — e.g. an h4
		// intro before any h2, or h1-per-section layouts — from crashing the TOC.
		if (heading.depth === 2 || !lastItemInToc || heading.depth <= lastItemInToc.depth) {
			toc.push(heading);
		} else {
			// deeper than the last top-level item: nest into its descendants
			const gap = heading.depth - lastItemInToc.depth;
			const target = diveChildren(lastItemInToc, gap);
			target.push(heading);
		}
	});
	return toc;
}
