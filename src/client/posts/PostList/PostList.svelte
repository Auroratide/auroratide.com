<script lang="ts">
    import { DocumentInfo } from '@/client/DocumentInfo'
    import { Container } from '@/client/Container'
    import { Loading } from '@/client/Loading'
    import type { Resource, Maybe } from '@/client/resources'
    import { Pending, Missing } from '@/client/resources'
    import type { Post } from '../types'
    import { CatastrophicError } from '@/client/CatastrophicError'
    import { UrlBuilder } from '@/client/routes'

    import * as color from '@/client/color'

    export let resource: Resource<Post>

    let items: Maybe<Post[]> = Pending
    $: items = resource.list()
</script>

<DocumentInfo title="Posts" description="My name's Timothy! I code and teach for a living, and sometimes I write about programming, worldbuilding, and stuff I've built.">
    <Container>
        {#if items === Pending}
            <Loading text="Fetching posts..." large />
        {:else if items === Missing}
            <CatastrophicError />
        {:else}
            <div class="item-holder">
                {#each items.filter(it => it.publishedAt) as item}
                    <a aria-label={item.title} class="post-item" href={new UrlBuilder().post(item.id)} style="--article-color: {color.fromJson(item.color)};">
                        <article>
                            <section>
                                <h1>{item.title}</h1>
                                <div class="byline">
                                    <date-display date={item.publishedAt} />
                                    <span class="bullet">&bull;</span>
                                    <span class="category">{item.category}</span>
                                </div>
                                <p class="summary short">{item.summary}</p>
                                <p class="summary long">{item.longSummary}</p>
                            </section>
                            <aside>
                                <div class="circle">
                                    <vector-icon icon={item.icon}></vector-icon>
                                </div>
                            </aside>
                        </article>
                    </a>
                {/each}
            </div>
        {/if}
    </Container>
</DocumentInfo>

<style>
    .item-holder {
        padding: var(--sizing-spacing-md);
    }

    .post-item {
        display: block;
        margin: 0 0 var(--sizing-spacing-md);
        padding: 0;
    }

    a.post-item {
        color: var(--skin-color-text);
    }

    a.post-item:hover {
        text-decoration: none;
    }

    .post-item h1 {
        font-size: var(--sizing-font-md);
        font-weight: var(--typography-bold);
        color: var(--palette-greyscale-100);
        line-height: 1;
        padding: var(--sizing-spacing-sm) calc(2 * var(--sizing-spacing-xl)) var(--sizing-spacing-sm) var(--sizing-spacing-sm);
        margin-bottom: var(--sizing-spacing-sm);
        background: var(--article-color);
    }

    .post-item .byline {
        display: block;
        opacity: 0.5;
        margin-bottom: var(--sizing-spacing-sm);
        font-size: 87.5%;
        padding-left: var(--sizing-spacing-sm);
    }

    .post-item .bullet {
        display: inline-block;
        margin: 0 var(--sizing-spacing-xs);
    }

    .post-item .summary {
        padding: 0 var(--sizing-spacing-sm) var(--sizing-spacing-sm) var(--sizing-spacing-sm);
        margin-bottom: 0;
    }

    .post-item article {
        position: relative;
        background: var(--skin-color-content);
    }

    .post-item aside {
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
        font-size: calc(2.25 * var(--sizing-font-xs));
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

    .post-item .summary.long {
        display: none;
    }

    .post-item .category {
        text-transform: capitalize;
    }

    @media screen and (min-width: 75rem) {
        .item-holder {
            padding: var(--sizing-spacing-xl);
        }

        .post-item {
            margin-bottom: var(--sizing-spacing-xl);
            border-left: 0 solid var(--article-color);
            width: 100%;
            transition: border-left-width var(--transition-quick), width var(--transition-quick);
        }

        .post-item:hover {
            border-left-width: var(--sizing-border-lg);
            width: calc(100% + var(--sizing-border-lg));
        }
        
        .post-item article {
            display: flex;
            background: var(--skin-color-content);
        }

        .post-item article section {
            flex: 1;
            padding: var(--sizing-spacing-md);
        }

        .post-item h1 {
            margin-bottom: var(--sizing-spacing-xs);
            padding: 0;
            background: none;
            color: var(--skin-color-text);
        }

        .post-item .byline {
            padding: 0;
        }

        .post-item .summary {
            padding: 0;
        }

        .post-item aside {
            position: relative;
            font-size: calc(4 * var(--sizing-font-xs));
        }

        .post-item .summary.short {
            display: none;
        }

        .post-item .summary.long {
            display: block;
        }
    }
</style>
