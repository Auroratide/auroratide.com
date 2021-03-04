import type { Post } from '../types'
import { FetchResourceApi } from '@/client/resources'

class Fetch extends FetchResourceApi<Post> {
    constructor(fetch: (input: RequestInfo) => Promise<Response>) {
        super('posts', fetch)
    }

    mapItem = (data: Record<string, any>) => ({
        id: data.id,
        title: data.title,
        category: data.category,
        icon: data.icon,
        color: data.color,
        summary: data.summary,
        publishedAt: new Date(data.published_at),
        createdAt: new Date(data.created_at),
        content: data.content,
        links: data.links,
        gallery: data.gallery,
    })
}

export default Fetch
