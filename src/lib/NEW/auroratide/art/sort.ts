export type Published = {
	publishedAt: Date
}

export const byPublishedAt = (a: Published, b: Published) =>
	b.publishedAt.getTime() - a.publishedAt.getTime()