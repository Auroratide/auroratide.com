<script lang="ts">
	import type { ArticleType } from "../ArticleType"
	import { PageContent } from "$lib/design-system/PageContent"
	import { Byline } from "$lib/design-system/Byline"
	import { LinkList } from "$lib/design-system/LinkList"
	import { ArticlePage } from "$lib/design-system/pages"
	import { TagsList } from "$lib/design-system/TagsList"
	import { Routes } from "../../routes"
	import { BulletDivider } from "$lib/design-system/BulletDivider"

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
		<div class="topics-row">
			<span>Topics</span>
			<BulletDivider />
			<TagsList values={value.tags} />
		</div>
		{#if value.links.length > 0}
			<LinkList values={value.links} />
		{/if}
	</div>
	<section id="article-content" slot="content">
		<PageContent value={value.content} />
	</section>
</ArticlePage>

<style>
	.topics-row {
		display: flex;
		align-items: flex-start;
		gap: 0.5em;
		margin-block-end: 1.5em;
		font-size: 0.875em;
	}
</style>