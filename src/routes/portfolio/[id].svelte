<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit'
    import Api from '$lib/portfolio/api'

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
    import Content from '$lib/layout/Content.svelte'

    import RawRenderer from '$lib/design/RawRenderer.svelte'
    import { UrlBuilder } from '$lib/routes'

    import type { PortfolioItem } from '$lib/portfolio/types'

    import Header from '$lib/portfolio/Header.svelte'
    import RelatedItems from '$lib/portfolio/RelatedItems.svelte'
    import LinkBar from '$lib/design/links/LinkBar.svelte'
    import Gallery from '$lib/design/gallery/Gallery.svelte'

    import * as color from '$lib/design/color'

    import { buildOpenGraph } from '$lib/open-graph'

    export let item: PortfolioItem
    export let all: PortfolioItem[]

    $: assetRoot = new UrlBuilder().assets().portfolioItem(item.id)

    $: relatedItems = all
        .filter(i => i.category === item.category)
        .filter(i => i.id !== item.id)
        .filter(i => i.publishedAt)
        .slice(0, 5)

    $: og = buildOpenGraph({
        title: item.title,
        url: new UrlBuilder().withBase().portfolioItem(item.id),
        image: item.cover != null ? assetRoot.asset(item.cover.original) : undefined,
    }).article({
        published: item.publishedAt,
        author: 'Timothy Foster',
        section: item.category,
        tags: item.tags,
    })
</script>

<DocumentInfo {og} title={item.title} description={item.summary}>
    <Container>
        <article aria-label={item.title} class="article" style="--article-color: {color.fromJson(item.color)};">
            <Header title={item.title} icon={item.icon} />
            {#if item.links}
                <LinkBar links={item.links} />
            {/if}
            <Content>
                <section class="content">
                    <div class="published"><date-display date={item.publishedAt} /></div>
                    <RawRenderer content={item.content} />
                </section>
                <aside aria-label="Related Article Material" slot="sidebar">
                    {#if item.gallery}
                        <h2 class="more-title">Some Pics</h2>
                        <Gallery root={assetRoot} gallery={item.gallery} />
                    {/if}
                    <h2 class="more-title">More on <span class="category">{item.category}</span> I've Made</h2>
                    <RelatedItems items={relatedItems} />
                </aside>
            </Content>
        </article>
    </Container>
</DocumentInfo>

<style>
    .article {
        --header-height: 16em;
        position: relative;
    }

    .published {
        margin-bottom: var(--sp-paragraph);
    }

    .category {
        text-transform: capitalize;
    }

    @media screen and (min-width: 75rem) {
        .more-title {
            font-size: var(--font-sz-neptune);
            line-height: 1;
            margin-bottom: var(--sp-paragraph);
        }
    }
</style>
