import List from '../../../src/routes/posts/+page.svelte'
import { component } from '../../testing/component'
import { PostForge } from '../../lib/posts/PostForge'
import { screen } from '@testing-library/svelte'
import type { Post } from '../../../src/lib/posts/types'

describe('PostList', () => {
    let forge: PostForge
    let posts: Record<string, Post>

    beforeEach(() => {
        forge = new PostForge()
    })

    test('posts loaded', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('orange', { title: 'Orange' }),
        }

        component(List)
            .prop('data', {
                all: Object.values(posts)
            })
            .render()

        expect(screen.getByText(posts.apple.title)).toBeInTheDocument()
        expect(screen.getByText(posts.orange.title)).toBeInTheDocument()
    })

    test('unpublished post', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('unpublished', { title: 'Orange', publishedAt: null }),
        }

        component(List)
            .prop('data', {
                all: Object.values(posts)
            })
            .render()

        expect(screen.queryByText(posts.apple.title)).toBeInTheDocument()
        expect(screen.queryByText(posts.orange.title)).not.toBeInTheDocument()
    })
})
