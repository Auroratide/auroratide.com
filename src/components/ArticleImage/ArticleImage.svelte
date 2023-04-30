<svelte:options tag="article-image" />

<script lang="ts">
    import { Size } from './Size'

    export let src: string
    export let alt: string
    export let caption: string | null = null
    export let size: Size = Size.md
    export let nopopout: (boolean | '') = false
    export let width: string = ''
    export let height: string = ''
</script>

<figure class="article-image {size}">
    {#if nopopout || nopopout === ''}
        <img {src} {alt} {width} {height} />
    {:else}
        <img-popout>
            <img {src} {alt} {width} {height} />
        </img-popout>
    {/if}
    {#if caption || $$slots.caption}
        <figcaption>{caption || ''}<slot name="caption"></slot></figcaption>
    {/if}
</figure>

<style>
    :host {
        display: block;
    }

    .article-image {
        text-align: center;
        margin: 0 0 1.5em;
    }

    .article-image img {
        max-width: 100%;
        width: auto;
        height: auto;
        margin: 0 0 0.25em;
        box-shadow: 0 0.25em 0.5em -0.25em rgba(0, 0, 0, 0.333);
    }

    .article-image.sm img {
        max-height: 5em;
    }

    .article-image.md img {
        max-height: 10em;
    }

    .article-image.lg img {
        max-height: 15em;
    }

    .article-image.xl img {
        max-height: 20em;
    }

    .article-image.fit img {
        width: 100%;
    }

    .article-image figcaption {
        font-weight: 300;
        opacity: 0.75;
    }
</style>
