import type { ThemeName } from "$lib/design-system/Color"
import type { IconName } from "$lib/design-system/vector-icon"

export type StoryType = {
	id: string,
	title: string,
	category: string,
	publishedAt: Date,
	tags: string[],
	content: string,
	icon: IconName,
	color: ThemeName,
	summary: {
		short: string,
		long: string,
	},
}

export type SummarizedStory = Omit<StoryType, "content">

export const mdToStory = (attributes: Record<string, unknown>, html: string): StoryType => ({
	...mdToSummarizedStory(attributes),
	content: html,
})

export const mdToSummarizedStory = (attributes: Record<string, unknown>): SummarizedStory => ({
	id: attributes.id as string,
	title: attributes.title as string,
	category: attributes.category as string,
	publishedAt: new Date(attributes.publishedAt as string),
	tags: attributes.tags as string[],
	icon: attributes.icon as IconName,
	color: attributes.color as ThemeName,
	summary: {
		short: attributes.summary as string,
		long: attributes.longSummary as string,
	},
})
