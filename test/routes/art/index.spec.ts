import List from '../../../src/routes/art/index.svelte'
import { component } from '../../testing/component'
import { ArtForge } from '../../lib/art/ArtForge'
import { screen } from '@testing-library/svelte'
import type { ArtItem } from '../../../src/lib/art/types'

describe('ArtList', () => {
    let forge: ArtForge
    let items: Record<string, ArtItem>

    beforeEach(() => {
        forge = new ArtForge()
    })

    test('posts loaded', () => {
        items = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('orange', { title: 'Orange' }),
        }

        component(List)
            .prop('all', Object.values(items))
            .render()

        expect(screen.getByText(items.apple.title)).toBeInTheDocument()
        expect(screen.getByText(items.orange.title)).toBeInTheDocument()
    })

    test('unpublished post', () => {
        items = {
            apple: forge.create('apple', { title: 'Apple' }),
            orange: forge.create('unpublished', { title: 'Orange', publishedAt: null }),
        }

        component(List)
            .prop('all', Object.values(items))
            .render()

        expect(screen.queryByText(items.apple.title)).toBeInTheDocument()
        expect(screen.queryByText(items.orange.title)).not.toBeInTheDocument()
    })
})
