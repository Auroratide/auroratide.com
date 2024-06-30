<script lang="ts">
	import { browser } from "$app/environment"
	import { onNavigate } from "$app/navigation"
	import { SiteInfo } from "$lib/design-system/SiteInfo"
	import { onMount } from "svelte"

	import "$lib/design-system/major-point/style.css"
	import "$lib/design-system/point-compilation/style.css"
	import "$lib/design-system/slide-show/style.css"

	if (browser) {
		import("@auroratide/img-zoom/lib/define.js")
		import("@auroratide/table-of-contents/lib/define.js")

		import("$lib/design-system/icon-divider/define.js")
		import("$lib/design-system/major-point/define.js")
		import("$lib/design-system/navigation-ripple/define.js")
		import("$lib/design-system/point-compilation/define.js")
		import("$lib/design-system/slide-show/define.js")
		import("$lib/design-system/vector-icon/define.js")
	}

	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return

	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve()
	// 			await navigation.complete
	// 		})
	// 	})
	// })

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

	onMount(() => {
		import("$lib/design-system/navigation-ripple").then(({ setupNavigationRipple }) => {
			setupNavigationRipple()
		})
	})
</script>

<slot></slot>
