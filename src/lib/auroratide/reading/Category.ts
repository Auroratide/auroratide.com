export const ReadingCategory = {
	ArtificialIntelligence: "Artificial Intelligence",
} as const

export const ReadingCategories = Object.values(ReadingCategory)

export type ReadingCategory = typeof ReadingCategory[keyof typeof ReadingCategory]