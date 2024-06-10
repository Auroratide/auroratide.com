import type { PageLoad } from "./$types"
import { mdToArticle } from "$lib/NEW/auroratide/articles"

export const load: PageLoad = async ({ params }) => {
	const id = params.id
	const { attributes, html } = await import(`$content/posts/${id}/content.md`)

	return {
		value: mdToArticle(attributes, html)
	}
}
