<script lang="ts">
	import type { TypewrittenTextElement } from "@auroratide/typewritten-text"
	import { onMount } from "svelte"

	export let id: string
	export let next: string | undefined = undefined

	let typewriter: TypewrittenTextElement

	// There's a bug in the typewritten-text that it doesn't respect fast type-speeds very well.
	// for now, there's just a general fade handled by ImgSection.

	// onMount(() => {
	// 	if (next != null) {
	// 		typewriter.addEventListener("typed", () => {
	// 			const nextTypewriter = document.querySelector<TypewrittenTextElement>(`#${next}`)
	// 			if (nextTypewriter != null) {
	// 				setTimeout(() => {
	// 					nextTypewriter.type()
	// 				}, nextTypewriter.repeatInterval)
	// 			}
	// 		})
	// 	}
	// })
</script>

<p>
	<!-- <typewritten-text {id} bind:this={typewriter} paused type-speed="0" repeat-interval="100"><slot></slot></typewritten-text> -->
	<slot></slot>
</p>

<style>
	p {
		line-height: 1.5;
	}

	/* typewritten-text :global(.cursor.current::after) {
		display: none;
	}
	
	typewritten-text :global(.char) {
		visibility: visible;
		opacity: 1;
		transition: opacity 0.1s linear;
	}
	
	typewritten-text :global(.char[hidden]) {
		visibility: visible;
		opacity: 0;
	} */
</style>