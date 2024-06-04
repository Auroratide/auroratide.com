<script lang="ts">
	import type { NavItem } from "./NavItem"
	import { Color, PrimaryColors } from "../Color"

	export let nav: NavItem[]
</script>

<nav aria-label="Site">
	<ul class="no-list column">
		{#each nav as it, i (it.href)}
			<li>
				<a href="{it.href}" class="bg-circle wider-text {Color.text.fg.b}" style:--bg-circle-color="var(--t-{PrimaryColors[i % PrimaryColors.length]}-a)">{it.name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.no-list {
		list-style: none;
		padding: 0;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 0.75em;
	}

	a { text-decoration: none; }
	a:hover, a:focus { text-decoration: underline; }

	.wider-text { letter-spacing: 0.05em; }

	.bg-circle {
		display: block;
		position: relative;
		padding-inline-start: 0.25em;
	}

	.bg-circle::first-letter {
		font-weight: bold;
		font-size: 1.125em;
		inline-size: 5em;
		display: inline-block;
	}

	.bg-circle::before {
		content: "";
		display: block;
		inline-size: 1.5em;
		block-size: 1.5em;
		background-color: var(--bg-circle-color);
		position: absolute;
		border-radius: 100%;
		inset-inline: 0;
		inset-block: 50%;
		transform: translateY(-50%);
		z-index: -1;
	}
</style>
