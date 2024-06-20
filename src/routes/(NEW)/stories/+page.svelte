<script>
	import { StaticPage } from "$lib/design-system/pages"
	import { page } from "$app/stores"
</script>

<StaticPage title="Stories" description="Stories" pathname={$page.url.pathname}>
	<section slot="content">
		<p>Coming soon.</p>
	</section>
</StaticPage>
