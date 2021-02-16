import { PostPage } from '.'
import { InMemoryResource } from '@/client/resources'
import { PostForge } from '../testing/PostForge'
import { component } from '@/testing/component'
import { screen } from '@testing-library/svelte'
import type { Post } from '../types'

describe('PostPage', () => {
    let forge: PostForge
    let posts: Record<string, Post>
    let resource: InMemoryResource<Post>

    beforeEach(() => {
        forge = new PostForge()
    })

    test('posts not loaded yet', () => {
        resource = new InMemoryResource(null)

        component(PostPage)
            .prop('id', 'does-not-matter')
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/finding/i)).toBeInTheDocument()
    })

    test('posts now loaded', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' })
        }
        resource = new InMemoryResource(Object.values(posts))

        component(PostPage)
            .prop('id', posts.apple.id)
            .prop('resource', resource)
            .render()

        expect(screen.getByText(posts.apple.title)).toBeInTheDocument()
    })

    test('post not found', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' })
        }
        resource = new InMemoryResource(Object.values(posts))

        component(PostPage)
            .prop('id', 'orange')
            .prop('resource', resource)
            .render()

        expect(screen.getByText(/not available/i)).toBeInTheDocument()
    })
})
