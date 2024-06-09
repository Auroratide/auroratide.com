import type { ThemeName } from "../Color"
import type { IconName } from "../Icon"

export type ArticleType = {
	id: string,
	title: string,
	category: string,
	publishedAt: Date,
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
