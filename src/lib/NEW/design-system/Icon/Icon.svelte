<script lang="ts">
    import type { IconName } from './IconName';
	import { library } from './library'

	export let icon: IconName
	export let label: string | undefined = undefined
	
	$: iconData = library[icon]

	$: offset = ("offset" in iconData ? iconData.offset : undefined) ?? [0, 0]
	$: viewBox = `${offset[0]} ${offset[1]} ${iconData.icon[0]} ${iconData.icon[1]}`
	$: path = iconData.icon[4] as string
</script>

<svg
	aria-hidden="{label != null ? "false" : "true"}"
	focusable="false"
	data-icon={icon}
	xmlns="http://www.w3.org/2000/svg"
	{viewBox}
>
	{#if label != null}
		<title>{label}</title>
	{/if}
	<path fill="currentColor" d={path} />
</svg>

<style>
	svg {
		display: inline-block;
		height: 1em;
		line-height: 1;
		overflow: visible;
	}
</style>
