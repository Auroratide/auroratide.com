<script lang="ts">
	import type { ArticleType } from "../ArticleType"
	import { HtmlContent } from "$lib/NEW/design-system/HtmlContent"
	import { Byline } from "$lib/NEW/design-system/Byline"
	import { LinkList } from "$lib/NEW/design-system/LinkList"
	import { ArticlePage } from "$lib/NEW/design-system/pages"
	import { Routes } from "../../routes"

	export let value: ArticleType
</script>

<ArticlePage
	title={value.title}
	description={value.summary.short}
	theme={value.color}
	icon={value.icon}
	category={value.category}
	tags={value.tags}
	published={value.publishedAt}
	pathname={Routes.Posts.href(value.id)}
>
	<div slot="header">
		<p><Byline {value} /></p>
		{#if value.links.length > 0}
			<LinkList values={value.links} />
		{/if}
	</div>
	<section slot="content">
		<HtmlContent value={value.content} />
	</section>
</ArticlePage>
