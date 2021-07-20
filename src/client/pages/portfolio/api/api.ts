import type { PortfolioItem } from '../types'
import { FetchResourceApi } from '@/client/resources'

class Fetch extends FetchResourceApi<PortfolioItem> {
    constructor(fetch: (input: RequestInfo) => Promise<Response>) {
        super('portfolio', fetch)
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
        publishedAt: data.published_at ? new Date(data.published_at) : null,
        createdAt: new Date(data.created_at),
        content: data.content,
        links: data.links,
        gallery: data.gallery,
    })
}

export default Fetch
