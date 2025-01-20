<script lang="ts">
	import { chainingTypewriters } from "$lib/auroratide/ui/chaining-typewriters"
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	const onComplete = () => {
		dispatch("typed")
	}
</script>

<div use:chainingTypewriters={{ delay: 500 }} on:typed={onComplete}>
	<slot></slot>
</div>