<script lang="ts">
    import { Size } from './Size'

    export let src: string
    export let alt: string
    export let caption: string = null
    export let size: Size = Size.md
</script>

<figure class="article-image {size}">
    <img src={src} alt={alt} />
    {#if caption}
        <figcaption>{caption}</figcaption>
    {/if}
</figure>

<style>
    :host, :global(article-image) {
        display: block;
    }

    .article-image {
        text-align: center;
    }

    .article-image img {
        margin: 0 0 1em;
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

    .article-image figcaption {
        font-weight: 300;
        font-size: 87.5%;
        opacity: 0.75;
    }
</style>
