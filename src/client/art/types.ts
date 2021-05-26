import type { Color } from '@/client/color'

export type ArtItem = {
    readonly id: string
    readonly title: string
    readonly category: string
    readonly tags: string[]
    readonly image: string
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
