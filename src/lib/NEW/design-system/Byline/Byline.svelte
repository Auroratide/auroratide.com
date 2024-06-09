<script lang="ts">
	import { DateDisplay } from "$lib/NEW/design-system/DateDisplay"

	export let value: {
		publishedAt: Date,
		category: string,
	}

</script>

<small class="row">
	<DateDisplay value={value.publishedAt} />
	<span class="large">&bull;</span>
	<span class="capital">{value.category}</span>
</small>

<style>
	.row {
		display: flex;
		gap: 0.75ch;
	}

	.large {
		font-size: 2em;
		font-weight: bold;
		line-height: 0.5em;
	}

	.capital { text-transform: capitalize; }
</style>