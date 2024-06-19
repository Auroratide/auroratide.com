<script lang="ts">
	import { Logo } from "$lib/NEW/auroratide/Logo"
	import { Nav } from "$lib/NEW/auroratide/routes"
	import { PageLayout } from "$lib/NEW/design-system/PageLayout"
	import { SiteInfo } from "$lib/NEW/design-system/SiteInfo"

	SiteInfo.set({
		title: "Auroratide",
		subtitle: "Coding + Storytelling",
		logo: {
			url: "https://auroratide.com/favicon/0512.png",
			alt: "Auroratide Logo",
		},
		url: "https://auroratide.com",
		author: {
			name: "Auroratide, Timothy Foster",
			url: "https://auroratide.com",
		},
	})
</script>

<PageLayout nav={Nav}>
	<Logo slot="logo" />
	<slot></slot>
</PageLayout>
