<script lang="ts">
	import { HtmlContent } from "$lib/NEW/design-system/HtmlContent"
	import { StaticPage } from "$lib/NEW/design-system/pages"
	import { attributes, html } from "./content.md"

	const title = attributes.title as string
</script>

<StaticPage {title}>
	<section slot="content">
		<HtmlContent value={html} />
	</section>
</StaticPage>
