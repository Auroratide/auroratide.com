import { Category } from '../../../src/lib/posts/category'
import type { Post } from '../../../src/lib/posts/types'
import { GalleryItemForge } from '../../lib/design/gallery/GalleryItemForge'

type Options = {
    title?: string,
    publishedAt?: Date,
    category?: Category,
    content?: string,
}

export class PostForge {
    create(id: string, options: Options = {}): Post {
        return {
            id,
            title: options.title ?? id,
            category: options.category ?? Category.Career,
            tags: ['apple'],
            icon: 'apple',
            color: 'red',
            summary: 'A summary',
            longSummary: 'A long summary',
            publishedAt: options.publishedAt === undefined ? new Date('2021-01-01T00:00:00.000Z') : options.publishedAt,
            createdAt: new Date('2021-01-01T00:00:00.000Z'),
            content: options.content === undefined ? '<p>Content</p>' : options.content,
            links: [ {
                title: 'Link',
                href: 'https://auroratide.com',
            } ],
            gallery: [ new GalleryItemForge().create() ],
        }
    }
}
