export type ArtItem = {
    readonly id: string
    readonly title: string
    readonly category: string
    readonly tags: string[]
    readonly image: string
    readonly color: string
    readonly summary: string
    readonly publishedAt?: Date
    readonly createdAt: Date
}

export type Art = {
    readonly art: ArtItem[]
}
