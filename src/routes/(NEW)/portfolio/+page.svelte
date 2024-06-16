<script lang="ts">
	import type { PageData } from "./$types"
	import { PortfolioCard } from "$lib/NEW/auroratide/portfolio/PortfolioCard"
	import { TransparentList } from "$lib/NEW/design-system/TransparentList"

	export let data: PageData
</script>

<ul class="{TransparentList()} flexible-grid">
	{#each data.values as value (value.id)}
		<li class="align-to-grid">
			<PortfolioCard {value} />
		</li>
	{/each}
</ul>


<style>
	.flexible-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(calc(max(50%, 17.5em) - 1em), 1fr));
		column-gap: 1em;
		row-gap: 0;
	}

	.align-to-grid {
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 2;
	}
</style>