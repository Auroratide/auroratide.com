import type { ArtType } from "./ArtType"

export function isPixelart(art: Pick<ArtType, "tags">): boolean {
	return art.tags.includes("pixelart")
}
