import { WhodokuWidget } from '.'
import { component } from '@/testing/component'
import { fireEvent, screen } from '@testing-library/svelte'

describe('WhodokuWidget', () => {
    const elements = {
        get firstEditableSquare() {
            return screen.getAllByTitle('Sudoku Square').filter((element: HTMLElement) => {
                return !(element as HTMLButtonElement).disabled
            })[0]
        },
    }

    test('incrementing a square', async () => {
        component(WhodokuWidget)
            .prop('assetspath', '')
            .render()

        await fireEvent.click(elements.firstEditableSquare)
        // TODO when I have internet, check how to make a custom expectation
        expect(elements.firstEditableSquare.querySelector('img')).toHaveAttribute('src', '/1.png')

        await fireEvent.click(elements.firstEditableSquare)
        expect(elements.firstEditableSquare.querySelector('img')).toHaveAttribute('src', '/2.png')
    })
})
