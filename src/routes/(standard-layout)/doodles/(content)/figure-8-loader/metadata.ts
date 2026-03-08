import type { DoodleMetadata } from "$lib/auroratide/doodles"
import cover from "./cover.webp"

export const metadata: DoodleMetadata = {
	id: "figure-8-loader",
	published: new Date("2021-09-15T12:00:00.000Z"),
	title: "Figure 8 Loader",
	summary: "An unconventional dot-loader.",
	cover: {
		src: cover,
		alt: "Three dots."
	},
	color: "blue",
}
