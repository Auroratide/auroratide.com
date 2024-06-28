<script lang="ts">
	import { FooterNav } from "$lib/auroratide/routes"
	import { Color, PrimaryColors } from "$lib/design-system/Color"
	import { TransparentList } from "$lib/design-system/TransparentList"
	import { Logo } from "../Logo"

	const nav = FooterNav.slice(0, 5)
</script>


<div class="fit-font-to-screen">
	<nav aria-label="Site">
		<ul class="{TransparentList()} row">
			{#each nav as item, i}
				<li>
					<a
						href="{item.href}"
						class="bg-circle large bg-icon"
						style:--i="{i}"
						style:--bg-circle-color="var({Color.var[PrimaryColors[i % PrimaryColors.length]].a})"
					>
						<vector-icon icon="{item.icon}" aria-hidden="true"></vector-icon>
						<span>{item.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.logo {
		font-size: 11.5em;
	} .logo :global(svg) {
		margin: auto;
	}

	.row {
		display: flex;
		align-items: center;
		gap: 0.875em;
	}

	.fit-font-to-screen { font-size: min(2.4vw, 1em); }

	.large {
		font-size: 1.5em;
		font-weight: 900;
		letter-spacing: 0.075ch;
	}

	.bg-circle {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		inline-size: 4.75em;
		block-size: 4.75em;
		background: var(--bg-circle-color);
		color: var(--t-fg-b);
		text-decoration: none;
		border-radius: 100%;
		text-shadow: 0 0.125em 0 var(--bg-circle-color);
		transition: all 0.125s ease-out;
	} .bg-circle:hover, .bg-circle:focus {
		transform: scale(1.05);
		box-shadow: var(--elevated);
		filter: brightness(1.15);
	} .bg-circle:active {
		transform: scale(0.975);
		filter: brightness(0.9);
		transition: all 0.05s ease-out;
	}

	.bg-icon vector-icon {
		position: absolute;
		inset: 50% 0 0 50%;
		transform: translate(-50%, -50%);
		color: var(--t-bg-a);
		font-size: 3em;
		opacity: 0.25;
	} .bg-icon span {
		position: absolute;
	}

	@media screen and (min-width: 80rem) {
		.logo {
			font-size: 15em;
		} .logo :global(svg) {
			margin: 0 0 0 0.2em;
		}

		.fit-font-to-screen { font-size: min(1.33cqi, 1em); }
	}
</style>