<script lang="ts">
	import type { PageData } from "./$types"
	import { ReadingCard } from "$lib/auroratide/reading/ReadingCard"
	import { ListPage } from "$lib/design-system/pages"
	import { page } from "$app/stores"
	import { ReadingCategories } from "$lib/auroratide/reading/Category"

	export let data: PageData
</script>

<ListPage
	title="Reading"
	description="List of things that I have read and summarized."
	pathname={$page.url.pathname}
	categories={ReadingCategories}
	items={data.values}
	columns={2}
>
	<ReadingCard slot="item" let:item value={item} />
</ListPage>
