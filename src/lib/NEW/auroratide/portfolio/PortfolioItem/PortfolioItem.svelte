<script lang="ts">
	import type { PortfolioType } from "../PortfolioType"
	import { HtmlContent } from "$lib/NEW/design-system/HtmlContent"
	import { Color, Theme } from "$lib/NEW/design-system/Color"
	import { Byline } from "$lib/NEW/design-system/Byline"
	import { TransparentList } from "$lib/NEW/design-system/TransparentList"
	import { LinkList } from "$lib/NEW/design-system/LinkList"

	export let value: PortfolioType
</script>

<article class="{Theme(value.color)}">
	<header class="large-space-after icon-bg-container">
		<div class="icon-bg {Color.text.bg.a} {Color.bg.primary.a}">
			<vector-icon icon="{value.icon}"></vector-icon>
		</div>
		<h1 class="{Color.text.fg.b} very-large topmost-item-spacing balance">{value.title}</h1>
		<p><Byline {value} /></p>
		{#if value.links.length > 0}
			<LinkList values={value.links} />
		{/if}
	</header>
	<section>
		<ul class="{TransparentList()}">
			{#each value.gallery as img (img.src)}
				<li>
					<figure>
						<img-zoom>
							<img src="{img.src}" alt="{img.alt}" loading="lazy" width="{img.width}" height="{img.height}" />
						</img-zoom>
						<figcaption>{img.caption}</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	</section>
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
		overflow: visible;
	}
	.icon-bg-container > *:not(.icon-bg) { position: relative; }
	.icon-bg {
		position: absolute;
		font-size: 12em;
		inset-block-start: -0.3em;
		inset-inline-end: -0.15em;
		inline-size: 1.75em;
		block-size: 1.75em;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.125;
		transform: rotate(5deg);
		pointer-events: none;
		z-index: -1;
	}
</style>