import type { PageLoad } from "./$types"
import { mdToArticle } from "$lib/auroratide/articles"
import NavContent from "./NavContent.svelte"

export const load: PageLoad = async ({ params }) => {
	const id = params.id
	const { attributes, html } = await import(`$content/posts/${id}/content.md`)

	return {
		value: mdToArticle(attributes, html),
		navcontent: NavContent,
	}
}
