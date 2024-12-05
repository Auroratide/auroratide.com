<script lang="ts">
	import { onMount } from "svelte"
	import { slide, fade } from "svelte/transition"
	import "@auroratide/typewritten-text/lib/style.css"
	import TmpImage from "./tmp.png"
	import Quote from "./Quote.svelte"
	import AiReply from "./AiReply.svelte"
	import { Button } from "$lib/design-system/Button"
	import HumanReply from "./HumanReply.svelte"

	// let Triggers = {
	// 	FirstAiThoughts: false,
	// 	FirstAiReply: false,
	// 	FirstHumanFollowup: false,
	// 	SecondAiThoughts: false,
	// 	SecondAiReply: false,
	// 	FinalAiThoughts: false,
	// }

	let Triggers = {
		FirstAiThoughts: true,
		FirstAiReply: true,
		FirstHumanFollowup: true,
		SecondAiThoughts: true,
		SecondAiReply: true,
		FinalAiThoughts: true,
	}

	const trigger = (name: keyof typeof Triggers) => () => Triggers = {
		...Triggers,
		[name]: true,
	}

	onMount(() => {
		import("@auroratide/typewritten-text/lib/define.js")

		// setTimeout(trigger("FirstAiThoughts"), 1000)
	})
</script>

<article aria-labelledby="page-title" class="container theme-dark min-story-height">
	<header>
		<h1 id="page-title" class="text-center">
			The Short Life of a Llama
		</h1>
	</header>
	<section>
		<Quote who="other" speaker="Chatter" avatar="{TmpImage}">
			<p>How long do llamas live for?</p>
		</Quote>
		{#if Triggers.FirstAiThoughts}
			<div transition:fade={{ duration: 200 }}>
				<p></p>
				<p>AI Text.</p>
				<p>AI Text.</p>
				<p>AI Text.</p>
				<p>AI Text.</p>
			</div>
		{/if}
		{#if !Triggers.FirstAiReply && Triggers.FirstAiThoughts}
			<p transition:slide={{ duration: 300 }} class="send-reply">
				<Button on:click={trigger("FirstAiReply")}>Send Reply</Button>
			</p>
		{/if}
		{#if Triggers.FirstAiReply}
			<div transition:fade={{ duration: 200 }}>
				<Quote who="me" speaker="AI" avatar="{TmpImage}">
					<AiReply on:typed={trigger("FirstHumanFollowup")}>
						<p><typewritten-text paused type-speed="30" repeat-interval="40">
							Llamas typically have a lifespan of about 15 to 25 years. With good care, some llamas can live into their late twenties or even early thirties. Proper nutrition, regular veterinary care, and a healthy living environment contribute to their longevity.
						</typewritten-text></p>
					</AiReply>
				</Quote>
			</div>
		{/if}
		{#if Triggers.FirstHumanFollowup}
			<div transition:fade={{ duration: 200 }}>
				<Quote who="other" speaker="Chatter" avatar="{TmpImage}">
					<HumanReply delayMs={2000}>
						<p>How about llamas in the wild?</p>
					</HumanReply>
				</Quote>
			</div>
		{/if}
		{#if Triggers.FirstHumanFollowup}
			<div transition:fade={{ duration: 200 }}>
				<p>Something</p>
				<p>Something</p>
				<p>Something</p>
				<p class="send-reply">
					<Button on:click={trigger("FirstAiReply")}>Send Reply</Button>
				</p>
				<Quote who="me" speaker="AI" avatar="{TmpImage}">
					<AiReply on:typed={trigger("FirstHumanFollowup")}>
						<p><typewritten-text paused type-speed="30" repeat-interval="40">
							Llamas are domesticated animals and are not typically found in the wild. However, their close relatives, the guanacos, live in the wild in South America. Guanacos generally have a shorter lifespan than domesticated llamas, typically living around 15 to 20 years in the wild, where they face natural predators and environmental challenges.
						</typewritten-text></p>
					</AiReply>
				</Quote>
				<p>Something</p>
				<p>Something</p>
				<p>How long do I live for?</p>
				<p class="terminated">Process Terminated</p>
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

	h1, h2 { color: var(--t-fg-b); }

	h1 {
		font-size: 2.5em;
		margin-block: 1.25em 1em;
		line-height: 1em;
	}
	h2 { font-size: 1.75em; }

	header {
		margin-block-end: 4em;
	}

	a {
		color: var(--t-fg-b);
	} a:hover, a:focus {
		text-decoration: none;
		filter: brightness(1.25);
	}

	p {
		line-height: 1.5em;
		margin-block: 1.5em;
		color: var(--t-fg-a);
	}

	typewritten-text :global(.cursor.current::after) {
		display: none;
	}
</style>
