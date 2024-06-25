import type { PageLoad } from "./$types"
import { mdToSummarizedArticle, type SummarizedArticle } from "$lib/auroratide/articles"
import { byPublishedAt } from "$lib/auroratide/articles/sort"
import { mdToSummarizedStory, type SummarizedStory } from "$lib/auroratide/stories"

export const load: PageLoad = async () => {
	const postModules = import.meta.glob("$content/posts/*/content.md")
	const storyModules = import.meta.glob("$content/stories/*/content.md")

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

	return {
		posts: posts.toSorted(byPublishedAt),
		stories: stories.toSorted(byPublishedAt),
	}
}
