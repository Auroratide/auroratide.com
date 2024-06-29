import type { PageLoad } from "./$types"
import { mdToSummarizedArticle, type SummarizedArticle } from "$lib/auroratide/articles"
import { byPublishedAt } from "$lib/auroratide/articles/sort"
import NavContent from "./NavContent.svelte"

export const load: PageLoad = async () => {
	const modules = import.meta.glob("$content/posts/*/content.md")

	const values: SummarizedArticle[] = await Promise.all(
		Object.values(modules).map((imp) =>
			imp().then((module: any) => mdToSummarizedArticle(module.attributes))
		)
	)

	return {
		values: values.toSorted(byPublishedAt),
		navcontent: NavContent,
	}
}
