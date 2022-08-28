import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'
import Api from '$lib/art/api'

export const load: PageLoad = async ({ fetch, params }) => {
    const api = new Api(fetch)
    const [ item, all ] = await Promise.all([
        api.one(params.id).catch(() => null),
        api.list().catch(() => []),
    ])

    if (!item) {
        throw error(404, `Item with id ${params.id} does not exist`);
    }

    return {
        item,
        all,
    }
}
