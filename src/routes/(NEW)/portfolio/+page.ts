import type { PageLoad } from "./$types"
import { byOrder } from "$lib/NEW/auroratide/portfolio/sort"
import { mdToSummarizedPortfolio, type SummarizedPortfolio } from "$lib/NEW/auroratide/portfolio/PortfolioType"

export const load: PageLoad = async () => {
	const modules = import.meta.glob("$content/portfolio/*/content.md")

	const values: SummarizedPortfolio[] = await Promise.all(
		Object.values(modules).map((imp) =>
			imp().then((module: any) => mdToSummarizedPortfolio(module.attributes))
		)
	)

	return {
		values: values.toSorted(byOrder),
	}
}
