import { Category } from '../category'
import type { ArtItem } from '../types'

type Options = {
    title?: string,
    image?: string,
    publishedAt?: Date,
    category?: Category,
}

export class ArtForge {
    create(id: string, options: Options = {}): ArtItem {
        return {
            id,
            title: options.title ?? id,
            category: options.category ?? Category.Character,
            tags: ['apple'],
            image: options.image ?? 'image.png',
            color: 'red',
            summary: 'A summary',
            publishedAt: options.publishedAt === undefined ? new Date('2021-01-01T00:00:00.000Z') : options.publishedAt,
            createdAt: new Date('2021-01-01T00:00:00.000Z'),
        }
    }
}
