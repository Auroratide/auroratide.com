export const ArticleCategory = {
	Accessibility: "Accessibility",
	AnythingElse: "Anything Else",
	Creativity: "Creativity",
	GameDev: "Game Dev",
	Projects: "Projects",
	Resources: "Resources",
	SoftwareEngineering: "Software Engineering",
	Storytelling: "Storytelling",
	WebDev: "Web Dev",
} as const

export type ArticleCategory = typeof ArticleCategory[keyof typeof ArticleCategory]