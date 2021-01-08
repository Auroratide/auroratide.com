import type { Post } from '../types'

type Options = {
    title?: string
}

export class PostForge {
    create(id: string, options: Options = {}): Post {
        return {
            id,
            title: options.title ? options.title : id,
            category: 'Fruit',
            icon: 'apple',
            color: 'red',
            summary: 'A summary',
            publishedAt: new Date('2021-01-01T00:00:00.000Z'),
            createdAt: new Date('2021-01-01T00:00:00.000Z'),
            content: '<p>Content</p>',
        }
    }
}
