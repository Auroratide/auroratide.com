import type { DoodleMetadata } from "$lib/auroratide/doodles"
import cover from "./cover.webp"

export const metadata: DoodleMetadata = {
	id: "dynamic-lighting",
	published: new Date("2023-01-01T12:00:00.000Z"),
	title: "Dynamic Lighting",
	summary: "Lighting a website somehow?",
	cover: {
		src: cover,
		alt: "Scene lit by cyan and magenta lights."
	},
	color: "purple",
}
