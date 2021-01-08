export type Post = {
    readonly id: string
    readonly title: string
    readonly category: string
    readonly icon: string
    readonly color: string
    readonly summary: string
    readonly publishedAt: Date
    readonly createdAt: Date
    readonly content?: string
}

export type PostList = {
    readonly posts: Post[]
}
