<script lang="ts">
	import { PageFooter } from "$lib/design-system/PageFooter"
	import { Container } from "$lib/design-system/Container"
	import { SocialLinks } from "$lib/design-system/SocialLinks"
	import { FooterNav, Routes, Socials } from "../routes"
	import { ArticleCard } from "$lib/auroratide/articles/ArticleCard"
	import type { SummarizedArticle } from "$lib/auroratide/articles"
	import type { SummarizedStory } from "../stories"
	import type { SummarizedArt } from "../art"
	import type { SummarizedPortfolio } from "../portfolio"
	import { StoryCard } from "../stories/StoryCard"
	import { Logo } from "../Logo"
	import LinearNav from "./LinearNav.svelte"
	import { Button } from "$lib/design-system/Button"
	import { Theme } from "$lib/design-system/Color"
	import { PortfolioCard } from "$lib/auroratide/portfolio/PortfolioCard"
	import { ArtCard } from "$lib/auroratide/art/ArtCard"
	import { PageMeta } from "$lib/design-system/PageMeta"
    import { SiteInfo } from "$lib/design-system/SiteInfo";
    import type { OpenGraph } from "$lib/design-system/OpenGraph";

	export let posts: SummarizedArticle[]
	export let stories: SummarizedStory[]
	export let arts: SummarizedArt[]
	export let portfolio: SummarizedPortfolio[]

	const {
		title: sitetitle,
		logo,
		url,
		author,
	} = SiteInfo.get()

	$: opengraph = {
		type: "website",
		title: "Auroratide: Coding + Storytelling",
		description: "I use code to express myself in stories, games, and art. I also write about web accessibility, programming, and professional software engineering.",
		url: url,
		image: logo,
		site_name: sitetitle,
	} satisfies OpenGraph
</script>

<PageMeta pagetitle="Coding + Storytelling" description={opengraph.description} {opengraph} />
<Container>
	<main id="main" class="column">
		<section class="site-banner">
			<span class="large-logo lg:adjust-to-look-centered"><Logo /></span>
			<hgroup role="group" aria-roledescription="Heading group">
				<h1>Auroratide</h1>
				<p aria-roledescription="subtitle">Coding + Storytelling</p>
			</hgroup>
			<LinearNav />
		</section>
		<div class="content-section">
			<section class="content-list {Theme(posts[0].color)}">
				<h2>Dev Content</h2>
				<ArticleCard value={posts[0]} />
				<p><Button href="{Routes.Posts.href()}">More Dev Content</Button></p>
			</section>
			<section class="content-list {Theme(stories[0].color)}">
				<h2>Stories</h2>
				<StoryCard value={stories[0]} />
				<p><Button href="{Routes.Stories.href()}">More Stories</Button></p>
			</section>
		</div>
		<section class="center-section">
			<div>
				<h2>A Personal Canvas</h2>
				<p>A canvas is different for every person. For many it is a blank paper. For some it is an easel. For others it is a block of wood.</p>
				<p>My canvas is <strong>code</strong>.</p>
				<p>With code, I've made a ton of random stuff over the years, and I've deposited most of it here. Nowadays I'm interested in using code to tell <strong>interactive stories</strong>. I don't really care if they're <em>good</em> stories either. I just want to write <em>human</em> stories.</p>
				<p>What is your canvas?</p>
			</div>
		</section>
		<div class="content-section">
			<section class="content-list {Theme(portfolio[0].color)}">
				<h2>Portfolio</h2>
				<div class="row">
					<PortfolioCard value={portfolio[0]} />
					<PortfolioCard value={portfolio[1]} />
				</div>
				<p><Button href="{Routes.Portfolio.href()}">More Stuff I Made</Button></p>
			</section>
			<section class="content-list {Theme(arts[0].color)}">
				<h2>Art</h2>
				<div class="row">
					<ArtCard value={arts[0]} />
					<ArtCard value={arts[1]} />
				</div>
				<p><Button href="{Routes.Art.href()}">More Art</Button></p>
			</section>
		</div>
	</main>
	<div style:padding-inline="0.5em">
		<PageFooter nav={FooterNav}>
			<SocialLinks title="Find me on" values={Object.values(Socials)} />
		</PageFooter>
	</div>
</Container>

<style>
	hgroup {
		text-align: center;
		margin-block-end: 1.5em;
	} h1 {
		font-size: 3.5em;
		margin-block: 0;
		color: var(--t-fg-b);
		font-weight: 900;
		letter-spacing: 0.05ch;
	} hgroup p {
		font-size: 1.75em;
		font-weight: 300;
		letter-spacing: 0.1ch;
		margin-block: 0;
	} @media screen and (min-width: 80rem) {
		hgroup {
			text-align: start;
		}
	}

	.large-logo { font-size: 7em; }

	h2 {
		font-size: 2em;
		color: var(--t-fg-b);
		margin-block: 0 0.5em;
	}

	.site-banner {
		container-type: inline-size;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-block: 1em;
	}

	.content-section {
		display: flex;
		flex-direction: column;
		gap: 2em;
		margin-block: 3em;
	}

	.content-list {
		padding-inline: 0.5em;
	} .content-list .row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;
		gap: 0 1em;
	}

	.center-section {
		margin: 4em -0.5em;
		padding: 4em 1em;
		background: var(--t-bg-b);
	} .center-section > div {
		max-width: 45rem;
		margin: auto;
	} .center-section h2 {
		text-align: center;
		margin-block-start: 0;
	} .center-section p {
		font-size: 1.1em;
		line-height: 1.5em;
		margin-block: 2em;
	} .center-section p:last-child {
		margin-block-end: 0;
	}

	@media screen and (min-width: 80rem) {
		.site-banner {
			display: grid;
			grid-template-columns: auto auto 1fr;
			padding-inline: 0.5em;
			padding-block: 0;
			gap: 1em;
		} .site-banner :global(> *:last-child) {
			justify-self: end;
		}

		hgroup { margin: 0; }

		.lg\:adjust-to-look-centered {
			position: relative;
			inset-block-start: 0.05em;
		}

		.content-section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto 1fr auto;
			gap: 0 1em;
		} .content-section section {
			display: grid;
			grid-template-rows: subgrid;
			grid-row: span 3;
		} .content-section section > *:last-child {
			margin: 0;
			place-self: end;
		}
	}
</style>