<script lang="ts">
	import { PageTitle } from "../PageTitle"

	export let title: string
</script>

<header class="medium-space-after">
	<PageTitle>{title}</PageTitle>
</header>
<slot name="content"></slot>

<style>
	.medium-space-after {
		min-height: 5em;
		margin-block-end: 1em;
	}
</style>
