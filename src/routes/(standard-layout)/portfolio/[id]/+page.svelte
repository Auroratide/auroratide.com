<script lang="ts">
	import type { PageData } from "./$types"
	import { PortfolioItem } from "$lib/auroratide/portfolio/PortfolioItem"
	import { page } from "$app/stores"

	export let data: PageData
</script>

<PortfolioItem value={data.value} />
