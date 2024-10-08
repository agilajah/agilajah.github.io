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

export default defineConfig({
  site: "https://agilajah.github.io",
  // Remove the experimental section
  integrations: [
    expressiveCode(expressiveCodeOptions),
    icon(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    sitemap(),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
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
    // @ts-expect-error:next-line
    transform(_, id) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        };
      }
    },
  };
}