import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMathJax from "rehype-mathjax";


// https://astro.build/config
export default defineConfig({
	site: "https://febiagil.agilajah.io",
	experimental: {
		contentCollections: true,
	},
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax]
	},
	integrations: [
		mdx({}),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		sitemap(),
		prefetch(),
	],
});
