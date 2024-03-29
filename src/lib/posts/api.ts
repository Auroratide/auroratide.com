import type { Post } from './types'
import { FetchResourceApi } from '../api/FetchResourceApi'

class Fetch extends FetchResourceApi<Post> {
    constructor(fetch: (input: RequestInfo) => Promise<Response>) {
        super('posts', fetch)
    }

    mapItem = (data: Record<string, any>) => ({
        id: data.id,
        title: data.title,
        category: data.category,
        tags: data.tags,
        icon: data.icon,
        color: data.color,
        summary: data.summary,
        longSummary: data.long_summary,
        publishedAt: data.published_at ? new Date(data.published_at) : undefined,
        createdAt: new Date(data.created_at),
        content: data.content,
        links: data.links,
        gallery: data.gallery,
    })
}

export default Fetch
