<script lang="ts">
	import Header from './Header.svelte'
	import Contact from './Contact.svelte'
	import Skills from './Skills.svelte'
	import Education from './Education.svelte'
	import Experience from './Experience.svelte'
	import FunFacts from './FunFacts.svelte'
	import { PageMeta } from "$lib/design-system/PageMeta"
</script>

<PageMeta pagetitle="Timothy Foster's Resume" description="Timothy Foster's resume and qualifications." />
<article class="resume">
	<Header />
	<Contact />
	<Experience />
	<Skills />
	<Education />
	<FunFacts />
	<div class="blank"></div>
</article>

<style>
	.resume {
		padding: 0 0.5em;
	}

	.resume :global(h2) {
		background: var(--t-bg-b);
		color: var(--t-fg-b);
		line-height: 1;
		margin: 0 -0.25em 0.5em;
		padding: 0.25em;
	}

	.resume :global(a) {
		color: var(--t-primary-b);
	} .resume :global(a:hover), .resume :global(a:focus) {
		text-decoration: none;
		filter: brightness(1.25);
	}

	.blank {
		grid-area: blank;
		display: none;
	}

	@media screen and (min-width: 80rem) {
		.resume {
			display: grid;
			grid-template-columns: 19fr 9fr;
			grid-template-rows: auto auto auto 1fr;
			grid-template-areas:
				"header contact"
				"experience skills"
				"experience education"
				"experience fun-facts";
			gap: 2em;
		}
	}

	@media print {
		:root {
			--c-light-mid: oklch(90% 0 0);
		}

		.resume {
			min-height: 101.15vh;
			font-size: 13px;
			padding: 0;
			display: grid;
			grid-template-columns: 2fr 5fr;
			grid-template-rows: auto auto auto auto auto 1fr;
			grid-template-areas:
				"header experience"
				"contact experience"
				"skills experience"
				"education experience"
				"fun-facts experience"
				"blank experience";
		}

		.resume :global(a) {
			text-decoration: none;
		}

		.blank {
			display: block;
			background-color: var(--c-light-mid);
		}

		.resume :global(h2) {
			background: none;
			margin: 0 0 0.5em 0;
			font-size: 1.75em;
			text-transform: uppercase;
			padding: 0;
		}
	}
</style>
