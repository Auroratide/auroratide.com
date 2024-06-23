<script lang="ts">
	import { FooterNav } from "$lib/auroratide/routes"
	import { Color, PrimaryColors } from "$lib/design-system/Color"
	import { TransparentList } from "$lib/design-system/TransparentList"
	import { Logo } from "../Logo"

	const nav = FooterNav.slice(0, 5)
</script>


<div class="surround-logo fit-font-to-screen">
	<div class="logo"><Logo /></div>
	<nav aria-label="Site">
		<ul class="{TransparentList()}">
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

	.surround-logo {
		position: relative;
		inline-size: 100%;
		text-align: center;
	} .surround-logo a {
		--r: 7.5em;
		position: absolute;
		inset: 50% 0 0 50%;
		transform:
			translate(-50%, -50%)
			translate(
				calc(var(--r) * cos(pi / -4 * var(--i) + pi)),
				calc(var(--r) * sin(pi / -4 * var(--i) + pi))
			)
			translate(0, -0.5em);
	}

	.fit-font-to-screen { font-size: min(3.25vw, 1em); }

	.large {
		font-size: 1.5em;
		font-weight: 900;
		letter-spacing: 0.075ch;
	}

	.bg-circle {
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

		.surround-logo a {
			--r: 10em;
			transform:
				translate(-50%, -50%)
				translate(
					calc(var(--r) * cos(pi / 5.5 * var(--i) - pi / 15)),
					calc(var(--r) * sin(pi / 5.5 * var(--i) - pi / 15))
				)
				translate(-3.25em, -1.25em);

			/* Alternative
			--r: 12em;
			transform:
				translate(-50%, -50%)
				translate(
					calc(var(--r) * cos(pi / 5.5 * var(--i) - pi / 8)),
					calc(var(--r) * sin(pi / 5.5 * var(--i) - pi / 8))
				)
				translate(-4em, -3.5em);
			/Alternative */
		}
	}
</style>