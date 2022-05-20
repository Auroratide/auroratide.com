<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit'
    import Api from '$lib/art/api'

    export const load: Load = async ({ fetch, params }) => {
        const api = new Api(fetch)
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
    import SrOnly from '$lib/design/SrOnly.svelte'

    import type { ArtItem } from '$lib/art/types'
    import ArtCoverLink from '$lib/art/ArtCoverLink.svelte'

    import { UrlBuilder } from '$lib/routes'
    import { buildOpenGraph } from '$lib/open-graph'

    export let all: ArtItem[]

    const og = buildOpenGraph({
        title: 'Auroratide Art',
        url: new UrlBuilder().withBase().art(),
    }).website()
</script>

<DocumentInfo {og} title="Art" description="My name's Timothy! I code and teach for a living, and sometimes I write about programming, worldbuilding, and stuff I've built.">
    <Container>
        <SrOnly>
            <h1>My Art List</h1>
        </SrOnly>
        <ul class="item-list">
            {#each all.filter(it => it.publishedAt) as item}
                <li><ArtCoverLink {item} /></li>
            {/each}
        </ul>
    </Container>
</DocumentInfo>

<style>
    .item-list {
        --gap-size: var(--sp-st-s);
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(calc(max(25%, 10em) - var(--gap-size)), 1fr));
        grid-auto-rows: 1fr;
        grid-gap: var(--gap-size);
        padding: var(--sp-st-s);
    }

    .item-list > li {
        display: grid;
        overflow: hidden;
        position: relative;
        margin: 0;
    }

    .item-list > li::before {
        content: '';
        padding-bottom: 100%;
    }
</style>
