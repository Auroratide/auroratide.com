<script lang="ts">
    import type { PostsApi } from '../api'
    import { FetchApi } from '../api'
    import { Header } from './Header'
    import { Container } from '../../Container'
    import { DateDisplay } from './DateDisplay'
    import { Loading } from '../../Loading'

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
            <div class="body">
                <section class="content">
                    <DateDisplay date={item.publishedAt} />
                    {@html item.content}
                </section>
                <aside>
                    <h2>More on {item.category}</h2>
                </aside>
            </div>
        </article>
    {/await}
</Container>

<style>
    .body {
        background: var(--skin-color-content);
        display: flex;
        padding: var(--sizing-spacing-md);
    }

    @media screen and (min-width: 75rem) {
        .body {
            padding: var(--sizing-spacing-xl)
        }
    }
</style>
