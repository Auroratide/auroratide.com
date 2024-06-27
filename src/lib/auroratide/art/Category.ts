export const ArtCategory = {
	AnythingElse: "Anything Else",
	Character: "Character",
	Scenery: "Scenery",
} as const

export const ArtCategories = Object.values(ArtCategory)

export type ArtCategory = typeof ArtCategory[keyof typeof ArtCategory]