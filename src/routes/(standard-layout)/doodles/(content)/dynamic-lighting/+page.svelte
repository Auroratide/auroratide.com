<script lang="ts">
	import { page } from "$app/state"
	import { StaticPage } from "$lib/design-system/pages"
	import { PageContent } from "$lib/design-system/PageContent"
	import { CodePen } from "$lib/design-system/CodePen"
	import { metadata } from "./metadata"
</script>

<StaticPage title="{metadata.title}" description="{metadata.summary}" theme="{metadata.color}" pathname={page.url.pathname}>
	<PageContent slot="content">
		<p>The goal is to simulate the combination of different colored lights onto a scene, using pure CSS.</p>
		<CodePen title="Light Experiments" hash="GRQovXY" height={500} />
	</PageContent>
</StaticPage>
