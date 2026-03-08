<script lang="ts">
	import type { PageData } from "./$types"
	import { ListPage } from "$lib/design-system/pages"
	import { page } from "$app/state"
	import { DoodleCard } from "$lib/auroratide/doodles"

	export let data: PageData
</script>

<ListPage
	title="Doodles"
	description="Random things made by Auroratide, Timothy Foster."
	pathname={page.url.pathname}
	items={data.values}
	columns={2}
>
	<DoodleCard slot="item" let:item value={item} />
</ListPage>
