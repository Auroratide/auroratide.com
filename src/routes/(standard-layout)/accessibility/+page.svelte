<script lang="ts">
	import { PageContent } from "$lib/design-system/PageContent"
	import { StaticPage } from "$lib/design-system/pages"
	import { attributes, html } from "./content.md"
	import { page } from "$app/stores"

	const title = attributes.title as string
	const description = attributes.description as string
</script>

<StaticPage {title} {description} pathname={$page.url.pathname}>
	<section slot="content">
		<PageContent value={html} />
	</section>
</StaticPage>
