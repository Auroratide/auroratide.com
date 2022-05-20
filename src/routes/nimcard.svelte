<script lang="ts">
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import Content from '$lib/layout/Content.svelte'
    import * as Nimcard from '@auroratide/nimcard'
    import type { NimcardGame } from '@auroratide/nimcard/component/lib'
    import { onMount } from 'svelte'
    import { buildOpenGraph } from '$lib/open-graph'
    import { navigation, UrlBuilder } from '$lib/routes'
    import Loading from '$lib/design/Loading.svelte'
    import { browser } from '$app/env'

    export let scoring = Nimcard.Board.standardScoring

    const og = buildOpenGraph({
        title: 'Nimcard',
        url: new UrlBuilder().withBase().static(navigation.Nimcard),
    }).website()

    let loading = browser ? window.customElements.get('nimcard-game') === undefined : true

    onMount(() => {
        window.customElements.whenDefined('nimcard-game').then(() => {
            loading = false
        })
    })

    const nimcard = (node: NimcardGame) => {
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
<DocumentInfo {og} title="Nimcard" description="A strategy card game">
    <Container>
        <Content>
            <h1>Nimcard</h1>
            {#if loading}
                <Loading large text="Dealing cards..." />
            {:else}
                <nimcard-game use:nimcard aiworker="/assets/nimcard/ai-worker.js"></nimcard-game>
            {/if}
        </Content>
    </Container>
</DocumentInfo>

<style>
    h1 {
        text-align: center;
        margin-bottom: var(--sp-st-s);
    }

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

    :global(nimcard-game .dialog) {
        background-color: var(--skin-bg) !important;
    }
</style>
