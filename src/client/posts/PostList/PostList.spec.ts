import { PostList } from '.'
import { InMemoryResourceApi } from '@/client/resources'
import { component } from '@/testing/component'
import { PostForge } from '../testing/PostForge'
import { screen, act } from '@testing-library/svelte'
import type { Post } from '../types'

describe('PostList', () => {
    let forge: PostForge
    let posts: Record<string, Post>
    let api: InMemoryResourceApi<Post>

    beforeEach(() => {
        forge = new PostForge()
        posts = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('orange', { title: 'Orange' }),
        }
        api = new InMemoryResourceApi(Object.values(posts))
    })

    test('rendering', async () => {
        component(PostList)
            .prop('api', api)
            .render()

        await act(() => api.finishAll())

        expect(screen.getByText(posts.apple.title)).toBeInTheDocument()
        expect(screen.getByText(posts.orange.title)).toBeInTheDocument()
    })
})
