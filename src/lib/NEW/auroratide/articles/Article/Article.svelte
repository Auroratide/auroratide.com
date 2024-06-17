<script lang="ts">
	import type { ArticleType } from "../ArticleType"
	import { HtmlContent } from "$lib/NEW/design-system/HtmlContent"
	import { Byline } from "$lib/NEW/design-system/Byline"
	import { LinkList } from "$lib/NEW/design-system/LinkList"
	import { ArticlePage } from "$lib/NEW/design-system/pages"

	export let value: ArticleType
</script>

<ArticlePage title={value.title} theme={value.color} icon={value.icon}>
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
