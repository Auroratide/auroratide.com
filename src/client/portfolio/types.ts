export type Link = {
    readonly title: string
    readonly href: string
    readonly icon?: string
    readonly color?: string
}

export type GalleryItem = {
    readonly image: string
    readonly caption: string
}

export type PortfolioItem = {
    readonly id: string
    readonly title: string
    readonly category: string
    readonly tags: string[]
    readonly icon: string
    readonly color: string
    readonly summary: string
    readonly longSummary: string
    readonly publishedAt?: Date
    readonly createdAt: Date
    readonly content?: string
    readonly links?: Link[]
    readonly gallery?: GalleryItem[]
}

export type Portfolio = {
    readonly portfolio: PortfolioItem[]
}