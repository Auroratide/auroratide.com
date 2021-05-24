<script lang="ts">
    import type { ArtItem } from '../types'
    import type { Resource, Maybe } from '@/client/resources'

    import { DocumentInfo } from '@/client/DocumentInfo'
    import { Container } from '@/client/Container'
    import { Loading } from '@/client/Loading'
    import { PageNotFound } from '@/client/PageNotFound'
    import { Pending, Missing } from '@/client/resources'
    import { UrlBuilder } from '@/client/routes'

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
                <header>
                    <h1>{title}</h1>
                </header>
                <section class="content">
                    <popout-image src={new UrlBuilder().assets().artItem(id).asset(item.image)} alt={title} />
                </section>
            </article>
        {/if}
    </Container>
</DocumentInfo>

<style>
    header {
        position: relative;
        /* height: 10em; */
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background: var(--article-color);
        overflow: hidden;
        padding-top: var(--sizing-spacing-sm);
    }

    h1 {
        position: relative;
        width: 100%;
        padding: var(--sizing-spacing-sm);
        color: var(--palette-greyscale-100);
        text-align: center;
        background: var(--palette-shade-033);
        margin: 0;
        line-height: 1;
    }

    .content {
        text-align: center;
    }
</style>