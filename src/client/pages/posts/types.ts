import type { Color } from '@/client/color'
import type { Category } from './category'
import type { GalleryItem } from '@/client/Gallery'
import type { Link } from '@/client/LinkBar'

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

export type PostList = {
    readonly posts: Post[]
}
