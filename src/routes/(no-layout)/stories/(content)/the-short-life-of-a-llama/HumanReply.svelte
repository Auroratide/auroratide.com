<script lang="ts">
	import { VisuallyHidden } from "$lib/design-system/VisuallyHidden"
	import { onMount } from "svelte"
	import { fade, slide } from "svelte/transition"
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	export let delayMs: number

	let done = false

	onMount(() => {
		setTimeout(() => {
			done = true
			dispatch("typed")
		}, delayMs)
	})
</script>

<div>
	{#if !done}
		<p transition:slide={{duration: 200}} class="text-end">
			<span class="{VisuallyHidden()} no-motion:show">typing</span>
			<span class="indicator"></span>
		</p>
	{:else}
		<div transition:fade={{duration: 200}} aria-live="polite">
			<slot></slot>
		</div>
	{/if}
</div>

<style>
	.text-end { text-align: end; }

	/* https://css-loaders.com/dots/ */
	.indicator {
		opacity: 0.75;
		display: inline-block;
		width: 2em;
		aspect-ratio: 4;
		--_g: no-repeat radial-gradient(circle closest-side, currentColor 90%, transparent);
		background:
			var(--_g) 0%   50%,
			var(--_g) 50%  50%,
			var(--_g) 100% 50%;
		background-size: calc(100% / 3) 100%;
		animation: flashing-dots 1s infinite linear;
	}

	@keyframes flashing-dots {
		33% { background-size: calc(100%/3) 0%  , calc(100%/3) 100%, calc(100%/3) 100% }
		50% { background-size: calc(100%/3) 100%, calc(100%/3) 0%  , calc(100%/3) 100% }
		66% { background-size: calc(100%/3) 100%, calc(100%/3) 100%, calc(100%/3) 0%   }
	}

	@media (prefers-reduced-motion: reduce) {
		.no-motion\:show {
			clip-path: none;
			position: static;
			overflow: visible;
			margin: 0;
			height: auto;
			width: auto;
			opacity: 0.75;
		}

		.indicator { display: none; }
	}
</style>