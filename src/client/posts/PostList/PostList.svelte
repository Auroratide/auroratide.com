<script lang="ts">
    import { Container } from '@/client/Container'
    import { Loading } from '@/client/Loading'

    import type { PostsApi } from '../api'
    import { FetchApi } from '../api'

    export let api: PostsApi = new FetchApi(fetch.bind(window))

    let promise = api.list()
</script>

<Container>
    {#await promise}
        <Loading text="Finding posts..." />
    {:then items}
        {#each items as item}
            <a href={`/posts/${item.id}`}>
                <article>
                    <aside>
                        <vector-icon icon={item.icon}></vector-icon>
                    </aside>
                    <section>
                        <h1>{item.title}</h1>
                        <div>
                            <time>{item.publishedAt}</time>
                            <span>&bull;</span>
                            <span>{item.category}</span>
                        </div>
                        <p>{item.summary}</p>
                    </section>
                </article>
            </a>
        {/each}
    {/await}
</Container>
