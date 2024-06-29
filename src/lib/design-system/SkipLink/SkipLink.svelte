<script lang="ts">
	import { Button } from "../Button"

	export let href: string

	const blur = (e: Event) => (e.target as HTMLElement).blur()
</script>

<div class="skip-link">
	<Button {href} on:click={blur}>
		<slot>Skip to Content</slot>
	</Button>
</div>

<style>
	.skip-link {
		position: absolute;
		left: -9999px;
		font-size: 1.125em;
	}

	.skip-link:focus-within {
		position: fixed;
		inset: 0;
		z-index: var(--z-dialog);
		background-color: oklch(0% 0 0 / 0.5);
		padding: 1em;
	}
</style>
