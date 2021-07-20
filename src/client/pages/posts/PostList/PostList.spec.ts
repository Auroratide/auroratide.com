import { PostList } from '.'
import { InMemoryResource } from '@/client/resources'
import { component } from '@/testing/component'
import { PostForge } from '../testing/PostForge'
import { screen, act } from '@testing-library/svelte'
import type { Post } from '../types'

describe('PostList', () => {
    let forge: PostForge
    let posts: Record<string, Post>
    let resource: InMemoryResource<Post>

    beforeEach(() => {
        forge = new PostForge()
    })

    test('posts not loaded yet', () => {
        resource = new InMemoryResource(null)

        component(PostList)
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/fetching/i)).toBeInTheDocument()
    })

    test('posts now loaded', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('orange', { title: 'Orange' }),
        }
        resource = new InMemoryResource(Object.values(posts))

        component(PostList)
            .prop('resource', resource)
            .render()

        expect(screen.getByText(posts.apple.title)).toBeInTheDocument()
        expect(screen.getByText(posts.orange.title)).toBeInTheDocument()
    })

    test('unpublished post', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('unpublished', { title: 'Orange', publishedAt: null }),
        }
        resource = new InMemoryResource(Object.values(posts))

        component(PostList)
            .prop('resource', resource)
            .render()

        expect(screen.queryByText(posts.apple.title)).toBeInTheDocument()
        expect(screen.queryByText(posts.orange.title)).not.toBeInTheDocument()
    })
})
