<script lang="ts">
	import type { NavItem } from "./NavItem"
	import { Color, PrimaryColors } from "../Color"
	import NavDots from "./NavDots.svelte"
	import DetailsLabel from "./DetailsLabel.svelte";
	import { animatedDetails } from "./animated-details"

	export let nav: NavItem[]
</script>

<div class="lg:hide">
	<details class="full-height" style:--details-transition-dur="0.2s" use:animatedDetails>
		<summary class="full-height no-marker dots-overlap-container {Color.text.fg.b} bold-and-large">
			<DetailsLabel closed="Menu" opened="Close" />
			<NavDots />
		</summary>
		<nav aria-label="Site" class="overlap-bottom animate-wipe">
			<ul class="no-list column space-start">
				{#each nav as it, i}
					<li>
						<a href="{it.href}" class="bg-circle wider-text {Color.text.fg.b}" style:--bg-circle-color="var({Color.var[PrimaryColors[i % PrimaryColors.length]].a})">{it.name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</details>
</div>

<div class="lg:show">
	<nav aria-label="Site">
		<ul class="no-list column space-start">
			{#each nav as it, i}
				<li>
					<a href="{it.href}" class="bg-circle wider-text {Color.text.fg.b}" style:--bg-circle-color="var({Color.var[PrimaryColors[i % PrimaryColors.length]].a})">{it.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.full-height {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.overlap-bottom {
		position: absolute;
		inset-inline: 0;
		inset-block-start: 100%;
		background: var(--t-bg-a);
		z-index: 2;
	}

	.dots-overlap-container { position: relative; }
	.bold-and-large {
		font-weight: bold;
		font-size: 1.125em;
	}

	.no-marker { list-style: none; }

	.no-list {
		list-style: none;
		padding: 0;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 0.75em;
	}

	.space-start { padding-inline-start: 0.75em; }

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

	.lg\:show { display: none; }

	@media screen and (min-width: 60rem) {
		.lg\:show { display: block; }
		.lg\:hide { display: none; }
	}

	details .animate-wipe { animation-fill-mode: forwards; }
	details[open] .animate-wipe { animation: circle-wipe-in var(--details-transition-dur) ease-out; }
	details:global([data-closing]) .animate-wipe { animation: circle-wipe-out var(--details-transition-dur) ease-out; }

	@keyframes circle-wipe-in {
		from { clip-path: circle(0% at calc(100% - 1em) 0%); }
		to { clip-path: circle(100%); }
	}

	@keyframes circle-wipe-out {
		from { clip-path: circle(100%); }
		to { clip-path: circle(0% at calc(100% - 1em) 0%); }
	}
</style>
