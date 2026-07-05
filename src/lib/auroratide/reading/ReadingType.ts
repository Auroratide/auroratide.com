import type { ThemeName } from "$lib/design-system/Color"
import type { IconName } from "$lib/design-system/vector-icon"

export type ReadingType = {
	id: string,
	title: string,
	category: string,
	author: string,
	publisher: string,
	href: string,
	publishedAt: Date,
	originalPublishedAt: Date,
	tags: string[],
	content: string,
	icon: IconName,
	color: ThemeName,
	summary: {
		short: string,
		long: string,
	},
}

export type SummarizedReading = Omit<ReadingType, "content" | "links" | "toc">

export const mdToReading = (attributes: Record<string, unknown>, html: string): ReadingType => ({
	...mdToSummarizedReading(attributes),
	content: html,
})

export const mdToSummarizedReading = (attributes: Record<string, unknown>): SummarizedReading => ({
	id: attributes.id as string,
	title: attributes.title as string,
	category: attributes.category as string,
	author: attributes.author as string,
	publisher: attributes.publisher as string,
	href: attributes.href as string,
	publishedAt: new Date(attributes.publishedAt as string),
	originalPublishedAt: new Date(attributes.originalPublishedAt as string),
	tags: attributes.tags as string[],
	icon: attributes.icon as IconName,
	color: attributes.color as ThemeName,
	summary: {
		short: attributes.summary as string,
		long: attributes.longSummary as string,
	},
})
