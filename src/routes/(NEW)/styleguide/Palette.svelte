<script lang="ts">
	export let name: string
</script>

<section class="palette">
	<h2>{name}</h2>
	<slot></slot>
</section>

<style>
	.palette {
		text-align: center;
		flex: 0 0 15em;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	h2 {
		margin: 0;
		font-size: 1.125em;
		letter-spacing: 0.05ch;
	}
</style>
