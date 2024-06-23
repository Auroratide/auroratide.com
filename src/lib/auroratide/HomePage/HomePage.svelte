<script lang="ts">
	import { PageFooter } from "$lib/design-system/PageFooter"
	import { Container } from "$lib/design-system/Container"
	import { SocialLinks } from "$lib/design-system/SocialLinks"
	import { FooterNav } from "../routes"
	import { ArticleCard } from "$lib/auroratide/articles/ArticleCard"
	import CircularNav from "./CircularNav.svelte"
	import type { SummarizedArticle } from "$lib/auroratide/articles"

	export let posts: SummarizedArticle[]
</script>

<Container>
	<main id="main" class="column lg:grid">
		<section class="column">
			<hgroup role="group" aria-roledescription="Heading group">
				<h1>Auroratide</h1>
				<p aria-roledescription="subtitle">Coding + Storytelling</p>
			</hgroup>
			<CircularNav />
		</section>
		<section>
			<h2>Latest by me</h2>
			<ArticleCard value={posts[0]} />
		</section>
	</main>
	<PageFooter nav={FooterNav}>
		<!-- <SocialLinks /> -->
	</PageFooter>
</Container>

<style>
	hgroup {
		text-align: center;
	} h1 {
		font-size: 4em;
		margin-block: 0;
		color: var(--t-fg-b);
		font-weight: 900;
		letter-spacing: 0.05ch;
	} hgroup p {
		font-size: 2em;
		font-weight: 300;
		letter-spacing: 0.1ch;
		margin-block: 0;
	} @media screen and (min-width: 80rem) {
		hgroup {
			text-align: start;
		}
	}

	h2 {
		font-size: 2em;
		color: var(--t-fg-b);
		margin-block: 0 0.5em;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	@media screen and (min-width: 80rem) {
		.lg\:grid {
			padding: 1em;
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>