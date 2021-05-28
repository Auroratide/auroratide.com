import { ArtCoverLink } from '.'
import { component } from '@/testing/component'
import { ArtForge } from '../testing/ArtForge'

describe('ArtCoverLink', () => {
    test('rendering', () => {
        expect(() => component(ArtCoverLink)
            .prop('item', new ArtForge().create('fable'))
            .render()
        ).not.toThrow()
    })
})
