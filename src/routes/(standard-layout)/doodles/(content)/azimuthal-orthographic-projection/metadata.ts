import type { DoodleMetadata } from "$lib/auroratide/doodles"
import cover from "./cover.webp"

export const metadata: DoodleMetadata = {
	id: "azimuthal-orthographic-projection",
	published: new Date("2025-10-14T12:00:00.000Z"),
	title: "Azimuthal Orthographic Projection",
	summary: "Playing with a weird map projection",
	cover: {
		src: cover,
		alt: "Two web cards side by side."
	},
	color: "blue",
}
