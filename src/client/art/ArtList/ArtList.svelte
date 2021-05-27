<script lang="ts">
    import { DocumentInfo } from '@/client/DocumentInfo'
    import { Container } from '@/client/Container'
    import { Loading } from '@/client/Loading'
    import { CatastrophicError } from '@/client/CatastrophicError'
    import type { Resource, Maybe } from '@/client/resources'
    import { Pending, Missing } from '@/client/resources'
    import type { ArtItem } from '../types';

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
            <ul>
                {#each items.filter(it => it.publishedAt) as item}
                    <li>{item.title}</li>
                {/each}
            </ul>
        {/if}
    </Container>
</DocumentInfo>
