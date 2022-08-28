import type { PageLoad } from './$types'
import PostsApi from '$lib/posts/api'

export const load: PageLoad = async ({ fetch }) => {
    const api = new PostsApi(fetch)
    const all = await api.list()

    return {
        all,
    }
}
