import { Page } from '.'
import { render } from '@testing-library/svelte'

describe('Page', () => {
    test('rendering', () => {
        expect(() => render(Page)).not.toThrow()
    })
})
