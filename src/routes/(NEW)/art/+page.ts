import type { PageLoad } from "./$types"
import { mdToSummarizedArt, type SummarizedArt } from "$lib/NEW/auroratide/art"
import { byPublishedAt } from "$lib/NEW/auroratide/art/sort"

export const load: PageLoad = async () => {
	const modules = import.meta.glob("$content/art/*/content.md")

	const values: SummarizedArt[] = await Promise.all(
		Object.values(modules).map((imp) =>
			imp().then((module: any) => mdToSummarizedArt(module.attributes))
		)
	)

	return {
		values: values.toSorted(byPublishedAt),
	}
}
