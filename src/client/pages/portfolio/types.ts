import type { Color } from '@/client/color'
import type { GalleryItem } from '@/client/Gallery'
import type { Link } from '@/client/LinkBar'

export type ImageSet = {
    readonly original: string
    readonly alt: string
}

export type PortfolioItem = {
    readonly id: string
    readonly title: string
    readonly category: string
    readonly tags: string[]
    readonly cover?: ImageSet
    readonly icon: string
    readonly color: Color | string
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
