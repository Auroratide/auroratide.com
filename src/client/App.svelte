<script lang="ts">
    import { Page } from './Page'
    import { Navigation } from './Navigation'
    import { Footer } from './Footer'
    import { PostPage } from './posts/PostPage'
    import { PostList } from './posts/PostList'
    import { AboutPage } from './AboutPage'
    import { LegalPage } from './LegalPage'
    import page from 'page'

    let context = {
        component: PostList,
        params: {},
    }

    page('/', () => context = { component: PostList, params: {} })
    page('/posts', () => context = { component: PostList, params: {} })
    page('/posts/:id', ({ params }) => context = { component: PostPage, params })
    page('/about', () => context = { component: AboutPage, params: {} })
    page('/legal', () => context = { component: LegalPage, params: {} })

    page.start()
</script>

<Page>
    <div slot="header"><Navigation /></div>
    <svelte:component this={context.component} {...context.params} />
    <div slot="footer"><Footer /></div>
</Page>
