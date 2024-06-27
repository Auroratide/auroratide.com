<script lang="ts">
	export let contentId: string
</script>

<div class="table-of-contents">
	<p><strong id="toc-id">Contents</strong></p>
	<table-of-contents for="{contentId}" aria-labelledby="toc-id"></table-of-contents>
</div>

<style>
	.table-of-contents p { margin-block: 0.75em; }

	table-of-contents {
		font-size: max(1rem, 0.875em);
	} table-of-contents::part(anchor) {
		color: var(--t-fg-b);
		text-decoration: none;
		margin-block: 1em;
	} table-of-contents::part(anchor):hover, table-of-contents::part(anchor):focus {
		text-decoration: underline;
		filter: brightness(1.25);
	}
</style>