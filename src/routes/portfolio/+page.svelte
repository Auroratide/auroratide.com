<script lang="ts">
    import type { PageData } from './$types'
    import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
    import Container from '$lib/layout/Container.svelte'
    import SrOnly from '$lib/design/SrOnly.svelte'

    import { UrlBuilder } from '$lib/routes'

    import { buildOpenGraph } from '$lib/open-graph'

    import Card from '$lib/portfolio/Card.svelte'

    export let data: PageData
    $: all = data.all

    const og = buildOpenGraph({
        title: 'Auroratide Portfolio',
        url: new UrlBuilder().withBase().portfolio(),
    }).website()
</script>

<DocumentInfo {og} title="Portfolio" description="My name's Timothy! I code and teach for a living, and sometimes I write about programming, worldbuilding, and stuff I've built.">
    <Container>
        <SrOnly>
            <h1>My Portfolio List</h1>
        </SrOnly>
        <ul class="item-holder">
            {#each all.filter(it => it.publishedAt) as item}
                <li>
                    <Card article={item} link={new UrlBuilder().portfolioItem(item.id)} />
                </li>
            {/each}
        </ul>
    </Container>
</DocumentInfo>

<style>
    .item-holder {
        --gap-size: var(--sp-st-s);
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(calc(max(50%, 20em) - var(--gap-size)), 1fr));
        grid-gap: var(--gap-size);
        padding: var(--sp-st-s);
        margin-bottom: 0;
    }

    .item-holder li {
        margin: 0;
    }

    @media screen and (min-width: 75rem) {
        .item-holder {
            padding: var(--sp-st-ge);
        }
    }
</style>
