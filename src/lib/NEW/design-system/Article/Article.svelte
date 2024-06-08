<script lang="ts">
	import type { ArticleType } from "./ArticleType"
	import { HtmlContent } from "../HtmlContent"
	import { Color } from "../Color";
	import { DateDisplay } from "../DateDisplay";
	import ArticleLinks from "./ArticleLinks.svelte";

	export let value: ArticleType
</script>

<article>
	<header class="large-space-after">
		<h1 class="{Color.text.fg.b} very-large topmost-item-spacing balance">{value.title}</h1>
		<p><small><DateDisplay value={value.publishedAt} /></small></p>
		{#if value.links.length > 0}
			<ArticleLinks value={value.links} />
		{/if}
	</header>
	<section>
		<HtmlContent value={value.content} />
	</section>
</article>

<style>
	.very-large { font-size: 2.5em; }

	.topmost-item-spacing {
		margin-block-start: 0;
		line-height: 1em;
	}

	.large-space-after { margin-block-end: 4em; }

	.balance { text-wrap: balance; }
</style>