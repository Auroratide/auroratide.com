import type { ThemeName } from "../Color"
import type { IconName } from "../Icon"

export type ArticleType = {
	title: string,
	publishedAt: Date,
	content: string,
	icon: IconName,
	color: ThemeName,
	links: {
		title: string,
		href: string,
		icon: IconName,
		color: ThemeName,
	}[],
}
