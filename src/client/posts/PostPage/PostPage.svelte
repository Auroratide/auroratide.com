<script lang="ts">
    import { Container } from '@/client/Container'
    import { Loading } from '@/client/Loading'

    import type { PostsApi } from '../api'
    import { FetchApi } from '../api'
    import { DateDisplay } from '../DateDisplay'
    import { Header } from './Header'

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
                    <div class="published"><DateDisplay date={item.publishedAt} /></div>
                    {@html item.content}
                </section>
                <aside>
                    <h2 class="more-title">More on {item.category}</h2>
                </aside>
            </div>
        </article>
    {/await}
</Container>

<style>
    .body {
        background: var(--skin-color-content);
        padding: var(--sizing-spacing-md);
    }

    .published {
        margin-bottom: var(--sizing-spacing-p);
        font-weight: var(--typography-light);
    }

    @media screen and (min-width: 75rem) {
        .body {
            display: grid;
            grid-template-columns: 3fr 1fr;
            padding: var(--sizing-spacing-xl) calc(var(--sizing-spacing-xl) - var(--sizing-spacing-sm));
        }

        .body > * {
            padding: 0 var(--sizing-spacing-sm);
        }

        .more-title {
            font-weight: var(--typography-light);
            font-size: var(--sizing-font-sm);
            line-height: 1;
            margin-bottom: var(--sizing-spacing-p);
        }
    }
</style>
