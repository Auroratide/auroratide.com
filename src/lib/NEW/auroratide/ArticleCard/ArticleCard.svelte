<script lang="ts">
    import type { SummarizedArticle } from "$lib/NEW/design-system/Article"
    import { Byline } from "$lib/NEW/design-system/Byline";
    import { Color, Theme } from "$lib/NEW/design-system/Color";
    import { Icon } from "$lib/NEW/design-system/Icon";

	export let value: SummarizedArticle
</script>

<article aria-labelledby="{value.id}" class="{Theme(value.color)} {Color.bg.bg.b} {Color.border.primary.a} border-after column lift-on-focus">
	<h2 id="{value.id}" class="balance no-margin">
		<a href="/posts2/{value.id}" class="{Color.text.fg.b} no-underline card-link">{value.title}</a>
	</h2>
	<Byline {value} />
	<p class="no-margin space-above">{value.summary.long}</p>
	<div class="icon-bg {Color.text.primary.a}">
		<Icon icon="{value.icon}" />
	</div>
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

	.card-link::after {
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		z-index: 2;
	}

	article {
		padding: 1em;
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
</style>