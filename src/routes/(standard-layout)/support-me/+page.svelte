<script lang="ts">
	import { StaticPage } from "$lib/design-system/pages"
	import { page } from "$app/state"
	import { Button } from "$lib/design-system/Button"
	import hki from "./hki.webp"
	import thl from "./thl.webp"
	import catf from "./catf.webp"
</script>

<StaticPage title="Support Me" description="?" pathname={page.url.pathname}>
	<section slot="content">
		<p class="center">You... want to support what I do? <strong>Thank you!</strong> I feel so honored :D</p>
		<p class="center">The button below goes to a page where you can give me a tip!</p>
		<p class="support center">
			<Button href="https://ko-fi.com/tfauroratide">Support Me on Ko-Fi!</Button>
		</p>

		<h2>Charities</h2>
		<p>I don't get any affiliate kickbacks or anything, I just think donating to charity is worthwhile! Here are some that I like which have demonstrated substantial impact in their areas:</p>

		<div class="pillars">
			<article class="pillar theme-purple" aria-labelledby="help-people">
				<div class="card lift-on-focus">
					<h3 id="help-people">Help People</h3>
					<img src="{hki}" alt="child taking a vitamin supplement" />
					<p><a href="https://helenkellerintl.org/support-our-vitamin-a-work/">Helen Keller Intl</a> saves the lives of children by providing Vitamin A Supplements in malnourished countries.</p>
				</div>
				<footer>
					<Button href="https://www.givewell.org/international/technical/programs/vitamin-A">Impact Research</Button>
				</footer>
			</article>

			<article class="pillar theme-yellow" aria-labelledby="help-animals">
				<div class="card lift-on-focus">
					<h3 id="help-animals">Help Animals</h3>
					<img src="{thl}" alt="couple of baby chickens snuggling" />
					<p><a href="https://thehumaneleague.org/ways-to-give">The Humane League</a> helps factory-farmed animals become cage-free.</p>
				</div>
				<footer>
					<Button href="https://animalcharityevaluators.org/charity-review/the-humane-league/">Impact Research</Button>
				</footer>
			</article>

			<article class="pillar theme-green" aria-labelledby="help-the-planet">
				<div class="card lift-on-focus">
					<h3 id="help-the-planet">Help the Planet</h3>
					<img src="{catf}" alt="waterfall in a tropical rainforest" />
					<p><a href="https://www.catf.us/carbon-capture/">Clean Air Task Force</a> combats climate change by elevating emerging technologies, such as carbon capture.</p>
				</div>
				<footer>
					<Button href="https://cdn.prod.website-files.com/686d65ad3e40d1dc7eb801b4/6933001ad04a5060440a8c9d_Clean%20Air%20Task%20Force%20(CATF)-%20Nonprofit%20Evaluation.pdf">Impact Research</Button>
				</footer>
			</article>
		</div>
	</section>
</StaticPage>

<style>
	.pillars {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	.pillar {
		flex: 1;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 1em;
		max-inline-size: 20em;
		margin-inline: auto;
	}

	.pillar footer {
		font-size: 0.875em;
	}

	.card {
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.75em;
		text-decoration: none;
		background: var(--t-bg-b);
		padding: 0.75em;
		border-block-end: 0.5em solid var(--t-primary-a);
	}

	.card a {
		color: inherit;
		font-weight: bold;
	}

	.card a::after {
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		z-index: 2;
	}

	.pillar h3, .pillar p {
		margin: 0;
	}

	img {
		display: block;
		inline-size: 66.7%;
		margin-inline: auto;
		border-radius: 0.5em;
	}

	.lift-on-focus {
		transition: all 0.2s ease-in-out;
		box-shadow: var(--grounded);
	}

	.lift-on-focus:hover, .lift-on-focus:focus-within {
		transform: scale(1.025);
		box-shadow: var(--elevated);
	}

	.lift-on-focus:active {
		transition: all 0.08s ease-out;
		transform: scale(1);
		box-shadow: var(--grounded);
	}

	.support {
		font-size: 1.5em;
		margin-block: 2em;
	}

	.center {
		text-align: center;
	}

	p { line-height: 1.5; }

	@media screen and (min-width: 80rem) {
		.pillars {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 1em;
		}
	}
</style>