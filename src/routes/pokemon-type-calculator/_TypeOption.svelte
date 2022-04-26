<script lang="ts">
    import type { PokemonType } from '@auroratide/pokemon-types'
    import TypeTag from './_TypeTag.svelte'

    export let type: PokemonType
    export let checked: boolean

    $: id = `cb-${type}`
</script>

<span class="type-option">
    <input bind:checked value="{type}" type="checkbox" {id} name="pokemon-type" />
    <span class="tag">
        <TypeTag {type}>
            <label for={id}>{type}</label>
            <vector-icon icon="check" slot="symbol"></vector-icon>
        </TypeTag>
    </span>
</span>

<style>
    .type-option {
        display: inline-block;
        position: relative;
        padding: 0.125em;
        border: 0.125em solid transparent;
        border-radius: 2em;
    }

    .type-option:hover, .type-option:focus-within {
        border-color: var(--skin-primary-banner);
    }

    .type-option input {
        appearance: none;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        cursor: pointer;
    }

    .type-option label {
        vertical-align: middle;
    }

    .type-option vector-icon {
        visibility: hidden;
    }

    .type-option input:checked + .tag vector-icon {
        visibility: visible;
    }
</style>