export const PortfolioCategory = {
	App: "App",
	Game: "Game",
	Library: "Library",
	Tool: "Tool",
	Website: "Website",
} as const

export type PortfolioCategory = typeof PortfolioCategory[keyof typeof PortfolioCategory]