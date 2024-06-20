import type { ThemeName } from "$lib/design-system/Color"
import type { IconName } from "$lib/design-system/vector-icon"

export type ArticleType = {
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
	links: {
		title: string,
		href: string,
		icon: IconName,
		color: ThemeName,
	}[],
}

export type SummarizedArticle = Omit<ArticleType, "content" | "links">

export const mdToArticle = (attributes: Record<string, unknown>, html: string): ArticleType => ({
	...mdToSummarizedArticle(attributes),
	content: html,
	links: (attributes.links as any[])?.map((it) => ({
		title: it.title,
		href: it.href,
		icon: it.icon,
		color: it.color,
	})) ?? []
})

export const mdToSummarizedArticle = (attributes: Record<string, unknown>): SummarizedArticle => ({
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
