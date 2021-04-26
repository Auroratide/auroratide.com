<script lang="ts">
    export let hex: number = 0
    let hexText: string
    let rgbText: string

    $: hexText = `#${hex.toString(16).padStart(6, '0').toUpperCase()}`
    $: rgbText = `rgb(${hex >> 16}, ${(hex >> 8) & 0xff}, ${hex & 0xff})`
</script>

<div class="shade" style="--shade-color: {hexText};">
    <p class="hex">{hexText}</p>
    <p class="rgb">{rgbText}</p>
</div>

<style>
    .shade {
        color: var(--skin-color-text-secondary);
        background-color: var(--shade-color);
        padding: var(--sizing-spacing-sm) var(--sizing-spacing-md);
    }

    p {
        text-align: center;
        line-height: 1.15;
        margin: 0;
        font-weight: var(--typography-normal);
    }

    p.rgb {
        font-weight: var(--typography-light);
        font-size: var(--sizing-font-xs);
    }
</style>
