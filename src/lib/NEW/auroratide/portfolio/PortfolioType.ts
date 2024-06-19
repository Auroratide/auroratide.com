import type { ThemeName } from "$lib/NEW/design-system/Color"
import type { IconName } from "$lib/NEW/design-system/vector-icon"
import type { PortfolioCategory } from "./Category"

export type PortfolioType = {
	id: string,
	title: string,
	category: PortfolioCategory,
	publishedAt: Date,
	tags: string[],
	content: string,
	icon: IconName,
	color: ThemeName,
	order: number,
	cover: {
		alt: string,
	},
	summary: {
		short: string,
		display: string,
	},
	links: {
		title: string,
		href: string,
		icon: IconName,
		color: ThemeName,
	}[],
	gallery: {
		src: string,
		alt: string,
		caption: string,
		width: number,
		height: number,
	}[]
}

export type SummarizedPortfolio = Omit<PortfolioType, "content" | "links" | "gallery">

export const mdToPortfolio = (attributes: Record<string, unknown>, html: string): PortfolioType => ({
	...mdToSummarizedPortfolio(attributes),
	content: html,
	links: (attributes.links as any[])?.map((it) => ({
		title: it.title,
		href: it.href,
		icon: it.icon,
		color: it.color,
	})) ?? [],
	gallery: (attributes.gallery as any[])?.map((it) => ({
		src: it.src,
		alt: it.alt,
		caption: it.caption,
		width: it.width,
		height: it.height,
	})) ?? [],
})

export const mdToSummarizedPortfolio = (attributes: Record<string, unknown>): SummarizedPortfolio => ({
	id: attributes.id as string,
	title: attributes.title as string,
	category: attributes.category as PortfolioCategory,
	publishedAt: new Date(attributes.publishedAt as string),
	tags: attributes.tags as string[],
	icon: attributes.icon as IconName,
	color: attributes.color as ThemeName,
	summary: {
		short: attributes.summary as string,
		display: attributes.summaryDisp as string,
	},
	order: attributes.order as number,
	cover: attributes.cover as any,
})
