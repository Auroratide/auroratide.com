<script lang="ts">
	import { HtmlContent } from "$lib/design-system/PageContent"
	import {PageContent } from "$lib/design-system/pages"
	import { attributes, html } from "./content.md"
	import { page } from "$app/stores"

	const title = attributes.title as string
	const description = attributes.description as string
</script>

<StaticPage {title} {description} pathname={$page.url.pathname}>
	<section slot="content">
		<HtmlContent value={html} />
	</section>
</StaticPage>
PageContent