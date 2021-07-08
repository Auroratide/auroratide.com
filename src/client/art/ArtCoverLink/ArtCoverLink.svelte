<script lang="ts">
    import type { ArtItem } from '../types'
    import { UrlBuilder } from '@/client/routes'
    import * as color from '@/client/color'

    export let item: ArtItem
    const pixelart = item.tags.includes('pixelart')
</script>

<a aria-label={item.title} class="item-link" href={new UrlBuilder().artItem(item.id)} style="--article-color: {color.fromJson(item.color)}; --bg-color: {color.fromJson(item.background)};">
    <article class="item">
        <header class="item-title">
            <h1>{item.title}</h1>
        </header>
        <section class="image-container" class:pixelart data-testid="art-section">
            <img-colorscape colorscape={new UrlBuilder().assets().artItem(item.id).asset(item.cover.colorscape)}>
                <img src={new UrlBuilder().assets().artItem(item.id).asset(item.cover.original)} alt={item.alt} loading="lazy" />
            </img-colorscape>
        </section>
    </article>
</a>

<style>
    .item-link {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
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

    .item-title {
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;
        color: var(--palette-greyscale-100);
        background: var(--palette-shade-050);
        z-index: 2;
    }

    .item-link:hover .item-title {
        opacity: 1;
    }

    .item-title h1 {
        font-size: var(--sizing-font-md);
        line-height: 1.5;
    }

    .item {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
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

    .item-link:hover .item {
        border-bottom-width: var(--sizing-border-lg);
    }

    .item-link:hover .image-container {
        filter: brightness(0.75);
    }

    .item-title {
        opacity: 0;
        transition: opacity var(--transition-quick);
    }

    .item-link:hover .item-title {
        opacity: 1;
    }
</style>
