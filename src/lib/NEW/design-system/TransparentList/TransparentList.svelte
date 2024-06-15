<script lang="ts">
	export let tag: "ul" | "ol"
</script>

<svelte:element this={tag} class="transparent-list">
	<slot></slot>
</svelte:element>

<style>
	.transparent-list {
		list-style: none;
		padding: 0;
	} .transparent-list > :global(li) {
		margin: 0;
	}
</style>
