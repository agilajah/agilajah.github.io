import { z, defineCollection } from "astro:content";

const post = defineCollection({
	schema: {
		title: z.string().max(100),
		description: z.string().min(40).max(300),
		publishDate: z.string().transform((str) => new Date(str)),
		tags: z.array(z.string()).default([]),
	},
});

const book = defineCollection({
	schema: {
		title: z.string().max(150),
		description: z.string().min(40).max(300),
		author: z.string().min(2).max(300),
		tags: z.array(z.string()).default([]),
		status: z.string().max(40),
		publishDate: z.string().transform((str) => new Date(str)),
		cover: z.string()
	}
});


export const collections = { 
	'post': post,
	'book':  book
};
