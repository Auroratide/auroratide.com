import type { DoodleMetadata } from "$lib/auroratide/doodles"
import type { PageLoad } from "./$types"
import NavContent from "./NavContent.svelte"

export const load: PageLoad = async () => {
	const doodles = import.meta.glob<true, string, { metadata: DoodleMetadata }>("./\\(content)\\/**/metadata.ts", { eager: true })

	return {
		values: Object.values(doodles).map((it) => it.metadata).sort((a, b) => b.published.getTime() - a.published.getTime()),
		navcontent: NavContent,
	}
}
