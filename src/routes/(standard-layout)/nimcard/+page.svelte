<script lang="ts">
	import * as Nimcard from '@auroratide/nimcard'
	import { onMount } from 'svelte'
	import { Loading } from "$lib/design-system/Loading"
	import { browser } from '$app/environment'
	import { StaticPage } from '$lib/design-system/pages'
	import { page } from "$app/stores"

	const scoring = Nimcard.Board.standardScoring

	let loading = browser ? window.customElements.get('nimcard-game') === undefined : true

	onMount(() => {
		window.customElements.whenDefined('nimcard-game').then(() => {
			loading = false
		})
	})

	const nimcard = (node: any) => {
		node.onnewgame = () => {
			const deck = Nimcard.Deck.shuffle(Nimcard.Deck.createFullDeck())
			const board = Nimcard.Board.create(deck, [4, 5, 5, 5], scoring)
			const game = Nimcard.Game.start(board)

			node.start(game, ['human', 'ai'])
		}

		node.onnewgame()
	}
</script>

<external-resource type="js-module" src="https://unpkg.com/@auroratide/playing-card@0.1.1/lib/define.js"></external-resource>
<external-resource type="js-module" src="https://unpkg.com/@auroratide/nimcard@0.1.4/component/lib/define.js"></external-resource>
<external-resource type="css" src="https://unpkg.com/@auroratide/nimcard@0.1.4/component/lib/style.css"></external-resource>
<StaticPage centered title="Nimcard" description="A strategy card game" pathname={$page.url.pathname}>
	<section slot="content">
		{#if loading}
			<Loading large text="Dealing cards..." />
		{:else}
			<nimcard-game use:nimcard aiworker="/assets/nimcard/ai-worker.js"></nimcard-game>
		{/if}
	</section>
</StaticPage>

<style>
	:global(nimcard-game) {
		font-size: 1rem;
	}

	:global(nimcard-game button) {
		z-index: 0;
	}

	:global(nimcard-game li button::before) {
		display: none;
	}

	:global(nimcard-game li) {
		font-size: 1rem !important;
	}

	:global(nimcard-game ol ol li) {
		margin-bottom: 0;
	}

	:global(nimcard-game p) {
		margin-block-start: 0;
	}

	:global(nimcard-game .dialog) {
		background-color: var(--t-bg-b) !important;
	}

	:global(nimcard-game .dialog button) {
		font-size: 1em;
		font-family: var(--f-normal);
		display: inline-block;
		letter-spacing: 0.05ch;
		border-radius: 0.25em;
		text-decoration: none;
		line-height: 1;
		padding-block: 0.375em;
		padding-inline: 1em;
		overflow: hidden;
		position: relative;
		cursor: pointer;
		border: none;
		background: var(--t-primary-a);
		color: var(--t-fg-b);
	}

	:global(nimcard-game .dialog button:hover),
	:global(nimcard-game .dialog button:focus) {
		text-decoration: none;
		filter: brightness(1.25);
	}

	:global(nimcard-game .dialog button:active) {
		filter: brightness(0.875);
		box-shadow: 0 0.125em 0.25em oklch(0% 0 0 / 0.25) inset;
	}
</style>
