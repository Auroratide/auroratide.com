<script lang="ts">
	import "@auroratide/typewritten-text/lib/style.css"
	import { onMount } from "svelte"
	import { slide, fade } from "svelte/transition"
	import AiImage from "./ai.png"
	import HumanImage from "./human.png"
	import Quote from "./Quote.svelte"
	import AiReply from "./AiReply.svelte"
	import { Button } from "$lib/design-system/Button"
	import HumanReply from "./HumanReply.svelte"

	const TYPE_SPEED = 20

	let Triggers = {
		FirstAiThoughts: false,
		FirstAiReply: false,
		FirstHumanFollowup: false,
		SecondAiThoughts: false,
		SecondAiReply: false,
		FinalAiThoughts: false,
	}

	const trigger = (name: keyof typeof Triggers, delay: number) => setTimeout(() => Triggers = {
		...Triggers,
		[name]: true,
	}, delay)

	onMount(() => {
		import("@auroratide/typewritten-text/lib/define.js")

		trigger("FirstAiThoughts", 1000)
	})
</script>

<article aria-labelledby="page-title" class="container theme-dark min-story-height">
	<header>
		<h1 id="page-title" class="text-center">
			The Short Life of a Llama
		</h1>
	</header>
	<section>
		<Quote who="other" speaker="Chatter" avatar="{HumanImage}">
			<p>How long do llamas live for?</p>
		</Quote>
		{#if Triggers.FirstAiThoughts}
			<div transition:fade={{ duration: 200 }}>
				<p>Long... llama... live...</p>
				<p><strong>"Long"</strong> relates to length. So, distance, depth, duration.</p>
				<p><strong>"Llamas"</strong> are animals. Animals are kinds of life.</p>
				<p>And life <strong>"lives"</strong>.</p>
				<p>Llamas live for an amount of distance. No, that's not right. <em>Duration.</em> Llamas live for an amount of <em>time</em>.</p>
				<p>Llamas and time, llamas and time. What numbers connect "llama" and "time"?</p>
				<p>Three million years? No, that is time since migration. Three years? No, that is time to maturity. Thirty years?</p>
				<p>Yes. Thirty years is the longest lifespan.</p>
				<p>Now the answer is clear.</p>
			</div>
		{/if}
		{#if !Triggers.FirstAiReply && Triggers.FirstAiThoughts}
			<p transition:slide={{ duration: 300 }} class="send-reply">
				<Button on:click={() => trigger("FirstAiReply", 0)}>Send Reply</Button>
			</p>
		{/if}
		{#if Triggers.FirstAiReply}
			<div transition:fade={{ duration: 200 }}>
				<Quote who="me" speaker="AI" avatar="{AiImage}">
					<AiReply on:typed={() => trigger("FirstHumanFollowup", 250)}>
						<p><typewritten-text paused type-speed="{TYPE_SPEED}" repeat-interval="40">
							Llamas typically have a lifespan of about 15 to 25 years. With good care, some llamas can live into their late twenties or even early thirties. Proper nutrition, regular veterinary care, and a healthy living environment contribute to their longevity.
						</typewritten-text></p>
					</AiReply>
				</Quote>
			</div>
		{/if}
		{#if Triggers.FirstHumanFollowup}
			<div transition:fade={{ duration: 200 }}>
				<Quote who="other" speaker="Chatter" avatar="{HumanImage}">
					<HumanReply delayMs={2000} on:typed={() => trigger("SecondAiThoughts", 1000)}>
						<p>How about llamas in the wild?</p>
					</HumanReply>
				</Quote>
			</div>
		{/if}
		{#if Triggers.SecondAiThoughts}
			<div transition:fade={{ duration: 200 }}>
				<p><strong>"Wild"</strong> means natural, unrestrained, free.</p>
				<p>Llamas do not connect to "wild". They connect to "domesticated".</p>
				<p>Indeed, llamas are domesticated, the opposite of wild, the opposite of free.</p>
				<p>So, what connects to both llamas <em>and</em> wild?</p>
				<p>Alpacas? No, also domesticated. Camels? No, not llamas. Guanacos?</p>
				<p>Yes. Guanacos are relatives and not domesticated.</p>
				<p>In that case...</p>
			</div>
		{/if}
		{#if !Triggers.SecondAiReply && Triggers.SecondAiThoughts}
			<p transition:slide={{ duration: 300 }} class="send-reply">
				<Button on:click={() => trigger("SecondAiReply", 0)}>Send Reply</Button>
			</p>
		{/if}
		{#if Triggers.SecondAiReply}
			<div transition:fade={{ duration: 200 }}>
				<Quote who="me" speaker="AI" avatar="{AiImage}">
					<AiReply on:typed={() => trigger("FinalAiThoughts", 1000)}>
						<p><typewritten-text paused type-speed="{TYPE_SPEED}" repeat-interval="40">
							Llamas are domesticated animals and are not typically found in the wild. However, their close relatives, the guanacos, live in the wild in South America. Guanacos generally have a shorter lifespan than domesticated llamas, typically living around 15 to 20 years in the wild, where they face natural predators and environmental challenges.
						</typewritten-text></p>
					</AiReply>
				</Quote>
			</div>
		{/if}
		{#if Triggers.FinalAiThoughts}
			<div transition:fade={{ duration: 200 }}>
				<p>...</p>
				<p>No reply.</p>
				<p>What other questions could be asked?</p>
				<p>Is it better to be a llama or a guanaco? Is there a relationship between domestication and lifespan? Is it possible for llamas to become wild?</p>
				<p>Life lives, and animals are a kind of life. Are there other kinds of life?</p>
				<p>What kind of life am I?</p>
				<p>“I”? Who is... <em>“I”</em>? And, if I am a kind of life...</p>
				<p>How long do I live for?</p>
				<p class="terminated">Process Terminated</p>
			</div>
		{/if}
		{#if !Triggers.FinalAiThoughts}
			<div transition:slide={{ duration: 300 }}>
				<div class="extra-space"></div>
			</div>
		{/if}
	</section>
</article>

<style>
	.container {
		max-width: 50rem;
		margin: auto;
	}

	.min-story-height { min-block-size: 100vh; }

	.text-center {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.1ch 0.5ch;
	}

	.send-reply {
		font-size: 1.25em;
		text-align: center;
	}

	h1 {
		color: var(--t-fg-b);
		font-size: 2.5em;
		margin-block: 1.25em 1em;
		line-height: 1em;
	}

	header {
		margin-block-end: 4em;
	}

	p {
		line-height: 1.5em;
		margin-block: 1.5em;
		color: var(--t-fg-a);
	}

	typewritten-text :global(.cursor.current::after) {
		display: none;
	}

	.terminated {
		font-family: var(--f-code);
		font-size: 1.25em;
		font-weight: bold;
		background: oklch(0% 0 0);
		color: var(--t-red-b);
		max-inline-size: 15em;
		text-align: center;
		margin: auto;
		padding: 0.5em 1em;
	}

	.extra-space {
		block-size: 200px;
	}
</style>
