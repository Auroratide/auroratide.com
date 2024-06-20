<script lang="ts">
	import type { PageData } from "./$types"
	import { PortfolioItem } from "$lib/auroratide/portfolio/PortfolioItem"
	import { page } from "$app/stores"

	export let data: PageData
</script>

<svelte:head>
	<base href="{$page.url.pathname}/" />
</svelte:head>

<PortfolioItem value={data.value} />
