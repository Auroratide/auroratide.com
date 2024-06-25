import type { PageLoad } from "./$types"
import { mdToSummarizedStory, type SummarizedStory } from "$lib/auroratide/stories"
import { byPublishedAt } from "$lib/auroratide/articles/sort"

export const load: PageLoad = async () => {
	const modules = import.meta.glob("$content/stories/*/content.md")

	const values: SummarizedStory[] = await Promise.all(
		Object.values(modules).map((imp) =>
			imp().then((module: any) => mdToSummarizedStory(module.attributes))
		)
	)

	return {
		values: values.toSorted(byPublishedAt),
	}
}
