<script lang="ts">
	import type { PortfolioType } from "../PortfolioType"
	import { HtmlContent } from "$lib/NEW/design-system/HtmlContent"
	import { Byline } from "$lib/NEW/design-system/Byline"
	import { LinkList } from "$lib/NEW/design-system/LinkList"
	import { Gallery } from "$lib/NEW/design-system/Gallery"
	import { ArticlePage } from "$lib/NEW/design-system/pages"
	import { Routes } from "$lib/NEW/auroratide/routes"

	export let value: PortfolioType
</script>

<ArticlePage
	title={value.title}
	description={value.summary.short}
	theme={value.color}
	icon={value.icon}
	category={value.category}
	tags={value.tags}
	published={value.publishedAt}
	pathname={Routes.Portfolio.href(value.id)}
>
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