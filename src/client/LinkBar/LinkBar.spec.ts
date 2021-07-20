import { LinkBar } from '.'
import { LinkForge } from './testing/LinkForge'
import { component } from '@/testing/component'

describe('LinkBar', () => {
    test('rendering', () => {
        const link = new LinkForge().create()

        expect(() => component(LinkBar)
            .prop('links', [link])
            .render()
        ).not.toThrow()
    })
})
