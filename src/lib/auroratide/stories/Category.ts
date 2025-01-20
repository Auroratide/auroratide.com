export const StoryCategory = {
	Romance: "Romance",
	Scifi: "Scifi",
} as const

export const StoryCategories = Object.values(StoryCategory)

export type StoryCategory = typeof StoryCategory[keyof typeof StoryCategory]