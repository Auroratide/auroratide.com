import type { PageLoad } from "./$types"
import { mdToSummarizedArticle, type SummarizedArticle } from "$lib/auroratide/articles"
import { mdToSummarizedStory, type SummarizedStory } from "$lib/auroratide/stories"
import { mdToSummarizedArt, type SummarizedArt } from "$lib/auroratide/art"
import { mdToSummarizedPortfolio, type SummarizedPortfolio } from "$lib/auroratide/portfolio"
import { byPublishedAt } from "$lib/auroratide/articles/sort"

export const load: PageLoad = async () => {
	const postModules = import.meta.glob("$content/posts/*/content.md")
	const storyModules = import.meta.glob("$content/stories/*/content.md")
	const artModules = import.meta.glob("$content/art/*/content.md")
	const portfolioModules = import.meta.glob("$content/portfolio/*/content.md")

	const posts: SummarizedArticle[] = await Promise.all(
		Object.values(postModules).map((imp) =>
			imp().then((module: any) => mdToSummarizedArticle(module.attributes))
		)
	)

	const stories: SummarizedStory[] = await Promise.all(
		Object.values(storyModules).map((imp) =>
			imp().then((module: any) => mdToSummarizedStory(module.attributes))
		)
	)

	const art: SummarizedArt[] = await Promise.all(
		Object.values(artModules).map((imp) =>
			imp().then((module: any) => mdToSummarizedArt(module.attributes))
		)
	)

	const portfolio: SummarizedPortfolio[] = await Promise.all(
		Object.values(portfolioModules).map((imp) =>
			imp().then((module: any) => mdToSummarizedPortfolio(module.attributes))
		)
	)

	return {
		posts: posts.toSorted(byPublishedAt).slice(0, 2),
		stories: stories.toSorted(byPublishedAt).slice(0, 2),
		arts: art.toSorted(byPublishedAt).slice(0, 2),
		portfolio: portfolio.toSorted(byPublishedAt).slice(0, 2),
	}
}
