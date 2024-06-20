<script lang="ts">
	import type { PageData } from "./$types"
	import { PortfolioCard } from "$lib/NEW/auroratide/portfolio/PortfolioCard"
	import { ListPage } from "$lib/NEW/design-system/pages"
	import { PortfolioCategories } from "$lib/NEW/auroratide/portfolio/Category"
	import { page } from "$app/stores"

	export let data: PageData
</script>

<ListPage
	title="Portfolio"
	description="Websites, games, tools, and libraries made by Auroratide, Timothy Foster."
	pathname={$page.url.pathname}
	categories={PortfolioCategories}
	items={data.values}
	columns={2}
>
	<PortfolioCard slot="item" let:item value={item} />
</ListPage>
