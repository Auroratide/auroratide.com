export const ReadingCategory = {
	Art: "Art",
	ArtificialIntelligence: "Artificial Intelligence",
	Psychology: "Psychology",
} as const

export const ReadingCategories = Object.values(ReadingCategory)

export type ReadingCategory = typeof ReadingCategory[keyof typeof ReadingCategory]