<script lang="ts">
	import { page } from "$app/state"
	import { StaticPage } from "$lib/design-system/pages"
	import { PageContent } from "$lib/design-system/PageContent"
	import { CodePen } from "$lib/design-system/CodePen"
	import { metadata } from "./metadata"
</script>

<StaticPage title="{metadata.title}" description="{metadata.summary}" theme="{metadata.color}" pathname={page.url.pathname}>
	<PageContent slot="content">
		<p>Demo of the <a href="https://components.auroratide.com/typewritten-text">typewritten-text reusable html element</a>.</p>
		<CodePen title="Typewriter Dialog" hash="rNwyYyW" height={500} />
	</PageContent>
</StaticPage>
