<script lang="ts">
    import type { PokemonType } from '@auroratide/pokemon-types'

    export let type: PokemonType | 'none'

    $: showSymbol = $$slots.symbol
</script>

<span class="type-tag" style:--skin-local="var(--skin-pokemon-{type})">
    <span class="text"><slot>{type}</slot></span>
    <span class="symbol" class:show-symbol={showSymbol}><slot name="symbol"></slot></span>
</span>

<style>
    .type-tag {
        display: inline-flex;
        border-radius: 2em;
        background-color: var(--skin-local);
        color: var(--skin-type-text);
        padding: 0.25em;
    }

    .text {
        padding: 0 0.5em;
        width: 10ch;
        text-transform: capitalize;
    }

    .symbol {
        display: flex;
        background-color: var(--skin-type-text);
        color: hsl(0, 0%, 0%);
        width: 1.5em;
        height: 1.5em;
        border-radius: 1.5em;
        align-items: center;
        justify-content: center;
        visibility: hidden;
    }

    .show-symbol {
        visibility: visible;
    }
</style>