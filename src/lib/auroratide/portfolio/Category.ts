export const PortfolioCategory = {
	App: "App",
	Game: "Game",
	Library: "Library",
	Tool: "Tool",
	Website: "Website",
} as const

export const PortfolioCategories = Object.values(PortfolioCategory)

export type PortfolioCategory = typeof PortfolioCategory[keyof typeof PortfolioCategory]