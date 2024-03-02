import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

/** Note: this function filters out draft books based on the environment */
export async function getAllBooks() {
	return await getCollection("book", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}

export function sortMDByDateBooks(books: Array<CollectionEntry<"book">>) {
	return books.sort((a, b) => {
		const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
		const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
		return bDate - aDate;
	});
}

/** Note: This function doesn't filter draft books, pass it the result of getAllbooks above to do so. */
export function getAllTagsBooks(books: Array<CollectionEntry<"book">>) {
	return books.flatMap((book) => [...book.data.tags]);
}

/** Note: This function doesn't filter draft books, pass it the result of getAllbooks above to do so. */
export function getUniqueTagsBooks(books: Array<CollectionEntry<"book">>) {
	return [...new Set(getAllTags(books))];
}

/** Note: This function doesn't filter draft books, pass it the result of getAllbooks above to do so. */
export function getUniqueTagsWithCountBooks(
	books: Array<CollectionEntry<"book">>,
): Array<[string, number]> {
	return [
		...getAllTags(books).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
