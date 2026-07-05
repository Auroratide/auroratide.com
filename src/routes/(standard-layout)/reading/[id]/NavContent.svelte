<script lang="ts">
	import { TableOfContents } from "$lib/design-system/TableOfContents"
	import { page } from "$app/stores"
	import { Theme } from "$lib/design-system/Color"
	import { onMount } from "svelte"
	import type { TableOfContentsElement } from "@auroratide/table-of-contents"

	$: color = $page.data.value?.color

	onMount(() => {
		document.querySelectorAll<TableOfContentsElement>("table-of-contents").forEach((it) => {
			it.build?.()
		})
	})
</script>

{#if color != null}
	<div class="{Theme(color)}">
		<TableOfContents contentId="article-content" />
	</div>
{/if}
