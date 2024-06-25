<script lang="ts">
	import { PageFooter } from "$lib/design-system/PageFooter"
	import { BulletDivider } from "$lib/design-system/BulletDivider"
	import { Routes, FooterNav } from "$lib/auroratide/routes"
</script>

<div class="container">
	<header class="three-cols">
		<nav class="subgrid">
			<a href="{Routes.Home.href()}">Auroratide</a>
			<span class="flex"><BulletDivider /></span>
			<a href="{Routes.Stories.href()}">More Stories</a>
		</nav>
		<small class="subgrid">
			<span>Coding</span>
			<span>+</span>
			<span>Storytelling</span>
		</small>
	</header>
	<main>
		<slot></slot>
	</main>
	<PageFooter nav={FooterNav} centered />
</div>

<style>
	.container {
		padding: 1em;
	}

	.three-cols {
		display: grid;
		grid-template-columns: 1fr 1ch 1fr;
		gap: 0.0625em 0.5em;
	} .subgrid {
		display: grid;
		grid-column: span 3;
		grid-template-columns: subgrid;
	} .subgrid > *:nth-child(1) {
		place-self: center end;
	} .subgrid > *:nth-child(2) {
		place-self: center center;
	} .subgrid > *:nth-child(3) {
		place-self: center start;
	}

	.flex { display: flex; }

	nav a {
		color: var(--t-fg-a);
		text-decoration: none;
	} nav a:hover, nav a:focus {
		text-decoration: underline;
		color: var(--t-fg-b);
	}
</style>
