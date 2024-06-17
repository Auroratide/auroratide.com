<script lang="ts">
	import type { PortfolioType } from "../PortfolioType"
	import { HtmlContent } from "$lib/NEW/design-system/HtmlContent"
	import { Byline } from "$lib/NEW/design-system/Byline"
	import { LinkList } from "$lib/NEW/design-system/LinkList"
	import { Gallery } from "$lib/NEW/design-system/Gallery"
	import { ArticlePage } from "$lib/NEW/design-system/pages"

	export let value: PortfolioType
</script>

<ArticlePage title={value.title} theme={value.color} icon={value.icon}>
	<div slot="header">
		<p><Byline {value} /></p>
		{#if value.links.length > 0}
			<LinkList values={value.links} />
		{/if}
	</div>
	<div slot="content">
		<section>
			<Gallery values={value.gallery} />
		</section>
		<icon-divider icon="{value.icon}"></icon-divider>
		<section>
			<HtmlContent value={value.content} />
		</section>
	</div>
</ArticlePage>

<style>
	icon-divider {
		margin-block: 3em;
	}
</style>