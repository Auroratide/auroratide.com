export const ArticleCategory = {
	AnythingElse: "Anything Else",
	GameDev: "Game Dev",
	Projects: "Projects",
	SoftwareEngineering: "Software Engineering",
} as const

export type ArticleCategory = typeof ArticleCategory[keyof typeof ArticleCategory]