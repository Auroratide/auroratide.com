<svelte:options tag="article-image" />

<script lang="ts">
    import { Size } from './Size'

    export let src: string
    export let alt: string
    export let caption: string = null
    export let size: Size = Size.md
</script>

<figure class="article-image {size}">
    <img-popout>
        <img {src} {alt} />
    </img-popout>
    {#if caption}
        <figcaption>{caption}</figcaption>
    {/if}
</figure>

<style>
    :host {
        display: block;
    }

    .article-image {
        text-align: center;
        margin: 0 0 1em;
    }

    .article-image img:not([slot="popped-out"]) {
        max-width: 100%;
        margin: 0 0 0.25em;
        box-shadow: 0 0.25em 0.5em -0.25em rgba(0, 0, 0, 0.333);
    }

    .article-image.sm img:not([slot="popped-out"]) {
        max-height: 5em;
    }

    .article-image.md img:not([slot="popped-out"]) {
        max-height: 10em;
    }

    .article-image.lg img:not([slot="popped-out"]) {
        max-height: 15em;
    }

    .article-image.fit img:not([slot="popped-out"]) {
        width: 100%;
    }

    .article-image figcaption {
        font-weight: 300;
        font-size: 87.5%;
        opacity: 0.75;
    }
</style>
