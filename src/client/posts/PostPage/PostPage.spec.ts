import { PostPage } from '.'
import { InMemoryResourceApi } from '@/client/resources'
import { PostForge } from '../testing/PostForge'
import { component } from '@/testing/component'
import { screen, act } from '@testing-library/svelte'
import type { Post } from '../types'

describe('PostPage', () => {
    let forge: PostForge
    let posts: Record<string, Post>
    let api: InMemoryResourceApi<Post>

    beforeEach(() => {
        forge = new PostForge()
        posts = {
            apple: forge.create('apple', { title: 'Apple' })
        }
        api = new InMemoryResourceApi(Object.values(posts))
    })

    test('rendering', async () => {
        component(PostPage)
            .prop('api', api)
            .prop('id', posts.apple.id)
            .render()

        await act(() => api.finishAll())

        expect(screen.getByText(posts.apple.title)).toBeInTheDocument()
    })
})
