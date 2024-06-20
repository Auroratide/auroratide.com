<script lang="ts">
	import { browser } from "$app/environment"
	import { SiteInfo } from "$lib/NEW/design-system/SiteInfo"

	import "$lib/NEW/design-system/major-point/style.css"
	import "$lib/NEW/design-system/point-compilation/style.css"
	import "$lib/NEW/design-system/slide-show/style.css"

	if (browser) {
		import("@auroratide/img-zoom/lib/define.js")

		import("$lib/NEW/design-system/icon-divider/define.js")
		import("$lib/NEW/design-system/major-point/define.js")
		import("$lib/NEW/design-system/point-compilation/define.js")
		import("$lib/NEW/design-system/slide-show/define.js")
		import("$lib/NEW/design-system/vector-icon/define.js")
	}

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

<slot></slot>
