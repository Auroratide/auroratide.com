<header>
	<h1>Timothy Foster</h1>
	<strong class="role">Full-Stack Software Engineer</strong>
</header>

<style>
	header {
		grid-area: header;
		margin-bottom: 0.5em;
	}

	.role {
		font-size: 1.15em;
		font-weight: normal;
	}

	h1 {
		line-height: 1;
		font-weight: bold;
		font-size: 2.75em;
		margin-block: 0 0.125em;
		color: var(--t-fg-b);
	}

	@media print {
		header {
			background: var(--c-dark-dark);
			color: var(--c-light-light);
			margin: 0;
			padding: 1.5em;
		}

		header h1 {
			color: inherit;
		}
	}
</style>
