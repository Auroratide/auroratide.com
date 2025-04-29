<script lang="ts">
	import type { TypewrittenTextElement } from "@auroratide/typewritten-text"
	import { onMount } from "svelte"

	export let src: string
	export let title: string

	let active = false
	let revealerElem: HTMLElement
	let paragraphsElem: HTMLElement

	let showParagraphs = false

	const startTyping = () => {
		showParagraphs = true
		// paragraphsElem.querySelector<TypewrittenTextElement>("typewritten-text")?.type()
	}

	onMount(() => {
		const observer = new IntersectionObserver((entries, observer) => {
			if (entries[0].isIntersecting) {
				observer.disconnect()
				active = true
				setTimeout(startTyping, 500)
			}
		}, {
			rootMargin: "0px",
			threshold: 1.0,
		})

		if (revealerElem != null) {
			observer.observe(revealerElem)
		}
	})
</script>

<section class="img-section" class:active>
	<img {src} alt="" aria-hidden="true" />
	<h2>{title}</h2>
	<div class="paragraphs" bind:this={paragraphsElem} class:show={showParagraphs}>
		<slot></slot>
	</div>
	<div bind:this={revealerElem} class="revealer"></div>
</section>

<style>
	.img-section {
		position: relative;
		margin-block: 6em;
	}

	img {
		inline-size: 100%;
		filter: brightness(0.5);
		position: absolute;
		z-index: -1;
		transform: scale(1.75) translateY(12.5%);
		transition: filter 0.75s ease-out;
		mask-image: radial-gradient(black, black 40%, transparent 70%);
	} .active img {
		filter: brightness(0.15) blur(0.05em);
	}

	h2 {
		font-family: "Lavishly Yours", cursive;
		text-align: center;
		font-size: 3em;
		margin: 0 0 0.5em 0;
		text-shadow:
			0.025em 0.025em 0 oklch(100% 0.2 30 / 0.25),
			0.0625em 0.0625em 0 oklch(0% 0 0),
			0 0 0.25em oklch(0% 0 0);
		pointer-events: none;
		transform-origin: top center;
		transform: scale(1.667);
		transition: transform 0.75s ease-out;
	} .active h2 {
		transform: scale(1);
	}

	.revealer {
		top: min(75vh, 100%);
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	.paragraphs {
		opacity: 0;
		transform: translateY(2em);
		transition: opacity 1s ease-out, transform 1s ease-out;
	} .paragraphs.show {
		opacity: 1;
		transform: translateY(0);
	}
</style>