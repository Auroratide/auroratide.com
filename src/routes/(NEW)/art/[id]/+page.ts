import type { PageLoad } from "./$types"
import { mdToArt } from "$lib/NEW/auroratide/art"

export const load: PageLoad = async ({ params }) => {
	const id = params.id
	const { attributes, html } = await import(`$content/art/${id}/content.md`)

	return {
		value: mdToArt(attributes, html)
	}
}
