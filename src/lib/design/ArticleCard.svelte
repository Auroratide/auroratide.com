<script lang="ts">
    import type { Color } from './color'
    import * as color from './color'
    import BreakpointContent from './BreakpointContent.svelte'

    export let link: string
    export let article: {
        id: string,
        title: string,
        publishedAt?: Date,
        category: string,
        summary: string,
        longSummary: string,
        icon: string,
        color: Color | string,
    }
</script>

<article aria-label={article.title} class="article-card content-typography" style="--article-color: {color.fromJson(article.color)};">
    <section>
        <h2 class="title"><a href={link} sveltekit:prefetch>{article.title}</a></h2>
        <small class="byline">
            <date-display date={article.publishedAt} />
            <span class="bullet" aria-hidden="true">&bull;</span>
            <span class="category">{article.category}</span>
        </small>
        <BreakpointContent>
            <p slot="small" class="summary">{article.summary}</p>    
            <p slot="large" class="summary">{article.longSummary}</p>
        </BreakpointContent>
    </section>
    <figure>
        <div class="circle">
            <vector-icon icon={article.icon}></vector-icon>
        </div>
    </figure>
</article>

<style>
    .article-card {
        position: relative;
        display: block;
        margin: 0 0 var(--sizing-spacing-md);
        padding: 0;
        background: var(--skin-content);
    }

    .article-card:hover, .article-card:focus-within {
        outline: var(--sizing-border-sm) solid var(--article-color);
    }

    .article-card .title {
        font-size: var(--sizing-font-md);
        font-weight: var(--typography-bold);
        line-height: 1;
        padding: var(--sizing-spacing-sm) calc(2 * var(--sizing-spacing-xl)) var(--sizing-spacing-sm) var(--sizing-spacing-sm);
        margin-bottom: var(--sizing-spacing-sm);
        background: var(--article-color);
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
        color: var(--palette-greyscale-100);
        text-decoration: none;
    }

    .article-card .byline {
        display: block;
        opacity: 0.75;
        margin-bottom: var(--sizing-spacing-sm);
        padding-left: var(--sizing-spacing-sm);
        font-weight: var(--typography-normal);
        line-height: 1.15;
    }

    .article-card .bullet {
        display: inline-block;
        margin: 0 var(--sizing-spacing-xs);
    }

    .article-card .summary {
        padding: 0 var(--sizing-spacing-sm) var(--sizing-spacing-sm) var(--sizing-spacing-sm);
        margin-bottom: 0;
    }

    .article-card figure {
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
        font-size: calc(2 * var(--sizing-font-xs));
    }

    .article-card .category {
        text-transform: capitalize;
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
        left: 0.375em;
    }

    @media screen and (min-width: 75rem) {
        .article-card {
            margin-bottom: var(--sizing-spacing-xl);
            border-left: 0 solid var(--article-color);
            width: 100%;
            transition: border-left-width var(--transition-quick), width var(--transition-quick);
            display: flex;
            background: var(--skin-content);
        }

        .article-card:hover, .article-card:focus-within {
            border-left-width: var(--sizing-border-lg);
            width: calc(100% + var(--sizing-border-lg));
            outline: none;
        }
        
        .article-card section {
            flex: 1;
            padding: var(--sizing-spacing-md);
        }

        .article-card .title {
            margin-bottom: var(--sizing-spacing-xs);
            padding: 0;
            background: none;
        }

        .article-card .title a {
            color: var(--skin-content-text);
        }

        .article-card .byline {
            padding: 0;
        }

        .article-card .summary {
            padding: 0;
        }

        .article-card figure {
            position: relative;
            font-size: calc(4 * var(--sizing-font-xs));
            margin: 0;
        }
    }
</style>
