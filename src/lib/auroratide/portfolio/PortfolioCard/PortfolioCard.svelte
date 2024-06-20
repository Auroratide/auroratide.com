<script lang="ts">
	import type { SummarizedPortfolio } from "../PortfolioType"
	import { Byline } from "$lib/design-system/Byline"
	import { Color, Theme } from "$lib/design-system/Color"
	import { Routes } from "$lib/auroratide/routes"

	export let value: SummarizedPortfolio
</script>

<article aria-labelledby="{value.id}" class="{Theme(value.color)} lift-on-focus align-to-grid">
	<section class="{Color.bg.bg.b} {Color.border.primary.a} border-after column">
		<h2 id="{value.id}" class="balance no-margin">
			<a href="{Routes.Portfolio.href(value.id)}" class="{Color.text.fg.b} no-underline card-link">{value.title}</a>
		</h2>
		<p class="no-margin space-above small relative row align-start">
			<span class="row">
				<span class="capital">{value.category}</span>
				<span class="large-bullet">&bull;</span>
			</span>
			<span>{value.summary.display}</span>
		</p>
		<div class="icon-bg {Color.text.primary.a}" aria-hidden="true">
			<vector-icon icon="{value.icon}"></vector-icon>
		</div>
	</section>
	<footer>
		<img src="{Routes.Portfolio.cover(value.id)}" alt="{value.cover.alt}" width="800" height="450" />
	</footer>
</article>

<style>
	.balance { text-wrap: balance; }
	.no-underline { text-decoration: none; }
	.no-margin { margin: 0; }
	.space-above { padding-block-start: 0.5em; }

	.column {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5ch;
	} .row.align-start {
		align-items: flex-start;
	}

	.card-link::after {
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		z-index: 3;
	}

	article {
		position: relative;
		overflow: hidden;
		margin-block-end: 1.5em;
	}

	section {
		padding: 1em;
		margin: 0;
	}

	h2 { font-size: 1.25em; }

	.relative { position: relative; z-index: 2; }

	footer { padding: 0; }
	img {
		display: block;
		margin: 0;
		width: 100%;
		height: auto;
		position: relative;
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

	.capital { text-transform: capitalize; }
	.small {
		font-size: 0.875em;
		line-height: 1.25em;
	}

	.large-bullet {
		font-size: 2em;
		font-weight: bold;
		line-height: 0.5em;
	}

	.align-to-grid {
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 2;
	}
</style>