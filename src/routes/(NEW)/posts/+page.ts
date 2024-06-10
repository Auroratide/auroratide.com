import type { PageLoad } from "./$types"
import { mdToSummarizedArticle, type SummarizedArticle } from "$lib/NEW/auroratide/articles"
import { byPublishedAt } from "$lib/NEW/auroratide/articles/sort"

export const load: PageLoad = async () => {
	const modules = import.meta.glob("$content/posts/*/content.md")

	const values: SummarizedArticle[] = await Promise.all(
		Object.values(modules).map((imp) =>
			imp().then((module: any) => mdToSummarizedArticle(module.attributes))
		)
	)

	return {
		values: values.toSorted(byPublishedAt),
	}
}
