<script lang="ts">
    import type { PostsApi } from '../api'
    import { FetchApi } from '../api'

    export let api: PostsApi = new FetchApi(fetch.bind(window))
    export let id: string

    let promise = api.one(id)
</script>

{#await promise}
    <p>...waiting</p>
{:then item}
    <article class="article" style={`--article-color: var(--palette-${item.color});`}>
        <header class="title">
            <vector-icon class="icon" icon={item.icon}></vector-icon>
            <h1>{item.title}</h1>
        </header>
        <div class="body">
            <section class="content">
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

    .title {
        position: relative;
        height: 16em;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background: var(--article-color);
        overflow: hidden;
    }

    .title h1 {
        position: relative;
        width: 100%;
        padding: 1em;
        color: var(--palette-greyscale-100);
        text-align: center;
        background: var(--palette-shade-033);
        margin: 0;
    }
    
    .title .icon {
        position: absolute;
        height: 1em;
        color: var(--palette-shade-033);
        font-size: 24em;
        align-self: center;
    }

    .body {
        background: var(--palette-greyscale-100);
        display: flex;
        padding: var(--spacing-jb);
    }
</style>
