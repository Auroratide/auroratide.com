import type { Color } from '@/client/color'
import type { Category } from './category'
import type { GalleryItem } from '@/client/Gallery'

export type PostLink = {
    readonly title: string
    readonly href: string
    readonly icon?: string
    readonly color?: Color | string
}

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
    readonly links?: PostLink[]
    readonly gallery?: GalleryItem[]
}

export type PostList = {
    readonly posts: Post[]
}
