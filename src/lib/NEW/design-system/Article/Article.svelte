<script lang="ts">
	import type { ArticleType } from "./ArticleType"
	import { HtmlContent } from "../HtmlContent"
	import { Color, Theme } from "../Color";
	import { DateDisplay } from "../DateDisplay";
	import ArticleLinks from "./ArticleLinks.svelte";
	import { Icon } from "../Icon"

	export let value: ArticleType
</script>

<article class="{Theme(value.color)}">
	<header class="large-space-after icon-bg-container">
		<div class="icon-bg {Color.text.primary.a}">
			<Icon icon="{value.icon}" />
		</div>
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

	.large-space-after {
		min-height: 12.5em;
		margin-block-end: 1em;
	}

	.balance { text-wrap: balance; }

	.icon-bg-container {
		position: relative;
		overflow: hidden;
	}
	.icon-bg-container > *:not(.icon-bg) { position: relative; }
	.icon-bg {
		position: absolute;
		display: block;
		font-size: 12em;
		inset-block-start: 0;
		inset-inline-end: 0.125em;
		opacity: 0.125;
		transform: rotate(5deg);
		pointer-events: none;
	}
</style>