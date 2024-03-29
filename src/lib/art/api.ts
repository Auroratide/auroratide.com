import type { ArtItem } from './types'
import { FetchResourceApi } from '../api/FetchResourceApi'

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
        cover: data.cover,
        dimensions: data.dimensions,
        color: data.color,
        background: data.background,
        summary: data.summary,
        alt: data.alt,
        longSummary: data.long_summary,
        publishedAt: data.published_at ? new Date(data.published_at) : undefined,
        createdAt: new Date(data.created_at),
        content: data.content,
    })
}

export default Fetch
