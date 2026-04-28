import type { DoodleMetadata } from "$lib/auroratide/doodles"
import cover from "./cover.webp"

export const metadata: DoodleMetadata = {
	id: "keytone",
	published: new Date("2026-04-28T12:00:00.000Z"),
	title: "Keytone",
	summary: "Turning your keyboard into music.",
	cover: {
		src: cover,
		alt: "A keyboard arrangement showing the names of notes on each key."
	},
	color: "green",
}
