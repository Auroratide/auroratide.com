<script lang="ts">
    import type { Post } from './posts/types'

    import { Page } from './Page'
    import { Navigation } from './Navigation'
    import { Footer } from './Footer'
    import { PostPage } from './posts/PostPage'
    import { PostList } from './posts/PostList'
    import { AboutPage } from './AboutPage'
    import { LegalPage } from './LegalPage'
    import { PageNotFound } from './PageNotFound'
    import { ResourceProvider } from './ResourceProvider'
    import page from 'page'

    import type { SvelteComponent } from 'svelte'

    export let posts: SvelteStore<Post>

    let context: {
        component: typeof SvelteComponent,
        params: object
    } = {
        component: PostList,
        params: {},
    }

    page('/', () => context = { component: ResourceProvider, params: { store: posts, component: PostList } })
    page('/posts', () => context = { component: ResourceProvider, params: { store: posts, component: PostList } })
    page('/posts/:id', ({ params }) => context = { component: PostPage, params })
    page('/about', () => context = { component: AboutPage, params: {} })
    page('/legal', () => context = { component: LegalPage, params: {} })
    page('*', () => context = { component: PageNotFound, params: {} })

    page.start()
</script>

<Page>
    <div slot="header"><Navigation /></div>
    <svelte:component this={context.component} {...context.params} />
    <div slot="footer"><Footer /></div>
</Page>
