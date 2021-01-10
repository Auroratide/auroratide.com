<script lang="ts">
    import { Container } from '@/client/Container'
    import { Loading } from '@/client/Loading'

    import type { PostsApi } from '../api'
    import { FetchApi } from '../api'

    import { DateDisplay } from '../DateDisplay'

    export let api: PostsApi = new FetchApi(fetch.bind(window))

    let promise = api.list()
</script>

<Container>
    {#await promise}
        <Loading text="Finding posts..." />
    {:then items}
        <div class="item-holder">
            {#each items as item}
                <a class="post-item" href={`/posts/${item.id}`} style={`--article-color: var(--palette-${item.color});`}>
                    <article>
                        <section>
                            <h1>{item.title}</h1>
                            <div class="byline">
                                <DateDisplay date={item.publishedAt} />
                                <span class="bullet">&bull;</span>
                                <span>{item.category}</span>
                            </div>
                            <p class="summary">{item.summary}</p>
                        </section>
                        <aside>
                            <div class="circle">
                                <vector-icon icon={item.icon}></vector-icon>
                            </div>
                        </aside>
                    </article>
                </a>
            {/each}
        </div>
    {/await}
</Container>

<style>
    .item-holder {
        padding: var(--sizing-spacing-xl);
    }

    .post-item {
        display: block;
        margin: 0 0 var(--sizing-spacing-xl);
        padding: 0;
        border-left: 0 solid var(--article-color);
        width: 100%;
        transition: border-left-width var(--transition-quick), width var(--transition-quick);
    }

    .post-item:hover {
        border-left-width: var(--sizing-border-lg);
        width: calc(100% + var(--sizing-border-lg));
    }

    a.post-item {
        color: var(--skin-color-text);
    }

    a.post-item:hover {
        text-decoration: none;
    }
    
    .post-item article {
        display: flex;
        background: var(--skin-color-content);
    }

    .post-item article section {
        flex: 1;
        padding: var(--sizing-spacing-md);
    }

    .post-item h1 {
        font-size: var(--sizing-font-md);
        font-weight: var(--typography-bold);
        margin-bottom: var(--sizing-spacing-xs);
    }

    .post-item .byline {
        display: block;
        opacity: 0.5;
        margin-bottom: var(--sizing-spacing-sm);
        font-size: 87.5%;
    }

    .post-item .bullet {
        display: inline-block;
        margin: var(--sizing-spacing-xs);
    }

    .post-item .summary {
        margin-bottom: 0;
    }

    .post-item aside {
        overflow: hidden;
        font-size: calc(4 * var(--sizing-font-xs));
    }

    .circle {
        background: var(--article-color);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.25em;
        height: 2.25em;
        border-radius: 1.125em;
        color: var(--palette-greyscale-100);
        position: relative;
        bottom: 0.375em;
        left: 0.375em;
    }
</style>
