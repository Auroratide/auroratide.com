<script lang="ts">
	import type { Snippet } from "svelte"

	type Props = {
		offset: number,
		children: Snippet,
	}; const {
		offset,
		children,
	}: Props = $props()
</script>

<div class="keyboard-panel-row" style:--offset="{offset * 3}em">
	{@render children()}
</div>

<style>
	.keyboard-panel-row {
		display: flex;
		gap: 0.25em;
		margin-inline-start: var(--offset);
	}
</style>
