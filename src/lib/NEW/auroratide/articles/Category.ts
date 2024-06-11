export const ArticleCategory = {
	AnythingElse: "Anything Else",
	Creativity: "Creativity",
	GameDev: "Game Dev",
	Projects: "Projects",
	SoftwareEngineering: "Software Engineering",
	WebDev: "Web Dev",
} as const

export type ArticleCategory = typeof ArticleCategory[keyof typeof ArticleCategory]