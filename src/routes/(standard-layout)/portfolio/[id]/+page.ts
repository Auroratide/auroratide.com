import type { PageLoad } from "./$types"
import { mdToPortfolio } from "$lib/auroratide/portfolio"

export const load: PageLoad = async ({ params }) => {
	const id = params.id
	const { attributes, html } = await import(`$content/portfolio/${id}/content.md`)

	return {
		value: mdToPortfolio(attributes, html)
	}
}
