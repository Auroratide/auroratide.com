let canvas: HTMLCanvasElement | undefined = undefined
let ctx: CanvasRenderingContext2D | null | undefined = undefined
let width = 0
let height = 0

function onResize() {
	if (canvas) {
		width = canvas.width = window.innerWidth;
  		height = canvas.height = window.innerHeight;
	}
}

export const Canvas = {
	get width() { return width },
	get height() { return height },
	get ctx() {
		if (!ctx) throw new Error("Tried to read canvas context before it was initialized")
		return ctx
	},

	setup(c: HTMLCanvasElement) {
		canvas = c
		ctx = canvas.getContext("2d")

		onResize()
		window.addEventListener("resize", onResize)
	},

	teardown() {
		window.removeEventListener("resize", onResize)
	},
} as const