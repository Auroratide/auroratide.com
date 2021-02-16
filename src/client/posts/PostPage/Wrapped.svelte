<script lang="ts">
    import { ResourceProvider } from '@/client/ResourceProvider'
    import PostPage from './PostPage.svelte'
    import type { Post } from '../types'
    import type { SvelteStore } from '@/client/resources'

    export let store: SvelteStore<Post>
    export let id: string
</script>

<ResourceProvider component={PostPage} store={store} id={id} />
