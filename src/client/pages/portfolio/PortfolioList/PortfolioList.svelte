<script lang="ts">
    import { DocumentInfo } from '@/client/layout/DocumentInfo'
    import { Container } from '@/client/layout/Container'
    import { Loading } from '@/client/Loading'
    import type { Resource, Maybe } from '@/client/resources'
    import { Pending, Missing } from '@/client/resources'
    import type { PortfolioItem } from '../types'
    import { CatastrophicError } from '@/client/CatastrophicError'
    import { UrlBuilder } from '@/client/routes'
    import { ArticleCard } from '@/client/ArticleCard'
    import { SrOnly } from '@/client/SrOnly'
    import { FocusOnMe } from '@/client/FocusOnMe'

    export let resource: Resource<PortfolioItem>

    let items: Maybe<PortfolioItem[]> = Pending
    $: items = resource.list()
</script>

<DocumentInfo title="Portfolio" description="My name's Timothy! I code and teach for a living, and sometimes I write about programming, worldbuilding, and stuff I've built.">
    <Container>
        {#if items === Pending}
            <Loading text="Fetching portfolio..." large />
        {:else if items === Missing}
            <CatastrophicError />
        {:else}
            <SrOnly><FocusOnMe>
                <h1>My Portfolio List</h1>
            </FocusOnMe></SrOnly>
            <ul class="item-holder">
                {#each items.filter(it => it.publishedAt) as item}
                    <li>
                        <ArticleCard article={item} link={new UrlBuilder().portfolioItem(item.id)} />
                    </li>
                {/each}
            </ul>
        {/if}
    </Container>
</DocumentInfo>

<style>
    .item-holder {
        padding: var(--sizing-spacing-md);
        list-style: none;
        margin-bottom: 0;
    }

    .item-holder li {
        margin-bottom: 0;
    }

    @media screen and (min-width: 75rem) {
        .item-holder {
            padding: var(--sizing-spacing-xl);
        }
    }
</style>
