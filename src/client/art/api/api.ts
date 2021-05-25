import type { ArtItem } from '../types'
import { FetchResourceApi } from '@/client/resources'

class Fetch extends FetchResourceApi<ArtItem> {
    constructor(fetch: (input: RequestInfo) => Promise<Response>) {
        super('art', fetch)
    }

    mapItem = (data: Record<string, any>) => ({
        id: data.id,
        title: data.title,
        category: data.category,
        tags: data.tags,
        image: data.image,
        color: data.color,
        summary: data.summary,
        longSummary: data.long_summary,
        publishedAt: data.published_at ? new Date(data.published_at) : null,
        createdAt: new Date(data.created_at),
    })
}

export default Fetch