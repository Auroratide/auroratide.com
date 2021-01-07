import type { PostsApi } from './PostsApi'
import type { Post } from '../types'

export default class InMemory implements PostsApi {
    private items: Post[]

    constructor(initial: Post[]) {
        this.items = initial
    }

    public async one(id: string): Promise<Post> {
        const item = this.items.find(item => item.id === id)
        return item ? item : null
    }

    public async list(): Promise<Post[]> {
        return this.items
    }
}
