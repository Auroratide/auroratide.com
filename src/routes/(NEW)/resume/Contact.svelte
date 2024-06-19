<script lang="ts">
	import { socials } from '$lib/routes'
</script>

<address>
	<ul>
		<li><vector-icon icon="envelope" label="Email"></vector-icon> <a href="mailto:tf.auroratide@gmail.com">tf.auroratide@gmail.com</a></li>
		<li><vector-icon icon="github" label="Github"></vector-icon> <a href={socials.Github.link}>github.com/Auroratide</a></li>
		<li><vector-icon icon="linked-in" label="LinkedIn"></vector-icon> <a href={socials.LinkedIn.link}>timothy-foster-224946120</a></li>
		<li><vector-icon icon="hammer" label="Portfolio"></vector-icon> <a href="https://auroratide.com">auroratide.com</a></li>
	</ul>
</address>

<style>
	address {
		grid-area: contact;
		font-style: normal;
		font-size: 0.9em;
		margin-bottom: 0.5em;
	}

	address ul {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 0.75ch;
		list-style: none;
		padding-left: 0;
		margin: 0;
	}

	address ul li {
		line-height: 1.15;
		margin: 0;
		display: grid;
		grid-template-columns: subgrid;
		grid-column: span 2;
	}

	address vector-icon {
		place-self: center;
		font-size: 0.95em;
	}

	@media print {
		address {
			background: var(--c-dark-dark);
			color: var(--c-light-light);
			margin: 0;
			padding: 0 1.5em 1.5em;
		}

		a {
			color: var(--c-light-light) !important;
		}
	}
</style>