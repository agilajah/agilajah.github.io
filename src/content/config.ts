import { z, defineCollection } from "astro:content";

const post = defineCollection({
	schema: {
		title: z.string().max(100),
		description: z.string().min(40).max(160),
		publishDate: z.string().transform((str) => new Date(str)),
		tags: z.array(z.string()).default([]),
	},
});

export const collections = { post };