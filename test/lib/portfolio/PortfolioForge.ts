import { Category } from '../../../src/lib/portfolio/category'
import type { PortfolioItem } from '../../../src/lib/portfolio/types'
import { GalleryItemForge } from '../design/gallery/GalleryItemForge'

type Options = {
    title?: string,
    publishedAt?: Date,
    category?: Category,
    content?: string,
}

export class PortfolioForge {
    create(id: string, options: Options = {}): PortfolioItem {
        return {
            id,
            title: options.title ?? id,
            category: options.category ?? Category.Games,
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
