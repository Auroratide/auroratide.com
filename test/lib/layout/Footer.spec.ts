import Footer from '../../../src/lib/layout/Footer.svelte'
import { component } from '../../testing/component'
import { screen } from '@testing-library/svelte'

describe('Footer', () => {
    test('name', () => {
        component(Footer).render()

        expect(screen.getByText(/Timothy Foster/)).toBeInTheDocument()
    })

    test('copyright', () => {
        jest.useFakeTimers('modern').setSystemTime(new Date("2016-06-14T00:00:00.000Z"))
        component(Footer).render()

        expect(screen.getByText(/© 2016/)).toBeInTheDocument()
    })
})
