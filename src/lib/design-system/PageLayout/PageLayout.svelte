<script lang="ts">
	import { Container } from "../Container"
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
<Container>
	<div class="lg:two-columns">
		<header aria-label="Site" class="overlap-root row lg:column large-spaces-between print:hide">
			<LogoTitle {title} {subtitle}>
				<slot name="logo"></slot>
			</LogoTitle>
			<Navigation nav={headerNav}>
				<slot name="header"></slot>
			</Navigation>
		</header>
		<main id="main">
			<slot></slot>
		</main>
		<PageFooter nav={footerNav}>
			<slot name="footer"></slot>
		</PageFooter>
	</div>
</Container>

<style>
	.row {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: space-between;
	}

	.overlap-root { position: relative; }

	.large-spaces-between { gap: 2em; }

	@media screen and (min-width: 60rem) {
		.lg\:two-columns {
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
		.print\:hide {
			display: none;
		}
	}
</style>