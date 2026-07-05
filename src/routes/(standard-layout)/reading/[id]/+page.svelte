<script lang="ts">
	import type { PageData } from "./$types"
	import { Reading } from "$lib/auroratide/reading/Reading"

	export let data: PageData
</script>

<Reading value={data.value} />
