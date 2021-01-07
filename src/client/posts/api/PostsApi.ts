import type { Post } from '../types'

export type PostsApi = {
    one: (id: string) => Promise<Post>
    list: () => Promise<Post[]>
}
