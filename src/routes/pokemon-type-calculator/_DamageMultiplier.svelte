<script lang="ts">
    export let multiplier: number
</script>

<span class="damage-multiplier">
    <span class="number">
        {#if 0 < multiplier && multiplier < 1}
            <span class="fraction" aria-label="{multiplier.toString()}">
                <span class="numerator" aria-hidden="true">1</span>
                <span class="denominator" aria-hidden="true">{Math.round(1 / multiplier)}</span>
            </span>
        {:else}
            <span class="integer">{multiplier}</span>
        {/if}
    </span>
    <span class="times">&times;</span>
</span>

<style>
    .damage-multiplier {
        display: flex;
        align-items: center;
    }

    .number {
        display: inline-block;
    }

    .fraction {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 0.875em;
        height: 0.875em;
        line-height: 1;
        text-align: center;
        place-items: center;
        font-weight: bold;
    }

    .fraction::after {
        content: '';
        grid-column: 1;
        grid-row: 1;
        background: linear-gradient(to bottom right, transparent 46%, currentColor 46%, currentColor 54%, transparent 54%);
        width: 70%;
        height: 70%;
    }

    .numerator {
        grid-column: 1;
        grid-row: 1;
        font-size: 0.525em;
        width: 1em;
        height: 1em;
        place-self: start start;
    }

    .denominator {
        grid-column: 1;
        grid-row: 1;
        font-size: 0.525em;
        width: 1em;
        height: 1em;
        place-self: end end;
    }
</style>