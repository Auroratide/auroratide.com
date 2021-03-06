<script lang="ts">
    import type { Post } from './posts/types'
    import type { PortfolioItem } from './portfolio/types'
    import type { ArtItem } from './art/types'

    import { Page } from './Page'
    import { Navigation } from './Navigation'
    import { Footer } from './Footer'

    import { PostPage } from './posts/PostPage'
    import { PostList } from './posts/PostList'
    import { PortfolioPage } from './portfolio/PortfolioPage'
    import { PortfolioList } from './portfolio/PortfolioList'
    import { ArtPage } from './art/ArtPage'
    import { ArtList } from './art/ArtList'

    import { AboutPage } from './AboutPage'
    import { LegalPage } from './LegalPage'
    import { WhodokuPage } from './WhodokuPage'
    import { Styleguide } from './Styleguide'
    import { PageNotFound } from './PageNotFound'
    import { ResourceProvider } from './ResourceProvider'
    import { navigation } from './routes'
    import { scroll } from './scroll'
    import page from 'page'

    import type { SvelteComponent } from 'svelte'

    export let posts: SvelteStore<Post>
    export let portfolio: SvelteStore<PortfolioItem>
    export let art: SvelteStore<ArtItem>

    let context: {
        component: typeof SvelteComponent,
        params: object
    } = {
        component: PostList,
        params: {},
    }

    page('*', (ctx, next) => {
        if (!ctx.state.visited) {
            scroll.toTop()
            ctx.state.visited = true
            setTimeout(() => ctx.save(), 0)
        }

        next()
    })
    page('/', () => context = { component: ResourceProvider, params: { store: posts, component: PostList } })

    page(navigation.Posts.link, () => context = { component: ResourceProvider, params: { component: PostList, store: posts } })
    page(`${navigation.Posts.link}/:id`, ({ params }) => context = { component: ResourceProvider, params: { component: PostPage, store: posts, id: params.id } })

    page(navigation.Portfolio.link, () => context = { component: ResourceProvider, params: { component: PortfolioList, store: portfolio } })
    page(`${navigation.Portfolio.link}/:id`, ({ params }) => context = { component: ResourceProvider, params: { component: PortfolioPage, store: portfolio, id: params.id } })

    page(navigation.Art.link, () => context = { component: ResourceProvider, params: { component: ArtList, store: art } })
    page(`${navigation.Art.link}/:id`, ({ params }) => context = { component: ResourceProvider, params: { component: ArtPage, store: art, id: params.id } })

    page(navigation.About.link, () => context = { component: AboutPage, params: {} })
    page(navigation.Legal.link, () => context = { component: LegalPage, params: {} })
    page(navigation.Whodoku.link, () => context = { component: WhodokuPage, params: {} })
    page(navigation.Styleguide.link, () => context = { component: Styleguide, params: {} })
    
    page('*', () => context = { component: PageNotFound, params: {} })

    page.start()
</script>

<Page>
    <div slot="header"><Navigation /></div>
    <svelte:component this={context.component} {...context.params} />
    <div slot="footer"><Footer /></div>
</Page>
