<script lang="ts">
	import type { PageData } from "./$types"
	import { page } from "$app/stores"
	import { ArtItem } from "$lib/NEW/auroratide/art/ArtItem"

	export let data: PageData
</script>

<svelte:head>
	<base href="{$page.url.pathname}/" />
</svelte:head>

<ArtItem value={data.value} />
