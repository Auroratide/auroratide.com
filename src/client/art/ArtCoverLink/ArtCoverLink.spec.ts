import { ArtCoverLink } from '.'
import { component } from '@/testing/component'
import { ArtForge } from '../testing/ArtForge'
import { screen } from '@testing-library/svelte'

describe('ArtCoverLink', () => {
    test('rendering', () => {
        expect(() => component(ArtCoverLink)
            .prop('item', new ArtForge().create('fable'))
            .render()
        ).not.toThrow()
    })

    test('is pixelart', async () => {
        component(ArtCoverLink)
            .prop('item', new ArtForge().create('fable', { tags: ['pixelart'] }))
            .render()

        expect(getComputedStyle(screen.getByTestId('art-section')).imageRendering).toEqual('crisp-edges')
    })
})
