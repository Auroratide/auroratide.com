import type { PageLoad } from './$types'
import Api from '$lib/portfolio/api'

export const load: PageLoad = async ({ fetch }) => {
    const api = new Api(fetch)
    const all = await api.list()

    return {
        all,
    }
}
