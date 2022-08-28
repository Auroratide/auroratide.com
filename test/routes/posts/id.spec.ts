import Page from '../../../src/routes/posts/[id]/+page.svelte'
import { PostForge } from '../../lib/posts/PostForge'
import { component } from '../../testing/component'
import { screen } from '@testing-library/svelte'
import type { Post } from '../../../src/lib/posts/types'
import { Category } from '../../../src/lib/posts/category'

describe('PostPage', () => {
    let forge: PostForge
    let posts: Record<string, Post>

    beforeEach(() => {
        forge = new PostForge()
    })

    test('posts now loaded', () => {
        posts = {
            apple: forge.create('apple', { title: 'Apple' })
        }

        component(Page)
            .prop('data', {
                item: posts.apple,
                all: Object.values(posts)
            })
            .render()

        expect(screen.getByText(posts.apple.title)).toBeInTheDocument()
    })

    test('related posts', async () => {
        posts = {
            apple: forge.create('apple', { category: Category.Career }),
            orange: forge.create('orange', { category: Category.Career }),
            banana: forge.create('banana', { category: Category.Career }),
            carrot: forge.create('carrot', { category: Category.Coding }),
        }

        component(Page)
            .prop('data', {
                item: posts.apple,
                all: Object.values(posts)
            })
            .render()

        expect(screen.queryByText(posts.orange.title)).toBeInTheDocument()
        expect(screen.queryByText(posts.banana.title)).toBeInTheDocument()
        expect(screen.queryByText(posts.carrot.title)).not.toBeInTheDocument()
    })
})
