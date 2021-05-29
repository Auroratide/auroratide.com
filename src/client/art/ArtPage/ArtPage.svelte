<script lang="ts">
    import type { ArtItem } from '../types'
    import type { Resource, Maybe } from '@/client/resources'

    import { DocumentInfo } from '@/client/DocumentInfo'
    import { Container } from '@/client/Container'
    import { RawRenderer } from '@/client/RawRenderer'
    import { Loading } from '@/client/Loading'
    import { PageNotFound } from '@/client/PageNotFound'
    import { Pending, Missing } from '@/client/resources'
    import { UrlBuilder } from '@/client/routes'
    import { ArtCoverLink } from '../ArtCoverLink'
    import { disqus } from '@/client/embed/disqus'

    import * as color from '@/client/color'

    export let id: string
    export let resource: Resource<ArtItem>

    let item: Maybe<ArtItem> = Pending
    let relatedItems: Maybe<ArtItem[]> = Pending
    let title: string = ''
    let description: string = ''
    let ratioClassification: string = ''
    let pixelart: boolean = false
    $: {
        item = resource.one(id)
        if (item !== Pending && item !== Missing) {
            title = item.title
            description = item.summary

            const d = item.dimensions
            if (d.width / d.height >= 16 / 10) {
                ratioClassification = 'horizontal'
            } else if (d.width / d.height <= 10 / 16) {
                ratioClassification = 'vertical'
            } else {
                ratioClassification = 'square'
            }

            relatedItems = resource.list()
            if (relatedItems !== Pending && relatedItems !== Missing) {
                relatedItems = relatedItems
                    .filter(i => i.category === (item as ArtItem).category)
                    .filter(i => i.id !== (item as ArtItem).id)
                    .filter(i => i.publishedAt)
                    .slice(0, 4)
                    .sort(() => 0.5 - Math.random())
            }

            pixelart = item.tags.includes('pixelart')
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
            <article class="article {ratioClassification}" style="--article-color: {color.fromJson(item.color)}; --bg-color: {color.fromJson(item.background)}">
                <header>
                    <h1>{title}</h1>
                </header>
                <section class="art" class:pixelart data-testid="art-section">
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
                <section class="related-items">
                    {#if relatedItems !== Missing && relatedItems !== Pending}
                        {#if relatedItems.length > 0}
                            <h2 class="more-title">More {item.category} Art</h2>
                            <ul>
                                {#each relatedItems as relatedItem}
                                    <li>
                                        <ArtCoverLink item={relatedItem} />
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    {:else}
                        <Loading text="Finding art..." />
                    {/if}
                </section>
                <section class="comments">
                    <h2>Comments</h2>
                    <div use:disqus={{
                        url: new UrlBuilder().withBase().artItem(id),
                        id: id,
                    }}></div>
                </section>
            </article>
        {/if}
    </Container>
</DocumentInfo>

<style>
    .article {
        --article-padding: var(--sizing-spacing-md);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "image"
            "content"
            "related-items"
            "comments";
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

    .art.pixelart {
        image-rendering: pixelated;
        image-rendering: crisp-edges;
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
        padding: var(--article-padding) var(--article-padding) 0;
    }

    .related-items {
        grid-area: related-items;
        background: var(--skin-color-content);
        padding: 0 var(--article-padding) var(--article-padding);
    }

    .related-items ul {
        --gap-size: 2.5%;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(calc(25% - var(--gap-size)), 1fr));
        grid-auto-rows: 1fr;
        grid-gap: var(--gap-size);
        padding: 0;
    }

    .related-items ul > li {
        display: grid;
        overflow: hidden;
        position: relative;
        margin: 0;
        font-size: 0.625em;
    }

    .related-items ul > li::before {
        content: '';
        padding-bottom: 100%;
    }

    .more-title {
        text-transform: capitalize;
    }

    .comments {
        grid-area: comments;
        background: var(--skin-color-content);
        padding: var(--article-padding);
        border-top: var(--sizing-border-md) solid var(--article-color);
        box-shadow: 0 2em 0.5em -2em var(--palette-shade-033) inset;
    }

    @media screen and (min-width: 75rem) {
        h1 {
            padding: var(--sizing-spacing-sm);
        }

        .article {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto 1fr auto;
            grid-template-areas:
                "header header"
                "image content"
                "image related-items"
                "comments comments";
        }

        .article.horizontal {
            grid-template-columns: 1fr;
            grid-template-areas:
                "header"
                "image"
                "content"
                "related-items"
                "comments";
        }

        .published {
            text-align: left;
        }
    }
</style>