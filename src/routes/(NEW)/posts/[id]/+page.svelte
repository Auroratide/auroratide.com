<script lang="ts">
	import type { PageData } from "./$types"
	import { Article } from "$lib/NEW/auroratide/articles/Article"
	import { page } from "$app/stores"

	export let data: PageData
</script>

<svelte:head>
	<base href="{$page.url.pathname}/" />
</svelte:head>

<Article value={data.value} />
