import { z, defineCollection } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const post = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string().max(150),
			description: z.string().min(50).max(300),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			coverImage: z
				.object({
					src: image(),
					alt: z.string(),
				})
				.optional(),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
			ogImage: z.string().optional(),
		}),
});

const book = defineCollection({
	type: "content",
	schema: ({ image }) =>
	z.object({
		title: z.string().max(150),
		description: z.string().min(50).max(300),
		author: z.string().min(2).max(300),
		publishDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		cover: z
			.object({
				src: image(),
				alt: z.string(),
			})
			.optional(),
		draft: z.boolean().default(false),
		status: z.string().max(40),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
	}),

});


export const collections = { 
	'post': post,
	'book':  book
};
