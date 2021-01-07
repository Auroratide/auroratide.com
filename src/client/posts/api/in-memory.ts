import type { PostsApi } from './PostsApi'
import type { Post } from '../types'

export default class InMemory implements PostsApi {
    private items: Post[]
    private promises: Promise<Post | Post[]>[]

    constructor(initial: Post[]) {
        this.items = initial
        this.promises = []
    }

    // for example, await act(() => api.finishAll())
    public finishAll() {
        return Promise.all(this.promises)
    }

    public one(id: string): Promise<Post> {
        const item = this.items.find(item => item.id === id)
        const promise = Promise.resolve(item ? item : null)
        this.promises.push(promise)

        return promise
    }

    public list(): Promise<Post[]> {
        const promise = Promise.resolve(this.items)
        this.promises.push(promise)

        return promise
    }
}
