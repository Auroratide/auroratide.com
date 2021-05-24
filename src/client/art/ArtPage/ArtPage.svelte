<script lang="ts">
    import type { ArtItem } from '../types'
    import type { Resource, Maybe } from '@/client/resources'

    import { DocumentInfo } from '@/client/DocumentInfo'
    import { Container } from '@/client/Container'
    import { Loading } from '@/client/Loading'
    import { PageNotFound } from '@/client/PageNotFound'
    import { Pending, Missing } from '@/client/resources'

    export let id: string
    export let resource: Resource<ArtItem>

    let item: Maybe<ArtItem> = Pending
    let title: string = ''
    let description: string = ''
    $: {
        item = resource.one(id)
        if (item !== Pending && item !== Missing) {
            title = item.title
            description = item.summary
        }
    }
</script>

<DocumentInfo {title} {description}>
    <Container>
        {#if item === Pending}
            <Loading text="Finding post..." large />
        {:else if item === Missing}
            <PageNotFound />
        {:else}
            <article class="article" style={`--article-color: var(--palette-${item.color});`}>
                <h1>{title}</h1>
            </article>
        {/if}
    </Container>
</DocumentInfo>
