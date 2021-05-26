import { Category } from '../category'
import type { ArtItem } from '../types'
import { ColorForge } from '@/client/color/testing/ColorForge'

type Options = {
    title?: string,
    image?: string,
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
            image: options.image ?? 'image.png',
            color: new ColorForge().palette('red'),
            background: new ColorForge().hex('000000'),
            summary: 'A summary',
            publishedAt: options.publishedAt === undefined ? new Date('2021-01-01T00:00:00.000Z') : options.publishedAt,
            createdAt: new Date('2021-01-01T00:00:00.000Z'),
            content: options.content === undefined ? '<p>Content</p>' : options.content,
        }
    }
}
