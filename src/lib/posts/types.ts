import type { Color } from '../design/color'
import type { Link } from '../design/links/types'
import type { GalleryItem } from '../design/gallery/types'
import type { Category } from './category'

export type Post = {
    readonly id: string
    readonly title: string
    readonly category: Category
    readonly tags: string[]
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
