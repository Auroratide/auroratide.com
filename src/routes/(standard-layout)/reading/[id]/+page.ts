import type { PageLoad } from "./$types"
import { mdToReading } from "$lib/auroratide/reading"
import NavContent from "./NavContent.svelte"

export const load: PageLoad = async ({ params }) => {
	const id = params.id
	const { attributes, html } = await import(`$content/reading/${id}/content.md`)

	return {
		value: mdToReading(attributes, html),
		navcontent: NavContent,
	}
}
