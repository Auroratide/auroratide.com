import { SlideShow } from '.'
import { component } from '@/testing/component'
import { screen, fireEvent } from '@testing-library/svelte'
import './toBeShowing'

describe('SlideShow', () => {
    const img = (alt: string): HTMLImageElement => {
        const elem = document.createElement('img') as HTMLImageElement
        elem.alt = alt
        return elem
    }

    const elements = {
        get nextButton() { return  screen.getByText('Next') },
        get prevButton() { return  screen.getByText('Prev') },
    }

    const actions = {
        next: () => fireEvent.click(elements.nextButton),
        prev: () => fireEvent.click(elements.prevButton),
    }

    test('next slide', async () => {
        const slide1 = img('1')
        const slide2 = img('2')
        const slide3 = img('3')

        component(SlideShow)
            .prop('width', '1px')
            .prop('height', '1px')
            .slot([slide1, slide2, slide3])
            .render()

        expect(screen.queryByAltText(slide1.alt)).toBeShowing()
        expect(screen.queryByAltText(slide2.alt)).not.toBeShowing()
        expect(screen.queryByAltText(slide3.alt)).not.toBeShowing()

        await actions.next()
        expect(screen.queryByAltText(slide1.alt)).not.toBeShowing()
        expect(screen.queryByAltText(slide2.alt)).toBeShowing()
        expect(screen.queryByAltText(slide3.alt)).not.toBeShowing()

        await actions.next()
        expect(screen.queryByAltText(slide1.alt)).not.toBeShowing()
        expect(screen.queryByAltText(slide2.alt)).not.toBeShowing()
        expect(screen.queryByAltText(slide3.alt)).toBeShowing()

        await actions.next()
        expect(screen.queryByAltText(slide1.alt)).toBeShowing()
        expect(screen.queryByAltText(slide2.alt)).not.toBeShowing()
        expect(screen.queryByAltText(slide3.alt)).not.toBeShowing()
    })

    test('prev slide', async () => {
        const slide1 = img('1')
        const slide2 = img('2')
        const slide3 = img('3')

        component(SlideShow)
            .prop('width', '1px')
            .prop('height', '1px')
            .slot([slide1, slide2, slide3])
            .render()

        expect(screen.queryByAltText(slide1.alt)).toBeShowing()
        expect(screen.queryByAltText(slide2.alt)).not.toBeShowing()
        expect(screen.queryByAltText(slide3.alt)).not.toBeShowing()

        await actions.prev()
        expect(screen.queryByAltText(slide1.alt)).not.toBeShowing()
        expect(screen.queryByAltText(slide2.alt)).not.toBeShowing()
        expect(screen.queryByAltText(slide3.alt)).toBeShowing()

        await actions.prev()
        expect(screen.queryByAltText(slide1.alt)).not.toBeShowing()
        expect(screen.queryByAltText(slide2.alt)).toBeShowing()
        expect(screen.queryByAltText(slide3.alt)).not.toBeShowing()

        await actions.prev()
        expect(screen.queryByAltText(slide1.alt)).toBeShowing()
        expect(screen.queryByAltText(slide2.alt)).not.toBeShowing()
        expect(screen.queryByAltText(slide3.alt)).not.toBeShowing()
    })
})
