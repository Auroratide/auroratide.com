import { ImageSteganographer } from '.'
import { component } from '@/testing/component'
import { screen, fireEvent, act, cleanup } from '@testing-library/svelte'
import { fakeCanvas } from './fake-canvas'

describe('ImageSteganographer', () => {
    // simplistic, for testing
    const toBase64 = (data: ImageData) => data.data.join('')
    let images = {
        get original() {
            return new ImageData(new Uint8ClampedArray([
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0,
            ]), 2, 2)
        },
        get embeddedYes() {
            return new ImageData(new Uint8ClampedArray([
                1, 3, 2, 0,
                1, 1, 2, 0,
                1, 1, 1, 0,
                3, 0, 3, 0,
            ]), 2, 2)
        },
        get embeddedNo() {
            return new ImageData(new Uint8ClampedArray([
                1, 2, 3, 0,
                2, 1, 2, 0,
                3, 3, 0, 0,
                0, 0, 0, 0
            ]), 2, 2)
        },
    }
    
    const elements = {
        get uploadButton() { return  screen.getByLabelText('Select Image') },
        get messageArea(): HTMLTextAreaElement { return screen.getByLabelText('Message') as HTMLTextAreaElement },
        get encodeButton() { return screen.getByText('Encode') },
        get decodeButton() { return screen.getByText('Decode') },
        get image() { return screen.getByAltText('Steganography') },
    }

    const actions = {
        uploadImage: (file: ImageData) => act(() => fireEvent.change(elements.uploadButton, {
            target: {
                files: [file]
            }
        })),
        changeMessage: (text: string) => fireEvent.input(elements.messageArea, {
            target: {
                value: text
            }
        }),
        encode: () => fireEvent.click(elements.encodeButton),
        decode: () => fireEvent.click(elements.decodeButton),
    }

    beforeEach(() => {
        component(ImageSteganographer).render()
        fakeCanvas(screen.getByTestId('canvas') as HTMLCanvasElement)
    })

    afterEach(cleanup)

    test('encoding a message', async () => {
        await actions.uploadImage(images.original)
        expect(elements.image).toHaveAttribute('src', toBase64(images.original))

        await actions.changeMessage('yes')
        await actions.encode()
        expect(elements.image).toHaveAttribute('src', toBase64(images.embeddedYes))
    })

    test('decoding a message', async () => {
        await actions.uploadImage(images.embeddedNo)
        expect(elements.image).toHaveAttribute('src', toBase64(images.embeddedNo))

        await actions.decode()
        expect(elements.messageArea).toHaveValue('no')
    })

    test('failing to upload', async () => {
        expect(screen.queryByText(/image could not be processed/i)).not.toBeInTheDocument()

        await actions.uploadImage(null)
        expect(screen.queryByText(/image could not be processed/i)).toBeInTheDocument()
    })

    test('not enough space for message in the image', async () => {
        await actions.uploadImage(images.original)
        expect(elements.image).toHaveAttribute('src', toBase64(images.original))

        await actions.changeMessage('this is way too long of a message')
        await actions.encode()
        expect(screen.queryByText(/too long/i)).toBeInTheDocument()
    })

    test('no message in the image', async () => {
        await actions.uploadImage(images.original)
        expect(elements.image).toHaveAttribute('src', toBase64(images.original))

        await actions.decode()
        expect(screen.queryByText(/no message/i)).toBeInTheDocument()
    })
})
