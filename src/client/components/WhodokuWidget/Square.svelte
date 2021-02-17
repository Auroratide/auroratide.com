<script lang="ts">
    import { SudokuValue } from './Sudoku'

    export let value: SudokuValue
    export let assetspath: string
    export let onClick: () => void
</script>

<button class="square" title="Sudoku Square" on:click={onClick}>
    {#if value !== SudokuValue.Empty}
        <img src="{assetspath}/{value}.png" alt={value.toString()} />
    {/if}
</button>

<style>
    button.square::before,
    button.square::after {
        display: none;
    }

    .square {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 0.125rem solid var(--palette-greyscale-025);
        border-left: 0.125rem solid var(--palette-greyscale-025);
        padding: 7.5%;
        border-radius: 0;
    }

    .square:nth-child(9n) {
        border-right: 0.125rem solid var(--palette-greyscale-025);
    }

    .square:nth-last-child(-n + 9) {
        border-bottom: 0.125rem solid var(--palette-greyscale-025);
    }

    .square:nth-child(9n + 4),
    .square:nth-child(9n + 7) {
        border-left-width: 0.25rem;
        border-left-color: var(--palette-greyscale-010);
    }

    .square:nth-child(n + 28):not(:nth-child(n + 37)),
    .square:nth-child(n + 55):not(:nth-child(n + 64)) {
        border-top-width: 0.25rem;
        border-top-color: var(--palette-greyscale-010);
    }

    .square img {
        width: 100%;
        box-shadow: 0.125rem 0.125rem 0 rgba(0, 0, 0, 0.25);
    }
</style>
