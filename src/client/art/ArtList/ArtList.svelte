<script lang="ts">
    import { DocumentInfo } from '@/client/DocumentInfo'
    import { Container } from '@/client/Container'
    import { Loading } from '@/client/Loading'
    import { CatastrophicError } from '@/client/CatastrophicError'
    import type { Resource, Maybe } from '@/client/resources'
    import { Pending, Missing } from '@/client/resources'
    import type { ArtItem } from '../types'
    import { SrOnly } from '@/client/SrOnly'
    import { FocusOnMe } from '@/client/FocusOnMe'

    import { ArtCoverLink } from '../ArtCoverLink'

    export let resource: Resource<ArtItem>

    let items: Maybe<ArtItem[]> = Pending
    $: items = resource.list()
</script>

<DocumentInfo title="Art" description="My name's Timothy! I code and teach for a living, and sometimes I write about programming, worldbuilding, and stuff I've built.">
    <Container>
        {#if items === Pending}
            <Loading text="Fetching posts..." large />
        {:else if items === Missing}
            <CatastrophicError />
        {:else}
            <SrOnly><FocusOnMe>
                <h1>My Art List</h1>
            </FocusOnMe></SrOnly>
            <ul class="item-list">
                {#each items.filter(it => it.publishedAt) as item}
                    <li><ArtCoverLink {item} /></li>
                {/each}
            </ul>
        {/if}
    </Container>
</DocumentInfo>

<style>
    .item-list {
        --gap-size: var(--sizing-spacing-md);
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(calc(max(25%, 10em) - var(--gap-size)), 1fr));
        grid-auto-rows: 1fr;
        grid-gap: var(--gap-size);
        padding: var(--sizing-spacing-md);
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