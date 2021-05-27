import type { Color } from '@/client/color'

export type ImageSet = {
    readonly original: string
    readonly colorscape: string
}

export type Dimensions = {
    readonly width: number
    readonly height: number
}

export type ArtItem = {
    readonly id: string
    readonly title: string
    readonly category: string
    readonly tags: string[]
    readonly image: ImageSet
    readonly cover: ImageSet
    readonly dimensions: Dimensions
    readonly color: Color
    readonly background: Color
    readonly summary: string
    readonly publishedAt?: Date
    readonly createdAt: Date
    readonly content?: string
}

export type Art = {
    readonly art: ArtItem[]
}
