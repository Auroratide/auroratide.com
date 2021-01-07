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
            .then(data => ({
                id: data.id,
                title: data.title,
                category: data.category,
                icon: data.icon,
                color: data.color,
                summary: data.summary,
                published_at: data.published_at,
                created_at: data.created_at,
                content: data.content,
            }))
    }

    public async list(): Promise<Post[]> {
        return this.fetch('/api/posts/index.json')
            .then(res => res.json())
            .then(data => data.posts.map(item => ({
                id: item.id,
                title: item.title,
                category: item.category,
                icon: item.icon,
                color: item.color,
                summary: item.summary,
                published_at: item.published_at,
                created_at: item.created_at,
            })))
    }
}

export default Fetch
