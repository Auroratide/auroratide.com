<script lang="ts">
    import { Page } from './Page'
    import { PostPage } from './posts/PostPage'
    import { PostList } from './posts/PostList'
    import page from 'page'

    let context = {
        component: PostList,
        params: {},
    }

    page('/', () => context = { component: PostList, params: {} })
    page('/posts', () => context = { component: PostList, params: {} })
    page('/posts/:id', ({ params }) => context = { component: PostPage, params })

    page.start()
</script>

<Page>
    <svelte:component this={context.component} {...context.params} />
</Page>
