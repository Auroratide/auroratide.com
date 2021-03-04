<script lang="ts">
    import { DocumentTitle } from '@/client/DocumentTitle'
    import { Container } from '@/client/Container'
    import { Content } from '@/client/Content'
    import { Loading } from '@/client/Loading'
    import { RawRenderer } from '@/client/RawRenderer'
    import type { Resource, Maybe } from '@/client/resources'
    import { Pending, Missing } from '@/client/resources'
    import { PageNotFound } from '@/client/PageNotFound'
    import { RelatedPost } from './RelatedPost'

    import type { Post } from '../types'

    import { DateDisplay } from '../DateDisplay'
    import { Header } from './Header'
    import { Comments } from './Comments'

    export let id: string
    export let resource: Resource<Post>

    let item: Maybe<Post> = Pending
    let relatedItems: Maybe<Post[]> = Pending
    let title: string = ''
    $: {
        item = resource.one(id)
        if (item !== Pending && item !== Missing) {
            title = item.title
            relatedItems = resource.list()
            if (relatedItems !== Pending && relatedItems !== Missing) {
                relatedItems = relatedItems.filter(i => i.category === (item as Post).category && i.id !== (item as Post).id)
            }
        }
    }
</script>

<DocumentTitle {title}>
    <Container>
        {#if item === Pending}
            <Loading text="Finding post..." large />
        {:else if item === Missing}
            <PageNotFound />
        {:else}
            <article class="article" style={`--article-color: var(--palette-${item.color});`}>
                <Header title={item.title} icon={item.icon} />
                {#if item.links}
                    <aside class="link-bar">
                        {#each item.links as link}
                            <a class="as-button" href={link.href} style={link.color ? `--btn-color: var(--palette-${link.color});` : ''}>
                                <span>{link.title}</span>
                                {#if link.icon}
                                    <vector-icon icon={link.icon}></vector-icon>
                                {/if}
                            </a>
                        {/each}
                    </aside>
                {/if}
                <Content>
                    <section class="content">
                        <div class="published"><DateDisplay date={item.publishedAt} /></div>
                        {#if item.content}
                            <RawRenderer content={item.content} />
                        {:else}
                            <Loading text="Fetching content..." />
                        {/if}
                    </section>
                    <aside slot="sidebar">
                        <h2 class="more-title">More on {item.category}</h2>
                        {#if relatedItems !== Pending && relatedItems !== Missing}
                            <ul class="related-posts">
                                {#each relatedItems as relatedItem}
                                    <li><RelatedPost post={relatedItem} /></li>
                                {/each}
                            </ul>
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
</DocumentTitle>

<style>
    .article {
        --header-height: 16em;
        position: relative;
    }

    .published {
        margin-bottom: var(--sizing-spacing-p);
        font-weight: var(--typography-light);
    }

    .related-posts {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .link-bar {
        position: absolute;
        top: calc(var(--header-height) - 0.75em);
        left: 0;
        right: 0;
        text-align: center;
    }

    .link-bar a {
        margin: 0 var(--sizing-spacing-sm);
    }

    .link-bar a vector-icon {
        margin-left: var(--sizing-spacing-xs);
    }

    .link-bar a.as-button::before {
        border: var(--sizing-border-sm) solid var(--skin-color-content);
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
