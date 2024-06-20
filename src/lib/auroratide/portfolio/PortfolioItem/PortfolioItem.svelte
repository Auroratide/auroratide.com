<script lang="ts">
	import type { PortfolioType } from "../PortfolioType"
	import { PageContent } from "$lib/design-system/PageContent"
	import { Byline } from "$lib/design-system/Byline"
	import { LinkList } from "$lib/design-system/LinkList"
	import { Gallery } from "$lib/design-system/Gallery"
	import { ArticlePage } from "$lib/design-system/pages"
	import { Routes } from "$lib/auroratide/routes"

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
			<PageContent value={value.content} />
		</section>
	</div>
</ArticlePage>

<style>
	icon-divider {
		margin-block: 3em;
	}
</style>