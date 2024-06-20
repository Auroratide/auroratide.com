<script lang="ts">
	import type { PageData } from "./$types"
	import { ArticleCard } from "$lib/NEW/auroratide/articles/ArticleCard"
	import { ListPage } from "$lib/NEW/design-system/pages"
	import { page } from "$app/stores"
	import { ArticleCategories } from "$lib/NEW/auroratide/articles/Category"

	export let data: PageData
</script>

<ListPage
	title="Posts"
	description="Articles and posts about web development, storytelling, and accessibility by Auroratide, Timothy Foster"
	pathname={$page.url.pathname}
	categories={ArticleCategories}
	items={data.values}
	columns={1}
>
	<ArticleCard slot="item" let:item value={item} />
</ListPage>
