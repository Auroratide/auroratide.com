import type { PageLoad } from "./$types"
import type { SummarizedArticle } from "$lib/NEW/design-system/Article"
import type { IconName } from "$lib/NEW/design-system/Icon"
import type { ThemeName } from "$lib/NEW/design-system/Color"

export const load: PageLoad = async () => {
	const modules = import.meta.glob("$content/posts2/*/content.md")

	const values: SummarizedArticle[] = await Promise.all(Object.values(modules).map((imp) => {
		return imp().then((module: any) => ({
			id: module.attributes.id as string,
			title: module.attributes.title as string,
			category: module.attributes.category as string,
			publishedAt: new Date(module.attributes.publishedAt as string),
			icon: module.attributes.icon as IconName,
			color: module.attributes.color as ThemeName,
			summary: {
				short: module.attributes.summary as string,
				long: module.attributes.longSummary as string,
			},
		}))
	}))

	return { values }
}
