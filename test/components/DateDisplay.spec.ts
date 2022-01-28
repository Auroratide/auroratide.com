import { DateDisplay } from '../../src/components/DateDisplay'
import { component } from '../testing/component'
import { screen } from '@testing-library/svelte'

describe('DateDisplay', () => {
    test('rendering', () => {
        component(DateDisplay)
            .prop('date', new Date('2021-01-08T00:00:00.000Z'))
            .render()

        expect(screen.getByText('08 Jan 2021')).toBeInTheDocument()
    })

    test('invalid date', () => {
        expect(() => component(DateDisplay)
            .prop('date', new Date('nonsense'))
            .render()
        ).not.toThrow()
    })
})
