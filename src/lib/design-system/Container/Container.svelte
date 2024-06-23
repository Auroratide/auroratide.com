<div class="container">
	<slot></slot>
</div>

<style>
	.container {
		max-width: 90rem;
		margin: auto;
		padding: 0.75em 0.5em;
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	@media print {
		.container {
			padding: 0;
		}
	}
</style>