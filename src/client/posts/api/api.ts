import type { PostsApi } from './PostsApi'
import type { Post } from '../types'

class Fetch implements PostsApi {
    private fetch: (input: RequestInfo) => Promise<Response>

    constructor(fetch) {
        this.fetch = fetch
    }

    public async one(id: string): Promise<Post> {
        return this.fetch(`/api/posts/${id}.json`)
            .then(res => res.json())
            .then(this.mapItem)
    }

    public async list(): Promise<Post[]> {
        return this.fetch('/api/posts/index.json')
            .then(res => res.json())
            .then(data => data.posts.map(this.mapItem))
    }

    private mapItem = (data: Record<string, any>) => ({
        id: data.id,
        title: data.title,
        category: data.category,
        icon: data.icon,
        color: data.color,
        summary: data.summary,
        publishedAt: new Date(data.published_at),
        createdAt: new Date(data.created_at),
        content: data.content,
    })
}

export default Fetch
