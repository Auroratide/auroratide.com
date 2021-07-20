<script lang="ts">
    import { DocumentInfo } from '@/client/layout/DocumentInfo'
    import { Container } from '@/client/layout/Container'
    import { Content } from '@/client/layout/Content'
    import { Loading } from '@/client/Loading'
    import { RawRenderer } from '@/client/RawRenderer'
    import type { Resource, Maybe } from '@/client/resources'
    import { Pending, Missing } from '@/client/resources'
    import { PageNotFound } from '@/client/pages/PageNotFound'
    import { UrlBuilder } from '@/client/routes'
    import { FocusOnMe } from '@/client/FocusOnMe'

    import type { Post } from '../types'

    import { Header } from './Header'
    import { Comments } from './Comments'
    import { RelatedItems } from './RelatedItems'
    import { LinkBar } from '@/client/LinkBar'
    import { Gallery } from '@/client/Gallery'

    import * as color from '@/client/color'

    export let id: string
    export let resource: Resource<Post>

    let item: Maybe<Post> = Pending
    let relatedItems: Maybe<Post[]> = Pending
    let title: string = ''
    let description: string = ''
    $: {
        item = resource.one(id)
        if (item !== Pending && item !== Missing) {
            title = item.title
            description = item.summary
            relatedItems = resource.list()
            if (relatedItems !== Pending && relatedItems !== Missing) {
                relatedItems = relatedItems
                    .filter(i => i.category === (item as Post).category)
                    .filter(i => i.id !== (item as Post).id)
                    .filter(i => i.publishedAt)
                    .slice(0, 5)
                    .sort(() => 0.5 - Math.random())
            }
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
            <article aria-label={item.title} class="article" style="--article-color: {color.fromJson(item.color)};">
                <FocusOnMe>
                    <Header title={item.title} icon={item.icon} />
                </FocusOnMe>
                {#if item.links}
                    <LinkBar links={item.links} />
                {/if}
                <Content>
                    <section class="content">
                        <div class="published"><date-display date={item.publishedAt} /></div>
                        {#if item.content}
                            <RawRenderer content={item.content} />
                        {:else}
                            <Loading text="Fetching content..." />
                        {/if}
                    </section>
                    <aside aria-label="Related Article Material" slot="sidebar">
                        {#if item.gallery}
                            <h2 class="more-title">Some Pics</h2>
                            <Gallery root={new UrlBuilder().assets().post(item.id)} gallery={item.gallery} />
                        {/if}
                        <h2 class="more-title">More on <span class="category">{item.category}</span></h2>
                        {#if relatedItems !== Pending && relatedItems !== Missing}
                            <RelatedItems items={relatedItems} />
                        {:else}
                            <Loading text="Finding posts..." />
                        {/if}
                    </aside>
                    <section slot="after">
                        <Comments id={item.id} />
                    </section>
                </Content>
            </article>
        {/if}
    </Container>
</DocumentInfo>

<style>
    .article {
        --header-height: 16em;
        position: relative;
    }

    .published {
        margin-bottom: var(--sizing-spacing-p);
        font-weight: var(--typography-light);
    }

    .category {
        text-transform: capitalize;
    }

    @media screen and (min-width: 75rem) {
        .more-title {
            font-weight: var(--typography-light);
            font-size: var(--sizing-font-sm);
            line-height: 1;
            margin-bottom: var(--sizing-spacing-p);
        }
    }
</style>
