<script lang="ts">
    import * as Nimcard from '@auroratide/nimcard'
    import type { NimcardGame } from '@auroratide/nimcard/component/lib'
    import { onMount } from 'svelte'

    export let scoring = Nimcard.Board.standardScoring

    let element: NimcardGame
    onMount(() => {
        window.customElements.whenDefined('nimcard-game').then(() => {
            element.onnewgame = () => {
                const deck = Nimcard.Deck.shuffle(Nimcard.Deck.createFullDeck())
                const board = Nimcard.Board.create(deck, [4, 5, 5, 5], scoring)
                const game = Nimcard.Game.start(board)

                element.start(game, ['human', 'ai'])
            }

            element.onnewgame()
        })
    })
</script>

<external-resource type="js-module" src="https://unpkg.com/@auroratide/playing-card@0.1.0/lib/define.js"></external-resource>
<external-resource type="js-module" src="https://unpkg.com/@auroratide/nimcard@0.1.1/component/lib/define.js"></external-resource>
<external-resource type="css" src="https://unpkg.com/@auroratide/nimcard@0.1.1/component/lib/style.css"></external-resource>
<nimcard-game bind:this={element} aiworker="/assets/nimcard/ai-worker.js"></nimcard-game>

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

    :global(nimcard-game .dialog) {
        background-color: var(--skin-bg) !important;
    }
</style>
