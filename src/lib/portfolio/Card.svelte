<script lang="ts">
    import type { Color } from '../design/color'
    import type { ImageSet } from './types'
    import { UrlBuilder } from '../routes'
    import * as color from '../design/color'

    export let link: string
    export let article: {
        id: string,
        title: string,
        cover?: ImageSet,
        publishedAt?: Date,
        category: string,
        summary: string,
        longSummary: string,
        icon: string,
        color: Color | string,
    }
</script>

<article aria-label={article.title} class="article-card content-typography" style="--article-color: {color.fromJson(article.color)};">
    <section class="info">
        <h2 class="title"><a href={link} sveltekit:prefetch>{article.title}</a></h2>
        <p class="summary">{article.summary}</p>
    </section>
    <section class="supplementary">
        <span class="category">{article.category}</span>
        <date-display date={article.publishedAt} />
        <figure>
            <div class="circle">
                {#if article.cover}
                    <img src={new UrlBuilder().assets().portfolioItem(article.id).asset(article.cover.original)} alt={article.cover.alt} />
                {:else}
                    <vector-icon icon={article.icon}></vector-icon>
                {/if}
            </div>
        </figure>
    </section>
</article>

<style>
    .article-card {
        position: relative;
        display: flex;
        flex-direction: column-reverse;
        margin: 0;
        padding: 0;
        background: var(--skin-content);
    }

    .article-card:hover, .article-card:focus-within {
        outline: var(--sizing-border-sm) solid var(--article-color);
    }
    
    .article-card .info {
        padding: var(--sizing-spacing-sm);
    }

    .article-card .title {
        font-size: var(--sizing-font-md);
        font-weight: var(--typography-bold);
        line-height: 1;
        padding: var(--sizing-spacing-sm) 0;
        margin-bottom: 0;
        text-align: left;
    }

    .article-card .title a::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
    }

    .article-card .title a {
        color: var(--skin-content-text);
        text-decoration: none;
    }

    .article-card .summary {
        padding: 0;
        margin-bottom: 0;
    }

    .article-card figure {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        font-size: calc(5 * var(--sizing-font-xs));
        margin: 0;
    }

    .article-card figure img {
        width: 100%;
    }

    .article-card .category {
        text-transform: capitalize;
    }

    .article-card .supplementary {
        grid-area: info;
        display: flex;
        flex-direction: column;
        height: calc(9 * var(--sizing-font-xs));
    }

    .article-card .category {
        background: var(--article-color);
        color: var(--skin-banner-text);
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: right;
        padding-right: var(--sizing-spacing-sm);
        font-weight: var(--typography-normal);
    }

    .article-card date-display {
        text-align: right;
        padding-right: var(--sizing-spacing-sm);
        font-weight: var(--typography-normal);
        opacity: 0.75;
    }

    .circle {
        background: var(--article-color);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.25em;
        height: 2.25em;
        border-radius: 1.125em;
        color: var(--palette-greyscale-100);
        position: relative;
        bottom: 0.375em;
        left: -0.375em;
        overflow: hidden;
        box-shadow: 0 0 0.25em var(--palette-shade-025);
    }
</style>
