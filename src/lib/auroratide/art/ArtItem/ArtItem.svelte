<script lang="ts">
	import { Color, Theme } from "$lib/design-system/Color"
	import { Routes } from "$lib/auroratide/routes"
	import type { ArtType } from "../ArtType"
	import { PageContent } from "$lib/design-system/PageContent"
	import { Byline } from "$lib/design-system/Byline"
	import { Button } from "$lib/design-system/Button"
	import { PageTitle } from "$lib/design-system/PageTitle"
	import { VisuallyHidden } from "$lib/design-system/VisuallyHidden"
	import { isPixelart } from "../is-pixelart"
	import { Pixelart } from "$lib/design-system/Pixelart"
	import { PageMeta } from "$lib/design-system/PageMeta"
	import type { OpenGraph } from "$lib/design-system/OpenGraph"
	import { SiteInfo } from "$lib/design-system/SiteInfo"

	export let value: ArtType

	$: pixelart = isPixelart(value)
	$: colorscape = pixelart ? value.img.src : Routes.Art.colorscape(value.id)

	let maximized = false
	const toggleMaximization = () => maximized = !maximized

	let detailsElem: HTMLDetailsElement
	const toggleDetails = () => {
		detailsElem?.toggleAttribute("open")
	}

	const {
		title: sitetitle,
		logo,
		url,
		author,
	} = SiteInfo.get()

	$: opengraph = {
		type: "article",
		title: value.title,
		description: value.summary.short,
		url: url + Routes.Art.href(value.id),
		image: logo,
		site_name: sitetitle,
		article: {
			section: value.category,
			tags: value.tags,
			published_time: value.publishedAt,
			author: author.url,
		},
	} satisfies OpenGraph
</script>

<PageMeta pagetitle={value.title} description={value.summary.short} {opengraph} />
<article class="{Theme(value.color)} full-screen grid">
	<div class="above-image space-away-from-screen-edges">
		<vector-icon aria-hidden="true" icon="{value.icon}" class="bg-icon"></vector-icon>
		<div class="scroll-container fit-to-screen column">
			<header>
				<PageTitle>{value.title}</PageTitle>
				<Byline {value} />
			</header>
			<section class="lg:hide summary-next-to-footer">
				<details bind:this={detailsElem} class="open:hide-summary open:show-surrogate column">
					<Button summary>Read Details</Button>
					<PageContent value={value.content} />
				</details>
				<footer class="row">
					<span class="surrogate-summary"><Button on:click={toggleDetails}>Hide Details</Button></span>
					<Button href="{Routes.Art.href()}">Back to Art</Button>
				</footer>
			</section>
			<section class="lg:show">
				<PageContent value={value.content} />
				<footer>
					<Button href="{Routes.Art.href()}">Back to Art</Button>
				</footer>
			</section>
		</div>
	</div>
	<section class="below-text space-away-from-screen-edges">
		<div class="scroll-container fit-to-screen sm:off-center">
			<img-colorscape {colorscape} class:fit-to-screen={!maximized} class="animate-zoom {pixelart ? Pixelart() : ""}" style:--native-height="{value.img.height}px">
				<img src="{value.img.src}" alt="{value.img.alt}" loading="lazy" width="{value.img.width}" height="{value.img.height}" />
			</img-colorscape>
		</div>
		<!-- <button on:click={toggleMaximization} class="overlay-button" class:zoom-in-cursor={!maximized} class:zoom-out-cursor={maximized}>
			<span class="{VisuallyHidden()}">Maximize Image</span>
		</button> -->
	</section>
</article>

<style>
	.full-screen {
		position: fixed;
		inset: 0;
		background: oklch(0% 0 0 / 0.875);
		z-index: var(--z-dialog);
	}

	.grid {
		display: grid;
		grid-template-columns: 100%;
		block-size: 100%;
		place-items: center;
	}

	header {
		display: flex;
		flex-direction: column;
		gap: 0.333em;
	}

	.above-image {
		position: relative;
		grid-area: 1 / 1 / 1 / 1;
		z-index: 2;
		place-self: end stretch;
		background: oklch(0% 0 0 / 0.75);
	} .below-text {
		position: relative;
		grid-area: 1 / 1 / 1 / 1;
	}

	.space-away-from-screen-edges {
		padding: 1em;
		margin: 0.5em;
	}

	.bg-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 33vmin;
		color: var(--t-bg-a);
	}

	.scroll-container {
		position: relative;
		overflow: auto;
	}

	img-colorscape {
		/* max-height: var(--native-height); */
	}

	.fit-to-screen {
		max-height: calc(100dvh - 3em);
	} .fit-to-screen.sm\:off-center {
		max-height: calc(100dvh - 5em);
		position: relative;
		inset-block-start: -1.75em;
	} @media screen and (min-width: 60rem) {
		.fit-to-screen.sm\:off-center {
			max-height: calc(100dvh - 3em);
			position: relative;
			inset-block-start: 0;
		}
	}

	.overlay-button {
		display: block;
		position: absolute;
		inset: 0;
		background: none;
		border: none;
	}

	.animate-zoom {
		transition: max-height 0.4s ease-in-out;
	}

	.zoom-in-cursor {
		cursor: zoom-in;
	} .zoom-out-cursor {
		cursor: zoom-out;
	}

	.summary-next-to-footer {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 1em;
	} .summary-next-to-footer details[open] {
		inline-size: 100%;
	}

	.open\:hide-summary[open] > :global(summary) {
		display: none;
	} .open\:show-surrogate + * > .surrogate-summary {
		display: none;
	} .open\:show-surrogate[open] + * > .surrogate-summary {
		display: inline-block;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	} .row {
		display: flex;
		flex-direction: row;
		gap: 1em;
	}

	@media screen and (min-width: 60rem) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}

		.above-image {
			grid-column: 2;
			place-self: center stretch;
			overflow: auto;
			max-height: 100%;
			background: none;
		}
	}

	.lg\:show {
		display: none;
	} @media screen and (min-width: 60rem) {
		.lg\:show {
			display: block;
		} .lg\:hide {
			display: none;
		}
	}
</style>