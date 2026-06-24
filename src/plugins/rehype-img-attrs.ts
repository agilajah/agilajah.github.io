import type { Root } from "hast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

/** Lazy-load + async-decode content images so off-screen images don't block. */
export const rehypeImgAttrs: Plugin<[], Root> = () => (tree) => {
	visit(tree, "element", (node) => {
		if (node.tagName !== "img") return;
		node.properties = node.properties ?? {};
		node.properties.loading ??= "lazy";
		node.properties.decoding ??= "async";
	});
};
