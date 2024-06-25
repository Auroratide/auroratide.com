<script lang="ts">
	import type { PageData } from './$types'
	import { HomePage } from '$lib/auroratide/HomePage'

	export let data: PageData
</script>

<HomePage posts={data.posts} stories={data.stories} />
