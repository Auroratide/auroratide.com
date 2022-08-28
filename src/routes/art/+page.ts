import type { PageLoad } from './$types'
import Api from '$lib/art/api'

export const load: PageLoad = async ({ fetch, params }) => {
    const api = new Api(fetch)
    const all = await api.list()

    return {
        all,
    }
}
