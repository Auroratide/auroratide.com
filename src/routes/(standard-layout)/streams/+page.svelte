<script>
	import { StaticPage } from "$lib/design-system/pages"
	import { page } from "$app/state"
</script>

<StaticPage title="Streams" description="Streams" pathname={page.url.pathname}>
	<section slot="content" class="page-content">
		<p><strong>NOT coming soon.</strong></p>
		<p>I mean I might still stream, but I had that as a goal in 2024 and nothing happened.</p>
		<p>So instead I replaced this section with <strong><a href="/doodles">Doodles</a></strong>! You should go there. It has a lot more stuff.</p>
	</section>
</StaticPage>
