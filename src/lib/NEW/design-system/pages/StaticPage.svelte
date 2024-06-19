<script lang="ts">
	import type { OpenGraph } from "../OpenGraph"
	import { PageMeta } from "../PageMeta"
	import { PageTitle } from "../PageTitle"
	import { SiteInfo } from "../SiteInfo"

	export let title: string
	export let description: string
	export let pathname: string

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
