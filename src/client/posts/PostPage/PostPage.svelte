<script lang="ts">
    import { Container } from '@/client/Container'
    import { Content } from '@/client/Content'
    import { Loading } from '@/client/Loading'
    import { RawRenderer } from '@/client/RawRenderer'

    import type { PostsApi } from '../api'
    import { FetchApi } from '../api'
    import { DateDisplay } from '../DateDisplay'
    import { Header } from './Header'
    import { Comments } from './Comments'

    export let api: PostsApi = new FetchApi(fetch.bind(window))
    export let id: string

    let promise = api.one(id)
</script>

<Container>
    {#await promise}
        <Loading text="Finding post..." />
    {:then item}
        <article style={`--article-color: var(--palette-${item.color});`}>
            <Header title={item.title} icon={item.icon} />
            <Content>
                <section class="content">
                    <div class="published"><DateDisplay date={item.publishedAt} /></div>
                    <RawRenderer content={item.content} />
                </section>
                <aside slot="sidebar">
                    <h2 class="more-title">More on {item.category}</h2>
                </aside>
                <section slot="after">
                    <Comments id={item.id} />
                </section>
            </Content>
        </article>
    {/await}
</Container>

<style>
    .published {
        margin-bottom: var(--sizing-spacing-p);
        font-weight: var(--typography-light);
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
