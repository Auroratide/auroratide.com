import { Category } from '../../../src/lib/art/category'
import type { ArtItem, ImageSet } from '../../../src/lib/art/types'
import { ColorForge } from '../color/ColorForge'

type Options = {
    title?: string,
    image?: ImageSet,
    publishedAt?: Date,
    category?: Category,
    content?: string,
    tags?: string[],
}

export class ArtForge {
    create(id: string, options: Options = {}): ArtItem {
        return {
            id,
            title: options.title ?? id,
            category: options.category ?? Category.Character,
            tags: options.tags ?? ['apple'],
            image: options.image ?? {
                original: 'image.png',
                colorscape: 'colorscape.svg'
            },
            cover: options.image ?? {
                original: 'cover.png',
                colorscape: 'cover.svg'
            },
            dimensions: {
                width: 1,
                height: 1,
            },
            color: new ColorForge().palette('red'),
            background: new ColorForge().hex('000000'),
            summary: 'A summary',
            alt: 'alt',
            publishedAt: options.publishedAt === undefined ? new Date('2021-01-01T00:00:00.000Z') : options.publishedAt,
            createdAt: new Date('2021-01-01T00:00:00.000Z'),
            content: options.content === undefined ? '<p>Content</p>' : options.content,
        }
    }
}
