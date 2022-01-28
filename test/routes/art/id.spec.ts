import Page from '../../../src/routes/art/[id].svelte'
import { ArtForge } from '../../lib/art/ArtForge'
import { component } from '../../testing/component'
import { screen } from '@testing-library/svelte'
import type { ArtItem } from '../../../src/lib/art/types'
import { Category } from '../../../src/lib/art/category'

describe('ArtPage', () => {
    let forge: ArtForge
    let items: Record<string, ArtItem>

    beforeEach(() => {
        forge = new ArtForge()
    })

    test('posts now loaded', () => {
        items = {
            apple: forge.create('apple', { title: 'Apple' })
        }

        component(Page)
            .prop('item', items.apple)
            .prop('all', Object.values(items))
            .render()

        expect(screen.getByText(items.apple.title)).toBeInTheDocument()
    })

    test('related posts', async () => {
        items = {
            apple: forge.create('apple', { category: Category.Animal }),
            orange: forge.create('orange', { category: Category.Animal }),
            banana: forge.create('banana', { category: Category.Animal }),
            carrot: forge.create('carrot', { category: Category.Character }),
        }

        component(Page)
            .prop('item', items.apple)
            .prop('all', Object.values(items))
            .render()

        expect(screen.queryByText(items.orange.title)).toBeInTheDocument()
        expect(screen.queryByText(items.banana.title)).toBeInTheDocument()
        expect(screen.queryByText(items.carrot.title)).not.toBeInTheDocument()
    })
})
