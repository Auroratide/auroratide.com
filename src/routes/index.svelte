<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit'
    import PostsApi from '$lib/posts/api'

    export const load: Load = async ({ fetch, params }) => {
        const api = new PostsApi(fetch)
        const all = await api.list()

        return {
            props: {
                all,
            },
        }
    }
</script>

<script lang="ts">
    import PostsList from './posts/index.svelte'
    import type { Post } from '$lib/posts/types'

    export let all: Post[]
</script>

<PostsList {all} />
