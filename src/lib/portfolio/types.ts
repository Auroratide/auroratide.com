import type { Category } from './category'
import type { Color } from '../design/color'
import type { GalleryItem } from '../design/gallery/types'
import type { Link } from '../design/links/types'

export type ImageSet = {
    readonly original: string
    readonly alt: string
}

export type PortfolioItem = {
    readonly id: string
    readonly title: string
    readonly category: Category
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
