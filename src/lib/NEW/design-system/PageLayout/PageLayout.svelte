<script lang="ts">
	import LogoTitle from "./LogoTitle.svelte"
	import type { NavItem } from "./NavItem"
    import Navigation from "./Navigation.svelte";

	export let sitetitle: string
	export let subtitle: string
	export let nav: NavItem[]
</script>

<div class="container">
	<header aria-label="Site" class="overlap-root row lg:column large-spaces-between">
		<LogoTitle title={sitetitle} {subtitle}>
			<slot name="logo"></slot>
		</LogoTitle>
		<Navigation {nav} />
	</header>
	<main id="main">
		<slot></slot>
	</main>
	<footer aria-label="Site">
		<p>Footer</p>
	</footer>
</div>

<style>
	.container {
		max-width: 75rem;
		margin: auto;
		border: 1px solid red;
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
			grid-template-columns: 20rem 1fr;
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
</style>