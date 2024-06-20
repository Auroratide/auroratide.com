<script lang="ts">
	import { SiteInfo } from "../SiteInfo"
	import { SkipLink } from "../SkipLink"
	import LogoTitle from "./LogoTitle.svelte"
	import type { NavItem } from "./NavItem"
	import Navigation from "./Navigation.svelte"

	export let nav: NavItem[]

	const {
		title,
		subtitle,
	} = SiteInfo.get()
</script>

<SkipLink />
<div class="container">
	<header aria-label="Site" class="overlap-root row lg:column large-spaces-between print:hide">
		<LogoTitle {title} {subtitle}>
			<slot name="logo"></slot>
		</LogoTitle>
		<Navigation {nav} />
	</header>
	<main id="main">
		<slot></slot>
	</main>
	<footer aria-label="Site" class="print:hide">
		<p>Footer</p>
	</footer>
</div>

<style>
	.container {
		max-width: 90rem;
		margin: auto;
		padding: 0.75em 0.5em;
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: space-between;
	}

	.overlap-root { position: relative; }

	.large-spaces-between { gap: 2em; }

	@media screen and (min-width: 60rem) {
		.container {
			display: grid;
			grid-template-columns: 20rem minmax(0, 1fr);
		}

		header {
			grid-row: span 2;
		}

		.lg\:column {
			flex-direction: column;
			align-items: stretch;
			justify-content: flex-start;
		}
	}

	@media print {
		.container {
			padding: 0;
		}

		.print\:hide {
			display: none;
		}
	}
</style>