<script lang="ts">
	import type { PageData } from "./$types"
	import { Article } from "$lib/auroratide/articles/Article"

	export let data: PageData
</script>

<Article value={data.value} />
