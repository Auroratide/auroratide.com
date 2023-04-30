export class Canvas {
    private canvas: HTMLCanvasElement
    private bitmap: ImageBitmap | null
    constructor(canvas: HTMLCanvasElement, bitmap: ImageBitmap | null) {
        this.canvas = canvas
        this.bitmap = bitmap
    }

    private get context(): CanvasRenderingContext2D {
        return this.canvas.getContext('2d')!
    }

    public get base64(): string {
        return this.canvas.toDataURL()
    }

    public get imageData(): ImageData {
        return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
    }

    public reset(): Canvas {
        this.context.drawImage(this.bitmap ?? new ImageBitmap(), 0, 0)
        return new Canvas(this.canvas, this.bitmap)
    }

    public write(data: ImageData): Canvas {
        this.context.putImageData(data, 0, 0)
        return new Canvas(this.canvas, this.bitmap)
    }

    public async upload(source: ImageBitmapSource): Promise<Canvas> {
        const ctx = this.canvas.getContext('2d')!
        const bitmap = await createImageBitmap(source)
        this.canvas.width = bitmap.width
        this.canvas.height = bitmap.height
        ctx.drawImage(bitmap, 0, 0)

        return new Canvas(this.canvas, bitmap)
    }
}
