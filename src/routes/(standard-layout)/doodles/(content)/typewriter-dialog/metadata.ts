import type { DoodleMetadata } from "$lib/auroratide/doodles"
import cover from "./cover.webp"

export const metadata: DoodleMetadata = {
	id: "typewriter-dialog",
	published: new Date("2021-09-20T12:00:00.000Z"),
	title: "Typewriter Dialog",
	summary: "Dialog, typed a letter at a time.",
	cover: {
		src: cover,
		alt: "Two people talking to each other via speech bubbles."
	},
	color: "red",
}
