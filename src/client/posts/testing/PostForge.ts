import type { Post } from '../types'

export class PostForge {
    create(id: string): Post {
        return {
            id,
            title: id,
            category: 'Fruit',
            icon: 'apple',
            color: 'red',
            summary: 'A summary',
            published_at: '2021-01-01T00:00:00.000Z',
            created_at: '2021-01-01T00:00:00.000Z',
            content: '<p>Content</p>',
        }
    }
}
