<script lang="ts">
    import type { PostsApi } from '../api'
    import { FetchApi } from '../api'
    import { Header } from './Header'
    import { DateDisplay } from './DateDisplay'

    export let api: PostsApi = new FetchApi(fetch.bind(window))
    export let id: string

    let promise = api.one(id)
</script>

{#await promise}
    <p>...waiting</p>
{:then item}
    <article class="article" style={`--article-color: var(--palette-${item.color});`}>
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

<style>
    .article {
        max-width: 75rem;
        margin: 0 auto;
    }

    .body {
        background: var(--palette-greyscale-100);
        display: flex;
        padding: var(--spacing-jb);
    }
</style>
