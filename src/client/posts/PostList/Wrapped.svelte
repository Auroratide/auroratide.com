<script lang="ts">
    import { ResourceProvider } from '@/client/ResourceProvider'
    import PostList from './PostList.svelte'
    import type { Post } from '../types'
    import type { SvelteStore } from '@/client/resources'

    export let store: SvelteStore<Post>
</script>

<ResourceProvider component={PostList} store={store} />
