<script lang="ts">
    import { hexToRgb, hexToHsl } from '@/client/color'

    export let label: string
    export let hex: number = 0
    let hexText: string
    let rgbText: string
    let hslText: string

    $: {
        const rgb = hexToRgb(hex)
        const hsl = hexToHsl(hex)

        hexText = `#${hex.toString(16).padStart(6, '0').toUpperCase()}`
        rgbText = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
        hslText = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
    }
</script>

<figure class="shade" style="--shade-color: {hexText};">
    <figcaption>{label}</figcaption>
    <p class="hsl">{hslText}</p>
    <p class="hex rgb">{hexText} | {rgbText}</p>
</figure>

<style>
    .shade {
        color: var(--skin-color-text-secondary);
        background-color: var(--shade-color);
        padding: var(--sizing-spacing-sm) var(--sizing-spacing-md);
        margin: 0;
    }

    p {
        text-align: center;
        line-height: 1.15;
        margin: 0;
        font-weight: var(--typography-normal);
    }

    p.hsl {
        margin-bottom: var(--sizing-spacing-sm);
    }

    p.rgb, p.hex, figcaption {
        font-weight: var(--typography-light);
        font-size: var(--sizing-font-xs);
    }
</style>
