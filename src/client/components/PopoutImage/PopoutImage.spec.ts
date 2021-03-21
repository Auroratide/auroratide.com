import { PopoutImage } from '.'
import { component } from '@/testing/component'
import { screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/svelte'

describe('PopoutImage', () => {
    const elements = {
        get image() { return screen.getByAltText('alternative text') },
        get cover() { return screen.queryByTestId('popped-out') },
    }

    test('rendering', async () => {
        component(PopoutImage)
            .prop('src', '/image.png')
            .prop('alt', 'alternative text')
            .render()

        expect(elements.cover).not.toBeInTheDocument()

        await fireEvent.click(elements.image)
        expect(elements.cover).toBeInTheDocument()

        await fireEvent.click(elements.cover)
        await waitForElementToBeRemoved(() => elements.cover)
        expect(elements.cover).not.toBeInTheDocument()
    })
})
