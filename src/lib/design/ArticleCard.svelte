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
        margin: 0 0 var(--sp-st-s);
        padding: 0;
        background: var(--skin-content);
    }

    .article-card:hover, .article-card:focus-within {
        outline: var(--bd-fx-he) solid var(--article-color);
    }

    .article-card .title {
        font-size: var(--font-sz-uranus);
        font-weight: var(--typography-bold);
        line-height: 1;
        padding: var(--sp-st-o) calc(2 * var(--sp-st-ge)) var(--sp-st-o) var(--sp-st-o);
        margin-bottom: var(--sp-st-o);
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
        margin-bottom: var(--sp-st-o);
        padding-left: var(--sp-st-o);
        font-weight: var(--typography-normal);
        line-height: 1.15;
    }

    .article-card .bullet {
        display: inline-block;
        margin: 0 var(--sp-st-be);
    }

    .article-card .summary {
        padding: 0 var(--sp-st-o) var(--sp-st-o) var(--sp-st-o);
        margin-bottom: 0;
    }

    .article-card figure {
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
        font-size: calc(2 * var(--font-sz-earth));
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
            margin-bottom: var(--sp-st-ge);
            border-left: 0 solid var(--article-color);
            width: 100%;
            transition: border-left-width var(--transition-quick), width var(--transition-quick);
            display: flex;
            background: var(--skin-content);
        }

        .article-card:hover, .article-card:focus-within {
            border-left-width: var(--bd-fx-o);
            width: calc(100% + var(--bd-fx-o));
            outline: none;
        }
        
        .article-card section {
            flex: 1;
            padding: var(--sp-st-s);
        }

        .article-card .title {
            margin-bottom: var(--sp-st-be);
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
            font-size: calc(4 * var(--font-sz-earth));
            margin: 0;
        }
    }
</style>
