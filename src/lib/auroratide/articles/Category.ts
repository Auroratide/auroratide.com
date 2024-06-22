export const ArticleCategory = {
	Accessibility: "Accessibility",
	AnythingElse: "Anything Else",
	Creativity: "Creativity",
	GameDev: "Game Dev",
	Projects: "Projects",
	SoftwareEngineering: "Software Engineering",
	Storytelling: "Storytelling",
	WebDev: "Web Dev",
} as const

export const ArticleCategories = Object.values(ArticleCategory)

export type ArticleCategory = typeof ArticleCategory[keyof typeof ArticleCategory]