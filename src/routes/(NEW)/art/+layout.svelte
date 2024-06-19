<script lang="ts">
	import type { PageData } from "./$types"
	import { ArtCard } from "$lib/NEW/auroratide/art/ArtCard"
	import { TransparentList } from "$lib/NEW/design-system/TransparentList"

	export let data: PageData
</script>

<ul class="{TransparentList()} flexible-grid">
	{#each data.values as value (value.id)}
		<li>
			<ArtCard {value} />
		</li>
	{/each}
</ul>
<slot></slot>

<style>
	.flexible-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(calc(max(33%, 15em) - 1em), 1fr));
		column-gap: 1em;
		row-gap: 0;
	}
</style>
