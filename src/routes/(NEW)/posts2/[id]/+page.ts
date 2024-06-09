import type { PageLoad } from "./$types"
import type { ArticleType } from "$lib/NEW/design-system/Article"
import type { IconName } from "$lib/NEW/design-system/Icon"
import type { ThemeName } from "$lib/NEW/design-system/Color"

export const load: PageLoad = async ({ params }) => {
	const id = params.id
	const { attributes, html } = await import(`$content/posts2/${id}/content.md`)

	const value: ArticleType = {
		id: attributes.id as string,
		title: attributes.title as string,
		category: attributes.category as string,
		publishedAt: new Date(attributes.publishedAt as string),
		content: html,
		icon: attributes.icon as IconName,
		color: attributes.color as ThemeName,
		summary: {
			short: attributes.summary as string,
			long: attributes.longSummary as string,
		},
		links: (attributes.links as any[])?.map((it) => ({
			title: it.title,
			href: it.href,
			icon: it.icon,
			color: it.color,
		})) ?? []
	}

	return { value }
}
