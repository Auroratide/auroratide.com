export class Image {
    private canvas: HTMLCanvasElement
    public readonly bitmap: ImageBitmap
    constructor(canvas: HTMLCanvasElement, bitmap: ImageBitmap) {
        this.canvas = canvas
        this.bitmap = bitmap
    }

    public get base64(): string {
        return this.canvas.toDataURL()
    }

    public async upload(source: ImageBitmapSource): Promise<Image> {
        const ctx = this.canvas.getContext('2d')
        const bitmap = await createImageBitmap(source)
        this.canvas.width = bitmap.width
        this.canvas.height = bitmap.height
        ctx.drawImage(bitmap, 0, 0)

        return new Image(this.canvas, bitmap)
    }
}
