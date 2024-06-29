<script lang="ts">
	import type { PageData } from "./$types"
	import { page } from "$app/stores"
	import { ArtItem } from "$lib/auroratide/art/ArtItem"

	export let data: PageData
</script>

<ArtItem value={data.value} />
