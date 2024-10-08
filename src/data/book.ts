import { type CollectionEntry, getCollection } from "astro:content";
import { siteConfig } from "@/site-config";

/** filter out draft books based on the environment */
export async function getAllBooks() {
	return await getCollection("book", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}

/** returns the date of the book based on option in siteConfig.sortbooksByUpdatedDate */
export function getBookSortDate(book: CollectionEntry<"book">) {
	return siteConfig.sortbooksByUpdatedDate && book.data.updatedDate !== undefined
		? new Date(book.data.updatedDate)
		: new Date(book.data.publishDate);
}

/** sort book by date (by siteConfig.sortbooksByUpdatedDate), desc.*/
export function sortMDByDate(books: CollectionEntry<"book">[]) {
	return books.sort((a, b) => {
		const aDate = getBookSortDate(a).valueOf();
		const bDate = getBookSortDate(b).valueOf();
		return bDate - aDate;
	});
}

/** groups books by year (based on option siteConfig.sortbooksByUpdatedDate), using the year as the key
 *  Note: This function doesn't filter draft books, pass it the result of getAllbooks above to do so.
 */
export function groupBooksByYear(books: CollectionEntry<"book">[]) {
	return books.reduce<Record<string, CollectionEntry<"book">[]>>((acc, book) => {
		const year = getBookSortDate(book).getFullYear();
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year]?.push(book);
		return acc;
	}, {});
}

/** returns all tags created from books (inc duplicate tags)
 *  Note: This function doesn't filter draft books, pass it the result of getAllbooks above to do so.
 *  */
export function getAllTags(books: CollectionEntry<"book">[]) {
	return books.flatMap((book) => [...book.data.tags]);
}

/** returns all unique tags created from books
 *  Note: This function doesn't filter draft books, pass it the result of getAllbooks above to do so.
 *  */
export function getUniqueTags(books: CollectionEntry<"book">[]) {
	return [...new Set(getAllTags(books))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft books, pass it the result of getAllbooks above to do so.
 *  */
export function getUniqueTagsWithCount(books: CollectionEntry<"book">[]): [string, number][] {
	return [
		...getAllTags(books).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
