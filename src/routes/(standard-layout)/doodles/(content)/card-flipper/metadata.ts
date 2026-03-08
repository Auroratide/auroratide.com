import type { DoodleMetadata } from "$lib/auroratide/doodles"
import cover from "./cover.webp"

export const metadata: DoodleMetadata = {
	id: "card-flipper",
	published: new Date("2024-02-19T12:00:00.000Z"),
	title: "Card Flipper",
	summary: "Better card flip animations.",
	cover: {
		src: cover,
		alt: "Two web cards side by side."
	},
	color: "yellow",
}
