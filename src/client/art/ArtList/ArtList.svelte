<script lang="ts">
    import { DocumentInfo } from '@/client/DocumentInfo'
    import { Container } from '@/client/Container'
    import { Loading } from '@/client/Loading'
    import { Error } from '@/client/Error'
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
            <Error title="Uh oh!" subtitle="Something went horribly wrong.">
                <p>I recommend you try refreshing the page. If that doesn't fix it, I dunno, guess I need to fix something!</p>
            </Error>
        {:else}
            <ul>
                {#each items.filter(it => it.publishedAt) as item}
                    <li>{item.title}</li>
                {/each}
            </ul>
        {/if}
    </Container>
</DocumentInfo>
