<script lang="ts">
    import { PageFooter } from "../PageFooter";
	import { SiteInfo } from "../SiteInfo"
	import { SkipLink } from "../SkipLink"
	import LogoTitle from "./LogoTitle.svelte"
	import type { NavItem } from "./NavItem"
	import Navigation from "./Navigation.svelte"

	export let headerNav: NavItem[]
	export let footerNav: NavItem[]

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
		<Navigation nav={headerNav} />
	</header>
	<main id="main">
		<slot></slot>
	</main>
	<PageFooter nav={footerNav}>
		<slot name="footer"></slot>
	</PageFooter>
</div>

<style>
	.container {
		max-width: 90rem;
		margin: auto;
		padding: 0.75em 0.5em;
		display: flex;
		flex-direction: column;
		gap: 2em;
		overflow: hidden;
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