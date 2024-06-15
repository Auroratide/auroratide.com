<script lang="ts">
	import type { PageData } from "./$types"
	import { ArticleCard } from "$lib/NEW/auroratide/articles/ArticleCard"
	import { TransparentList } from "$lib/NEW/design-system/TransparentList"

	export let data: PageData
</script>

<ul class="{TransparentList()}">
	{#each data.values as value (value.id)}
		<li>
			<ArticleCard {value} />
		</li>
	{/each}
</ul>
