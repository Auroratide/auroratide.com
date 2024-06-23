<script lang="ts">
	import type { PageData } from './$types'
	import PostsList from './(NEW)/posts/+page.svelte'
	import { HomePage } from '$lib/auroratide/HomePage'

	export let data: PageData
</script>

<HomePage posts={data.values} />

<!-- <PostsList {data} /> -->
