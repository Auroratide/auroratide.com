import type { DoodleMetadata } from "$lib/auroratide/doodles"
import cover from "./cover.webp"

export const metadata: DoodleMetadata = {
	id: "image-rendering",
	published: new Date("2021-08-07T12:00:00.000Z"),
	title: "Image Rendering Example",
	summary: "Upscaling pixelart on websites.",
	cover: {
		src: cover,
		alt: "Pixelart girl jumping for joy."
	},
	color: "blue",
}
