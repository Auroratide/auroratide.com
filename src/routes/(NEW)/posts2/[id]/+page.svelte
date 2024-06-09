<script lang="ts">
	import type { PageData } from "./$types"
	import { Article } from "$lib/NEW/design-system/Article"

	export let data: PageData
</script>

<Article value={data.value} />
