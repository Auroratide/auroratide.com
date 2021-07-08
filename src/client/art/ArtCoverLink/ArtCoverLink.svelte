<script lang="ts">
    import type { ArtItem } from '../types'
    import { UrlBuilder } from '@/client/routes'
    import * as color from '@/client/color'

    export let item: ArtItem

    $: pixelart = item.tags.includes('pixelart')
    $: colorscapeAsset = new UrlBuilder().assets().artItem(item.id).asset(item.cover.colorscape)
    $: imgAsset = new UrlBuilder().assets().artItem(item.id).asset(item.cover.original)
    $: linkTo = new UrlBuilder().artItem(item.id)
</script>

<article class="item" aria-label={item.title} style="--article-color: {color.fromJson(item.color)}; --bg-color: {color.fromJson(item.background)};">
    <h2 class="title"><a href={linkTo}>{item.title}</a></h2>
    <section class="image-container" class:pixelart data-testid="art-section">
        <img-colorscape colorscape={colorscapeAsset}>
            <img src={imgAsset} alt={item.alt} loading="lazy" />
        </img-colorscape>
    </section>
    <a class="covering-link" href={linkTo} aria-hidden="true" tabindex="-1">read more</a>
</article>

<style>
    .item {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .item .title {
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;
        color: var(--palette-greyscale-100);
        background: var(--palette-shade-050);
        font-size: var(--sizing-font-md);
        font-weight: var(--typography-normal);
        line-height: 1.5;
        z-index: 2;
    }

    .item .title a {
        color: var(--palette-greyscale-100);
        text-decoration: none;
    }

    .item .covering-link {
        font-size: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
    }

    .image-container {
        width: 100%;
        height: 100%;
        background: var(--bg-color);
    }

    .image-container.pixelart {
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    }

    .item img-colorscape {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /** Interactives **/
    .item {
        border-bottom: 0 solid var(--article-color);
        transition: border-bottom-width var(--transition-quick);
    }

    .image-container {
        filter: brightness(1);
        transition: filter var(--transition-quick);
    }

    .item:hover, .item:focus-within {
        border-bottom-width: var(--sizing-border-lg);
    }

    .item:hover .image-container, .item:focus-within .image-container {
        filter: brightness(0.75);
    }

    .item .title {
        opacity: 0;
        transition: opacity var(--transition-quick);
    }

    .item:hover .title, .item:focus-within .title {
        opacity: 1;
    }
</style>
