<script lang="ts">
	import { getContext } from "./context"

	type Props = {
		name: string,
	}; const {
		name,
	}: Props = $props()

	const {
		onPress,
		onRelease,
		toName,
	} = getContext()

	let active = $state(false)
	const makeActive = (e: KeyboardEvent) => {
		if (e.key === name && !active) {
			onPress(e.key)
			active = true
		}
	}
	const makeInactive = (e: KeyboardEvent) => {
		if (e.key === name && active) {
			onRelease(e.key)
			active = false
		}
	}

	$effect(() => {
		document.addEventListener("keydown", makeActive)
		document.addEventListener("keyup", makeInactive)

		return () => {
			document.removeEventListener("keydown", makeActive)
			document.removeEventListener("keyup", makeInactive)
		}
	})
</script>

<button data-name="{name}" class:active>{toName?.(name)}</button>

<style>
	button {
		all: unset;
		cursor: pointer;
		inline-size: 1.5em;
		block-size: 1.5em;
		display: flex;
		align-items: center;
		justify-content: center;

		border: 0.125em solid var(--t-bg-b);
	}

	.active {
		background: var(--t-green-a);
		border-color: var(--t-green-b);
	}
</style>
