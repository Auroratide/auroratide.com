<script lang="ts">
	import { PageMeta } from "$lib/design-system/PageMeta"
	import { Routes } from "$lib/auroratide/routes"
	import { SiteInfo } from "$lib/design-system/SiteInfo"
	import type { OpenGraph } from "$lib/design-system/OpenGraph"

	const {
		title: sitetitle,
		logo,
		url,
	} = SiteInfo.get()

	$: opengraph = {
		type: "website",
		title: "Art",
		description: "Character, scenery, and other kinds of art by Auroratide, Timothy Foster",
		url: url + Routes.Art.href(),
		image: logo,
		site_name: sitetitle,
	} satisfies OpenGraph
</script>

<PageMeta pagetitle="Art" description="Character, scenery, and other kinds of art by Auroratide, Timothy Foster" {opengraph} />
