<script lang="ts">
	import type { IconName } from "../vector-icon"
	import { Color, Theme, type ThemeName } from "$lib/NEW/design-system/Color"

	export let title: string
	export let theme: ThemeName
	export let icon: IconName
</script>

<article class="{Theme(theme)}">
	<header class="large-space-after icon-bg-container">
		<div class="icon-bg {Color.text.bg.a} {Color.bg.primary.a}">
			<vector-icon icon="{icon}"></vector-icon>
		</div>
		<h1 class="{Color.text.fg.b} very-large topmost-item-spacing balance">{title}</h1>
		<slot name="header"></slot>
	</header>
	<slot name="content"></slot>
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