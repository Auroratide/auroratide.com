import { ResponsiveImage } from '.'
import { component } from '@/testing/component'
import { screen, act, fireEvent, waitForElementToBeRemoved } from '@testing-library/svelte'

describe('ResponsiveImage', () => {
    test('loading high res image', async () => {
        component(ResponsiveImage)
            .prop('src', '/png')
            .prop('alt', 'alt')
            .prop('ext', 'png')
            .prop('lowres', '120w')
            .prop('medres', '720w')
            .prop('highres', '1200w')
            .prop('fadeduration', 0)
            .render()
        
        expect(
            screen.queryAllByAltText('alt').map(it => (it as HTMLImageElement).src)
        ).toEqual(['http://localhost/png/1200w.png', 'http://localhost/png/120w.png'])

        await fireEvent.load(screen.getByTestId('highres'))
        await waitForElementToBeRemoved(() => screen.getByTestId('lowres'))

        expect(
            screen.queryAllByAltText('alt').map(it => (it as HTMLImageElement).src)
        ).toEqual(['http://localhost/png/1200w.png'])
    })
})
