<script lang="ts">
	import { browser } from "$app/environment"
	// import Page from '$lib/layout/Page.svelte'
	// import Navigation from '$lib/layout/Navigation.svelte'
	// import Footer from '$lib/layout/Footer.svelte'

	import "normalize.css"

	if (browser) {
		import("@auroratide/img-zoom/lib/define.js")
	}
</script>

<!-- <Page>
	<div slot="header"><Navigation /></div>
	<slot></slot>
	<div slot="footer"><Footer /></div>
</Page> -->

<!-- <style>
	@media print {
		:global(body) {
			background-color: white;
		}

		[slot="header"], [slot="footer"] {
			display: none;
		}
	}
</style> -->

<slot></slot>
