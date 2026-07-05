<script lang="ts">
	import type { ReadingType } from "../ReadingType"
	import { PageContent } from "$lib/design-system/PageContent"
	import { Byline } from "$lib/design-system/Byline"
	import { ArticlePage } from "$lib/design-system/pages"
	import { TagsList } from "$lib/design-system/TagsList"
	import { Routes } from "../../routes"
	import { BulletDivider } from "$lib/design-system/BulletDivider"
	import { Comments } from "../Comments"
    import OriginalArticleCard from "./OriginalArticleCard.svelte";

	export let value: ReadingType
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
		<OriginalArticleCard author={value.author} publisher={value.publisher} publishedAt={value.originalPublishedAt} href={value.href} type={value.type} />
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