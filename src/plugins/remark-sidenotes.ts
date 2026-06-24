import { h as _h, type Properties } from "hastscript";
import type { Paragraph as P, Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

/** mdast HTML node ready for rehype (mirrors the admonitions plugin). */
// biome-ignore lint/suspicious/noExplicitAny: hastscript children
function h(el: string, attrs: Properties = {}, children: any[] = []): P {
	const { properties, tagName } = _h(el, attrs);
	return { children, data: { hName: tagName, hProperties: properties }, type: "paragraph" };
}

/**
 * Turns `:::sidenote ... :::` container directives into a numbered <aside>.
 * Numbering is per-document, in source order.
 */
export const remarkSidenotes: Plugin<[], Root> = () => (tree) => {
	let count = 0;
	visit(tree, (node, index, parent) => {
		if (node.type !== "containerDirective" || node.name !== "sidenote") return;
		if (!parent || index === undefined) return;
		count += 1;

		const aside = h("aside", { class: "sidenote", "data-sidenote": String(count) }, [
			h("span", { class: "sidenote-num", "aria-hidden": "true" }, [
				{ type: "text", value: String(count) },
			]),
			h("div", { class: "sidenote-body" }, node.children),
		]);

		parent.children[index] = aside;
	});
};
