import type { ThemeName } from "$lib/design-system/Color"

export type DoodleMetadata = {
	id: string,
	published: Date,
	title: string,
	summary: string,
	cover: {
		src: string,
		alt: string,
	},
	color: ThemeName,
}
