<script lang="ts">
    import type { HslaValue } from '@/client/color/types'
    import { hexToRgb, hslToHex } from '@/client/color'

    export let label: string
    export let hsl: HslaValue
    let hexText: string
    let rgbText: string
    let hslText: string

    $: {
        const hex = hslToHex(hsl)
        const rgb = hexToRgb(hex)

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
        color: var(--skin-banner-text);
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
