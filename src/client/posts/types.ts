export type Post = {
    readonly id: string
    readonly title: string
    readonly category: string
    readonly icon: string
    readonly color: string
    readonly summary: string
    readonly published_at: string
    readonly created_at: string
    readonly content?: string
}

export type PostList = {
    readonly posts: Post[]
}
