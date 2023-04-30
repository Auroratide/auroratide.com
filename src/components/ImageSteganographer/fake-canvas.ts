/**
 * ImageBitmap does not have a public way of accessing the data that created it.
 * This cheap class bypasses that limitation.
 */
class ImageBitmapWithData extends ImageBitmap {
    public data: ImageData
    constructor(from: ImageData) {
        super()
        this.data = from
    }
}

/**
 * jest-canvas-mock, true to its name, does not emulate canvas behaviour. For my tests, I care that
 * the canvas fake behaves like it would on the browser, hence these implementations providing the
 * literal cheapest way to accomplish that.
 * 
 * This should, in the future, be replaced with a covalent-canvas or something.
 */
class CanvasWrapper {
    public canvas: HTMLCanvasElement
    private current?: ImageData

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        const ctx = this.canvas.getContext('2d');
        (ctx?.drawImage as jest.Mock).mockImplementation((img: ImageBitmapWithData) => this.current = img.data);
        (ctx?.getImageData as jest.Mock).mockImplementation(() => this.current);
        (ctx?.putImageData as jest.Mock).mockImplementation((img: ImageData) => this.current = img);
        (this.canvas.toDataURL as jest.Mock).mockImplementation(() => this.current ? this.current.data.join('') : '');
    }
}

export const fakeCanvas = (canvas: HTMLCanvasElement): CanvasWrapper => {
    (createImageBitmap as jest.Mock).mockImplementation((img: ImageData) => {
        if (img)
            return new ImageBitmapWithData(img)
        else
            throw new Error('Cannot create bitmap image from null')
    });
    return new CanvasWrapper(canvas)
}
