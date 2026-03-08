import type { DoodleMetadata } from "$lib/auroratide/doodles"
import cover from "./cover.webp"

export const metadata: DoodleMetadata = {
	id: "pokemon-type-calculator",
	published: new Date("2022-01-01T12:00:00.000Z"),
	title: "Pokemon Type Calculator",
	summary: "What if Pokemon had more than two types?",
	cover: {
		src: cover,
		alt: "List of types and their relative vulnerabilities and resistances."
	},
	color: "green",
}
