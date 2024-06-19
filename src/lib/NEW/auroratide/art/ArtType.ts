import type { ThemeName } from "$lib/NEW/design-system/Color"
import type { IconName } from "$lib/NEW/design-system/vector-icon"

export type ArtType = {
	id: string,
	title: string,
	category: string,
	publishedAt: Date,
	tags: string[],
	content: string,
	icon: IconName,
	color: ThemeName,
	img: {
		src: string,
		alt: string,
		width: number
		height: number
	},
	summary: {
		short: string,
	},
}

export type SummarizedArt = Omit<ArtType, "content">

export const mdToArt = (attributes: Record<string, unknown>, html: string): ArtType => ({
	...mdToSummarizedArt(attributes),
	content: html,
})

export const mdToSummarizedArt = (attributes: Record<string, unknown>): SummarizedArt => ({
	id: attributes.id as string,
	title: attributes.title as string,
	category: attributes.category as string,
	publishedAt: new Date(attributes.publishedAt as string),
	tags: attributes.tags as string[],
	icon: attributes.icon as IconName,
	color: attributes.color as ThemeName,
	img: {
		src: (attributes as any).img.src as string,
		alt: (attributes as any).img.alt as string,
		width: (attributes as any).img.width as number,
		height: (attributes as any).img.height as number,
	},
	summary: {
		short: attributes.summary as string,
	},
})
