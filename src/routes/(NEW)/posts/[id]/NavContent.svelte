<script lang="ts">
	import { TableOfContents } from "$lib/design-system/TableOfContents"
	import { page } from "$app/stores"
	import { Theme } from "$lib/design-system/Color"
	import { onMount } from "svelte"
	import type { TableOfContentsElement } from "@auroratide/table-of-contents"

	$: color = $page.data.value?.color
	$: toc = $page.data.value?.toc

	onMount(() => {
		document.querySelector<TableOfContentsElement>("table-of-contents")?.build?.()
	})
</script>

{#if color != null && toc != null && toc.length > 0}
	<div class="{Theme(color)}">
		<TableOfContents contentId="article-content" />
	</div>
{/if}
