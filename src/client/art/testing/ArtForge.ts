import { Category } from '../category'
import type { ArtItem, ImageSet } from '../types'
import { ColorForge } from '@/client/color/testing/ColorForge'

type Options = {
    title?: string,
    image?: ImageSet,
    publishedAt?: Date,
    category?: Category,
    content?: string,
}

export class ArtForge {
    create(id: string, options: Options = {}): ArtItem {
        return {
            id,
            title: options.title ?? id,
            category: options.category ?? Category.Character,
            tags: ['apple'],
            image: options.image ?? {
                original: 'image.png',
                colorscape: 'colorscape.svg'
            },
            cover: options.image ?? {
                original: 'cover.png',
                colorscape: 'cover.svg'
            },
            color: new ColorForge().palette('red'),
            background: new ColorForge().hex('000000'),
            summary: 'A summary',
            publishedAt: options.publishedAt === undefined ? new Date('2021-01-01T00:00:00.000Z') : options.publishedAt,
            createdAt: new Date('2021-01-01T00:00:00.000Z'),
            content: options.content === undefined ? '<p>Content</p>' : options.content,
        }
    }
}
