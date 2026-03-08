<script lang="ts">
	import { StaticPage } from '$lib/design-system/pages'
	import { page } from "$app/state"
	import { PageContent } from '$lib/design-system/PageContent'

	$effect(() => {
		window.location.replace("/doodles/pokemon-type-calculator")
	})
</script>

<StaticPage title="Pokemon Type Calculator" description="Calculate vulnerabilities and resistances of pokemon types, including pokemon with three or more types." pathname={page.url.pathname}>
	<PageContent slot="content">
		<p>Redirecting to <a href="/doodles/pokemon-type-calculator">Doodles Section</a>...</p>
	</PageContent>
</StaticPage>
