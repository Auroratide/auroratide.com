<script lang="ts">
	import type { SummarizedArt } from "../ArtType"
	import { Color, Theme } from "$lib/NEW/design-system/Color"
	import { Routes } from "$lib/NEW/auroratide/routes"

	export let value: SummarizedArt
</script>

<article aria-labelledby="{value.id}" class="{Theme(value.color)} {Color.bg.bg.b} {Color.border.primary.a} border-after column lift-on-focus">
	<h2 id="{value.id}" class="balance no-margin overlay-bottom title-padding text-center">
		<a href="{Routes.Art.href(value.id)}" class="{Color.text.fg.b} no-underline">{value.title}</a>
	</h2>
	<img-colorscape colorscape="{Routes.Art.cover.colorscape(value.id)}">
		<img src="{Routes.Art.cover.main(value.id)}" alt="{value.img.alt}" loading="lazy" width="400" height="400" />
	</img-colorscape>
	<a href="{Routes.Art.href(value.id)}" class="{Color.text.fg.b} card-link" aria-hidden="true" tabindex="-1">{value.title}</a>
</article>

<style>
	.balance { text-wrap: balance; }
	.no-underline { text-decoration: none; }
	.no-margin { margin: 0; }
	.space-above { padding-block-start: 0.5em; }

	.column {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.card-link {
		display: block;
		position: absolute;
		inset: 0;
		z-index: 3;
		color: transparent;
	}

	article {
		position: relative;
		overflow: hidden;
		margin-block-end: 1.5em;
	}

	.border-after {
		border-block-end-width: 0.5em;
		border-block-end-style: solid;
	}

	p { line-height: 1.5em; }

	.icon-bg {
		position: absolute;
		inset-inline-end: -0.05em;
		inset-block-start: -0.05em;
		transform: rotate(5deg);
		font-size: 7.5em;
		opacity: 0.25;
	}

	.lift-on-focus {
		transition: all 0.2s ease-in-out;
		box-shadow: 0 0 0 0 oklch(0% 0 0 / 0.5);
	}

	.lift-on-focus:hover, .lift-on-focus:focus-within {
		transform: scale(1.025);
		box-shadow: 0 1em 1em -0.5em oklch(0% 0 0 / 0.5);
	}

	.lift-on-focus:active {
		transition: all 0.08s ease-out;
		transform: scale(1);
		box-shadow: 0 0 0 0 oklch(0% 0 0 / 0.5);
	}

	img-colorscape {
		display: block;
	}

	.overlay-bottom {
		position: absolute;
		inset-inline: 0;
		inset-block-end: 0;
		z-index: 2;
		background: oklch(0% 0 0 / 0.825);
	}

	.title-padding {
		padding: 0.333em 0.25em;
	}

	.text-center { text-align: center; }
</style>