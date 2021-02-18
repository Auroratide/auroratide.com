<script lang="ts">
    import type { Post } from './posts/types'

    import { Page } from './Page'
    import { Navigation } from './Navigation'
    import { Footer } from './Footer'
    import { PostPage } from './posts/PostPage'
    import { PostList } from './posts/PostList'
    import { AboutPage } from './AboutPage'
    import { LegalPage } from './LegalPage'
    import { WhodokuPage } from './WhodokuPage'
    import { PageNotFound } from './PageNotFound'
    import { ResourceProvider } from './ResourceProvider'
    import { navigation } from './routes'
    import { scroll } from './scroll'
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

    page('*', (_, next) => {
        scroll.toTop()
        next()
    })
    page('/', () => context = { component: ResourceProvider, params: { store: posts, component: PostList } })
    page(navigation.Posts.link, () => context = { component: ResourceProvider, params: { component: PostList, store: posts } })
    page(`${navigation.Posts.link}/:id`, ({ params }) => context = { component: ResourceProvider, params: { component: PostPage, store: posts, id: params.id } })
    page(navigation.About.link, () => context = { component: AboutPage, params: {} })
    page(navigation.Legal.link, () => context = { component: LegalPage, params: {} })
    page(navigation.Whodoku.link, () => context = { component: WhodokuPage, params: {} })
    page('*', () => context = { component: PageNotFound, params: {} })

    page.start()
</script>

<Page>
    <div slot="header"><Navigation /></div>
    <svelte:component this={context.component} {...context.params} />
    <div slot="footer"><Footer /></div>
</Page>
