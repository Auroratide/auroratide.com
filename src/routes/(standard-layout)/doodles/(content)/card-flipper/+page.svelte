<script lang="ts">
	import { page } from "$app/state"
	import { StaticPage } from "$lib/design-system/pages"
	import { PageContent } from "$lib/design-system/PageContent"
	import { CodePen } from "$lib/design-system/CodePen"
	import { metadata } from "./metadata"
</script>

<StaticPage title="{metadata.title}" description="{metadata.summary}" theme="{metadata.color}" pathname={page.url.pathname}>
	<PageContent slot="content">
		<p>Demo of the <a href="https://components.auroratide.com/flip-card">flip-card reusable html element</a>. Learn more by reading <a href="/posts/realistic-flip-animation">my post on realistic card animations</a>!</p>
		<CodePen title="Flip Card Comparison" hash="WNmmQzP" height={600} />
	</PageContent>
</StaticPage>
