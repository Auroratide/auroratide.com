import type { PageLoad } from "./$types"
import { mdToSummarizedReading, type SummarizedReading } from "$lib/auroratide/reading"
import { byPublishedAt } from "$lib/auroratide/reading/sort"
import NavContent from "./NavContent.svelte"

export const load: PageLoad = async () => {
	const modules = import.meta.glob("$content/reading/*/content.md")

	const values: SummarizedReading[] = await Promise.all(
		Object.values(modules).map((imp) =>
			imp().then((module: any) => mdToSummarizedReading(module.attributes))
		)
	)

	return {
		values: values.toSorted(byPublishedAt),
		navcontent: NavContent,
	}
}
