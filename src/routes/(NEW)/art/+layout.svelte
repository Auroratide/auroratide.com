<script lang="ts">
	import type { PageData } from "./$types"
	import { ArtCard } from "$lib/auroratide/art/ArtCard"
	import { ArtCategories } from "$lib/auroratide/art/Category"
	import { PageTitle } from "$lib/design-system/PageTitle"
	import { SimpleCheckboxList } from "$lib/design-system/SimpleCheckboxList"
	import { TransparentList } from "$lib/design-system/TransparentList"
	import { page } from "$app/stores"
	import { Routes } from "$lib/auroratide/routes"

	export let data: PageData

	let activeCategories: string[] = []

	$: isListPage = $page.url.pathname === Routes.Art.href()
</script>

<!-- This is a manual copy of ListPage, because I cannot render the page meta in layout -->
<!-- And yet I want this rendered into the background of the art page itself -->
<div aria-hidden="{!isListPage}" inert={!isListPage}>
	<header class="medium-space-after">
		<PageTitle>Art</PageTitle>
		<div class="smaller">
			<SimpleCheckboxList label="Categories" options={ArtCategories} bind:value={activeCategories} />
		</div>
	</header>
	<ul class="{TransparentList()} flexible-grid" style:--item-width="max({100 / 3}%, {45 / 3}em)">
		{#each data.values as item (item.id)}
			{#if activeCategories.length === 0 || activeCategories.includes(item.category ?? "")}
				<li class="align-to-grid">
					<ArtCard value={item} />
				</li>
			{/if}
		{/each}
	</ul>
</div>

<slot></slot>

<style>
	.medium-space-after {
		min-height: 5em;
		margin-block-end: 1em;
	}

	.flexible-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, calc(var(--item-width) - 1em)), 1fr));
		column-gap: 1em;
		row-gap: 0;
	}

	.align-to-grid {
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 2;
	}

	.smaller { font-size: 0.875em; }
</style>
