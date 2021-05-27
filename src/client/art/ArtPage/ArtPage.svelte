<script lang="ts">
    import type { ArtItem } from '../types'
    import type { Resource, Maybe } from '@/client/resources'

    import { DocumentInfo } from '@/client/DocumentInfo'
    import { Container } from '@/client/Container'
    import { Content } from '@/client/Content'
    import { RawRenderer } from '@/client/RawRenderer'
    import { Loading } from '@/client/Loading'
    import { PageNotFound } from '@/client/PageNotFound'
    import { Pending, Missing } from '@/client/resources'
    import { UrlBuilder } from '@/client/routes'

    import * as color from '@/client/color'

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
            <article class="article" style="--article-color: {color.fromJson(item.color)}; --bg-color: {color.fromJson(item.background)}">
                <header>
                    <h1>{title}</h1>
                </header>
                <section class="art">
                    <img-colorscape class="image" colorscape={new UrlBuilder().assets().artItem(id).asset(item.image.colorscape)}>
                        <popout-image src={new UrlBuilder().assets().artItem(id).asset(item.image.original)} alt={title}></popout-image>
                    </img-colorscape>
                </section>
                <section class="content">
                    <div class="published"><date-display date={item.publishedAt} /></div>
                    {#if item.content}
                        <RawRenderer content={item.content} />
                    {:else}
                        <Loading text="Fetching content..." />
                    {/if}
                </section>
            </article>
        {/if}
    </Container>
</DocumentInfo>

<style>
    .article {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "image"
            "content";
    }

    header {
        grid-area: header;
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background: var(--article-color);
        overflow: hidden;
    }

    h1 {
        font-size: var(--sizing-font-lg);
        position: relative;
        width: 100%;
        padding: var(--sizing-spacing-xs);
        color: var(--palette-greyscale-100);
        text-align: center;
        background: var(--palette-shade-033);
        margin: 0;
        line-height: 1;
    }

    .art {
        grid-area: image;
        background: var(--bg-color);
        text-align: center;
    }

    .image, .image > * {
        display: block;
        max-height: 95vh;
    }

    .published {
        margin-bottom: var(--sizing-spacing-md);
        font-weight: var(--typography-light);
        font-size: var(--sizing-font-xs);
        text-align: center;
    }

    .content {
        grid-area: content;
        background: var(--skin-color-content);
        padding: var(--sizing-spacing-md);
    }

    @media screen and (min-width: 75rem) {
        h1 {
            padding: var(--sizing-spacing-sm);
        }

        .article {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
                "header header"
                "image content";
        }

        .published {
            text-align: left;
        }
    }
</style>