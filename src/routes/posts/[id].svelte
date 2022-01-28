<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit'
    import PostsApi from '$lib/posts/api'

    export const load: Load = async ({ fetch, params }) => {
        const api = new PostsApi(fetch)
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
    import FocusOnMe from '$lib/layout/FocusOnMe.svelte'

    import RawRenderer from '$lib/design/RawRenderer.svelte'
    import { UrlBuilder } from '$lib/routes'

    import type { Post } from '$lib/posts/types'

    import Header from '$lib/posts/Header.svelte'
    import RelatedItems from '$lib/posts/RelatedItems.svelte'
    import LinkBar from '$lib/design/links/LinkBar.svelte'
    import Gallery from '$lib/design/gallery/Gallery.svelte'

    import * as color from '$lib/design/color'

    export let item: Post
    export let all: Post[]

    $: relatedItems = all
        .filter(i => i.category === item.category)
        .filter(i => i.id !== item.id)
        .filter(i => i.publishedAt)
        .slice(0, 5)
</script>

<DocumentInfo title={item.title} description={item.summary}>
    <Container>
        <article aria-label={item.title} class="article" style="--article-color: {color.fromJson(item.color)};">
            <FocusOnMe>
                <Header title={item.title} icon={item.icon} />
            </FocusOnMe>
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
                        <Gallery root={new UrlBuilder().assets().post(item.id)} gallery={item.gallery} />
                    {/if}
                    <h2 class="more-title">More on <span class="category">{item.category}</span></h2>
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
        margin-bottom: var(--sizing-spacing-p);
        font-weight: var(--typography-light);
    }

    .category {
        text-transform: capitalize;
    }

    @media screen and (min-width: 75rem) {
        .more-title {
            font-weight: var(--typography-light);
            font-size: var(--sizing-font-sm);
            line-height: 1;
            margin-bottom: var(--sizing-spacing-p);
        }
    }
</style>
