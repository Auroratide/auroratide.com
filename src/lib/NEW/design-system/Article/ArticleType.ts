export type ArticleType = {
	title: string,
	publishedAt: Date,
	content: string,
	links: {
		title: string,
		href: string,
		icon: string,
		color: string,
	}[],
}
