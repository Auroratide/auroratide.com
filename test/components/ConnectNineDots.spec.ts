import { ConnectNineDots } from '../../src/components/ConnectNineDots'
import { component } from '../testing/component'
import { fireEvent, screen } from '@testing-library/svelte'

describe('ConnectNineDots', () => {
    const elements = {
        get puzzle() { return screen.getByTestId('line-area') },
        get status() { return screen.getByTestId('puzzle-area') },
        get lines() { return screen.queryAllByAltText('Line') },
        get lastClicked() { return screen.queryByTitle('Last Clicked') },
        get resetButton() { return screen.getByText('Reset') },
    }

    const actions = {
        click: (clientX: number, clientY: number) => fireEvent.click(elements.puzzle, { clientX, clientY }),
        reset: () => fireEvent.click(elements.resetButton),
    }

    beforeEach(() => {
        component(ConnectNineDots)
            .prop('assetspath', '')
            .render()
    })
    
    test('creating a line', async () => {
        await actions.click(1, 2)
        await actions.click(3, 4)

        expect(elements.lines).toHaveLength(1)

        const line = elements.lines[0]
        expect(line.style.left).toEqual('1px')
        expect(line.style.top).toEqual('2px')
        expect(parseFloat(line.style.width)).toBeCloseTo(2.83, 2)
        expect(line.style.transform).toContain('rotate(45deg)')
    })

    test('last clicked indicator', async () => {
        expect(elements.lastClicked).not.toBeInTheDocument()

        await actions.click(1, 2)
        expect(elements.lastClicked).toHaveStyle({
            left: '1px',
            top: '2px',
        })

        await actions.click(3, 4)
        expect(elements.lastClicked).toHaveStyle({
            left: '3px',
            top: '4px',
        })
    })

    test('failing the puzzle', async () => {
        await actions.click(1, 2)
        await actions.click(3, 4)
        await actions.click(5, 6)
        await actions.click(7, 8)
        await actions.click(9, 10)

        expect(elements.lines).toHaveLength(4)
        expect(elements.lastClicked).not.toBeInTheDocument()
        expect(elements.status).toHaveClass('failure')

        // Clicking again resets the puzzle
        await actions.click(11, 12)
        expect(elements.lines).toHaveLength(0)
        expect(elements.status).not.toHaveClass('failure')

        await actions.click(13, 14)
        await actions.click(15, 16)
        expect(elements.lines).toHaveLength(1)
    })

    test('resetting the puzzle', async () => {
        await actions.click(1, 2)
        await actions.click(3, 4)
        await actions.click(5, 6)

        expect(elements.lines).toHaveLength(2)
        expect(elements.lastClicked).toBeInTheDocument()

        await actions.reset()

        expect(elements.lines).toHaveLength(0)
        expect(elements.lastClicked).not.toBeInTheDocument()
    })
})
