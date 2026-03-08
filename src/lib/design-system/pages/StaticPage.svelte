<script lang="ts">
	import { Theme, type ThemeName } from "../Color"
	import type { OpenGraph } from "../OpenGraph"
	import { PageMeta } from "../PageMeta"
	import { PageTitle } from "../PageTitle"
	import { SiteInfo } from "../SiteInfo"

	export let title: string
	export let theme: ThemeName = "blue"
	export let description: string
	export let pathname: string
	export let centered: boolean = false

	const {
		title: sitetitle,
		logo,
		url,
	} = SiteInfo.get()

	$: opengraph = {
		type: "website",
		title: title,
		description: description,
		url: url + pathname,
		image: logo,
		site_name: sitetitle,
	} satisfies OpenGraph
</script>

<PageMeta pagetitle={title} {description} {opengraph} />
<header class="medium-space-after" class:centered>
	<PageTitle>{title}</PageTitle>
</header>
<div class="{Theme(theme)}">
	<slot name="content"></slot>
</div>

<style>
	.medium-space-after {
		min-height: 5em;
		margin-block-end: 1em;
	}

	.centered { text-align: center; }
</style>
