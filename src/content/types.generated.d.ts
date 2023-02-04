declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"book": {
"competing-against-luck-claython-christensen.md": {
  id: "competing-against-luck-claython-christensen.md",
  slug: "competing-against-luck-claython-christensen",
  body: string,
  collection: "book",
  data: InferEntrySchema<"book">
},
"cosmic-citizens-and-moonshot-thinking-rohan-roberts.md": {
  id: "cosmic-citizens-and-moonshot-thinking-rohan-roberts.md",
  slug: "cosmic-citizens-and-moonshot-thinking-rohan-roberts",
  body: string,
  collection: "book",
  data: InferEntrySchema<"book">
},
},
"post": {
"2018-07-18-generative-modelling-1-driving-simulator.md": {
  id: "2018-07-18-generative-modelling-1-driving-simulator.md",
  slug: "2018-07-18-generative-modelling-1-driving-simulator",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-07-18-generative-modelling-2-adversarial-neural-cryptography.md": {
  id: "2018-07-18-generative-modelling-2-adversarial-neural-cryptography.md",
  slug: "2018-07-18-generative-modelling-2-adversarial-neural-cryptography",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-07-18-generative-modelling-3-adversarial-perturbation-elimination.md": {
  id: "2018-07-18-generative-modelling-3-adversarial-perturbation-elimination.md",
  slug: "2018-07-18-generative-modelling-3-adversarial-perturbation-elimination",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-07-18-random-ml-1-synthetic-gradients-decoupled-neural-interfaces.md": {
  id: "2018-07-18-random-ml-1-synthetic-gradients-decoupled-neural-interfaces.md",
  slug: "2018-07-18-random-ml-1-synthetic-gradients-decoupled-neural-interfaces",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-07-18-random-ml-2-learning-to-learn.md": {
  id: "2018-07-18-random-ml-2-learning-to-learn.md",
  slug: "2018-07-18-random-ml-2-learning-to-learn",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-08-26-generative-modelling-4-text-to-image-synthesis.md": {
  id: "2018-08-26-generative-modelling-4-text-to-image-synthesis.md",
  slug: "2018-08-26-generative-modelling-4-text-to-image-synthesis",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-09-11-random-ml-5-understanding-alphagozero-1.md": {
  id: "2018-09-11-random-ml-5-understanding-alphagozero-1.md",
  slug: "2018-09-11-random-ml-5-understanding-alphagozero-1",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-11-09-moments-the-series-chapter-zero.md": {
  id: "2018-11-09-moments-the-series-chapter-zero.md",
  slug: "2018-11-09-moments-the-series-chapter-zero",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-11-14-moments-the-series-chapter-one.md": {
  id: "2018-11-14-moments-the-series-chapter-one.md",
  slug: "2018-11-14-moments-the-series-chapter-one",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2018-11-18-moments-the-series-chapter-two.md": {
  id: "2018-11-18-moments-the-series-chapter-two.md",
  slug: "2018-11-18-moments-the-series-chapter-two",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2019-12-31-year-in-review-2019.md": {
  id: "2019-12-31-year-in-review-2019.md",
  slug: "2019-12-31-year-in-review-2019",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2021-10-21-software-is-feeding-the-world.md": {
  id: "2021-10-21-software-is-feeding-the-world.md",
  slug: "2021-10-21-software-is-feeding-the-world",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"eid-and-neurafarm-contribution-pandemic.md": {
  id: "eid-and-neurafarm-contribution-pandemic.md",
  slug: "eid-and-neurafarm-contribution-pandemic",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"lebaran-2020-peran-neurafarm.md": {
  id: "lebaran-2020-peran-neurafarm.md",
  slug: "lebaran-2020-peran-neurafarm",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
},

	};

	type ContentConfig = typeof import("./config");
}
