<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit'
    import Api from '$lib/art/api'

    export const load: Load = async ({ fetch, params }) => {
        const api = new Api(fetch)
        const [ item, all ] = await Promise.all([
            api.one(params.id).catch(() => null),
            api.list().catch(() => []),
        ])

        if (!item) {
            return {
                status: 404,
                error: new Error(`Item with id ${params.id} does not exist`),
            }
        }

        return {
            props: {
                item,
                all,
            },
        }
    }
</script>

<script lang="ts">
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import FocusOnMe from '$lib/layout/FocusOnMe.svelte'

    import RawRenderer from '$lib/design/RawRenderer.svelte'
    import { UrlBuilder } from '$lib/routes'

    import type { ArtItem } from '$lib/art/types'
    import ArtCoverLink from '$lib/art/ArtCoverLink.svelte'

    import * as color from '$lib/design/color'

    export let item: ArtItem
    export let all: ArtItem[]
    let ratioClassification: 'horizontal' | 'vertical' | 'square'

    $: relatedItems = all
        .filter(i => i.category === item.category)
        .filter(i => i.id !== item.id)
        .filter(i => i.publishedAt)
        .slice(0, 4)
    
    $: pixelart = item.tags.includes('pixelart')

    $: {
        const d = item.dimensions
        if (d.width / d.height >= 16 / 10) {
            ratioClassification = 'horizontal'
        } else if (d.width / d.height <= 10 / 16) {
            ratioClassification = 'vertical'
        } else {
            ratioClassification = 'square'
        }
    }
</script>

<DocumentInfo title={item.title} description={item.summary}>
    <Container>
        <article aria-label={item.title} class="article {ratioClassification}" style="--article-color: {color.fromJson(item.color)}; --bg-color: {color.fromJson(item.background)}">
            <header>
                <FocusOnMe>
                    <h1>{item.title}</h1>
                </FocusOnMe>
            </header>
            <section class="art" class:pixelart data-testid="art-section">
                <img-colorscape class="image" colorscape={new UrlBuilder().assets().artItem(item.id).asset(item.image.colorscape)}>
                    <img-popout>
                        <img src={new UrlBuilder().assets().artItem(item.id).asset(item.image.original)} alt={item.alt} />
                    </img-popout>
                </img-colorscape>
            </section>
            <section class="content content-typography">
                <div class="published"><date-display date={item.publishedAt} /></div>
                <RawRenderer content={item.content} />
            </section>
            <section class="related-items">
                {#if relatedItems.length > 0}
                    <h2 class="more-title">More {item.category} Art</h2>
                    <ul>
                        {#each relatedItems as relatedItem}
                            <li>
                                <ArtCoverLink item={relatedItem} />
                            </li>
                        {/each}
                    </ul>
                {/if}
            </section>
        </article>
    </Container>
</DocumentInfo>

<style>
    .article {
        --article-padding: var(--sizing-spacing-md);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "image"
            "content"
            "related-items"
            "comments";
    }

    header {
        grid-area: header;
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background: var(--article-color);
        overflow: hidden;
    }

    header > :global(*) {
        width: 100%;
    }

    h1 {
        font-size: var(--sizing-font-lg);
        position: relative;
        width: 100%;
        padding: var(--sizing-spacing-xs);
        color: var(--palette-greyscale-100);
        text-align: center;
        background: var(--palette-shade-033);
        margin: 0;
        line-height: 1;
    }

    .art {
        grid-area: image;
        background: var(--bg-color);
        text-align: center;
    }

    .art.pixelart {
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    }

    .image, .image img:not([slot="popped-out"]) {
        display: block;
        max-height: 95vh;
    }

    .image img:not([slot="popped-out"]) {
        width: 100%;
        margin: auto;
        object-fit: contain;
    }

    .published {
        margin-bottom: var(--sizing-spacing-md);
        font-size: var(--sizing-font-xs);
        text-align: center;
    }

    .content {
        grid-area: content;
        background: var(--skin-content);
        padding: var(--article-padding) var(--article-padding) 0;
    }

    .related-items {
        grid-area: related-items;
        background: var(--skin-content);
        padding: 0 var(--article-padding) var(--article-padding);
    }

    .related-items ul {
        --gap-size: 2.5%;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(calc(25% - var(--gap-size)), 1fr));
        grid-auto-rows: 1fr;
        grid-gap: var(--gap-size);
        padding: 0;
    }

    .related-items ul > li {
        display: grid;
        overflow: hidden;
        position: relative;
        margin: 0;
        font-size: 0.625em;
    }

    .related-items ul > li::before {
        content: '';
        padding-bottom: 100%;
    }

    .more-title {
        text-transform: capitalize;
        font-size: var(--sizing-font-md);
    }

    @media screen and (min-width: 75rem) {
        h1 {
            padding: var(--sizing-spacing-sm);
        }

        .article {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto 1fr auto;
            grid-template-areas:
                "header header"
                "image content"
                "image related-items"
                "comments comments";
        }

        .article.horizontal {
            grid-template-columns: 1fr;
            grid-template-areas:
                "header"
                "image"
                "content"
                "related-items"
                "comments";
        }

        .published {
            text-align: left;
        }
    }
</style>