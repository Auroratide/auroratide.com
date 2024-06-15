<script lang="ts">
	import type { PageData } from "./$types"
	// import { ArticleCard } from "$lib/NEW/auroratide/articles/ArticleCard"

	export let data: PageData
</script>

<p>TODO</p>
<!-- <ul class="transparent-list">
	{#each data.values as value (value.id)}
		<li>
			<ArticleCard {value} />
		</li>
	{/each}
</ul> -->

<style>
	.transparent-list {
		list-style: none;
		padding: 0;
	}

	.transparent-list li {
		margin: 0;
	}
</style>