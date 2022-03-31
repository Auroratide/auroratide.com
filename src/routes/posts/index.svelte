<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit'
    import PostsApi from '$lib/posts/api'

    export const load: Load = async ({ fetch, params }) => {
        const api = new PostsApi(fetch)
        const all = await api.list()

        return {
            props: {
                all,
            },
        }
    }
</script>

<script lang="ts">
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import FocusOnMe from '$lib/layout/FocusOnMe.svelte'
    import ArticleCard from '$lib/design/ArticleCard.svelte'
    import SrOnly from '$lib/design/SrOnly.svelte'

    import type { Post } from '$lib/posts/types'
    import { UrlBuilder } from '$lib/routes'

    import { buildOpenGraph } from '$lib/open-graph'

    export let all: Post[]

    const og = buildOpenGraph({
        title: 'Auroratide Posts',
        url: new UrlBuilder().withBase().posts(),
    }).website()
</script>

<DocumentInfo {og} title="Posts" description="My name's Timothy! I code and teach for a living, and sometimes I write about programming, worldbuilding, and stuff I've built.">
    <Container>
        <SrOnly><FocusOnMe>
            <h1>My Posts List</h1>
        </FocusOnMe></SrOnly>
        <ul class="item-holder">
            {#each all.filter(it => it.publishedAt) as item}
                <li>
                    <ArticleCard article={item} link={new UrlBuilder().post(item.id)} />
                </li>
            {/each}
        </ul>
    </Container>
</DocumentInfo>

<style>
    .item-holder {
        padding: var(--sp-st-s);
        list-style: none;
        margin-bottom: 0;
    }

    .item-holder li {
        margin-bottom: 0;
    }

    @media screen and (min-width: 75rem) {
        .item-holder {
            padding: var(--sp-st-ge);
        }
    }
</style>
