<script lang="ts">
	import { oklch, rgb } from './colors'

	export let label: string
	export let value: string

	const to255 = (n: number) => Math.round(n * 255)
	const toHex = (n: number) => to255(n).toString(16)

	$: asOklch = oklch(value)!
	$: asRgb = rgb(value)!
	$: textColor = asOklch.l >= 0.6 ? "black" : "white"
</script>

<figure class="shade" style="--shade-color: {value}; --text-color: {textColor};">
	<figcaption>{label}</figcaption>
	<p class="main">{value}</p>
	<p class="alts">#{toHex(asRgb.r)}{toHex(asRgb.g)}{toHex(asRgb.b)} | rgb({to255(asRgb.r)} {to255(asRgb.g)} {to255(asRgb.b)})</p>
</figure>

<style>
	.shade {
		color: var(--text-color);
		background-color: var(--shade-color);
		padding: 0.5em;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.25em;
	}

	p {
		text-align: center;
		line-height: 1.15;
		margin: 0;
		font-weight: normal;
	}

	figcaption { font-weight: bold; }

	p.main {
		margin-bottom: var(--sp-st-o);
		font-family: var(--f-code);
	}

	p.alts {
		font-size: 0.75em;
		font-family: var(--f-code);
	}
</style>
