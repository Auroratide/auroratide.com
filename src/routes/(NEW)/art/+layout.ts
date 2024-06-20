import type { LayoutLoad } from "./$types"
import { mdToSummarizedArt, type SummarizedArt } from "$lib/auroratide/art"
import { byPublishedAt } from "$lib/auroratide/art/sort"

export const load: LayoutLoad = async () => {
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
