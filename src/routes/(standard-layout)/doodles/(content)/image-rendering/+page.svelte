<script lang="ts">
	import { page } from "$app/state"
	import { StaticPage } from "$lib/design-system/pages"
	import { PageContent } from "$lib/design-system/PageContent"
	import { CodePen } from "$lib/design-system/CodePen"
	import { metadata } from "./metadata"
</script>

<StaticPage title="{metadata.title}" description="{metadata.summary}" theme="{metadata.color}" pathname={page.url.pathname}>
	<PageContent slot="content">
		<p>Demonstration of the <code>image-rendering</code> CSS property. Read more about <a href="/posts/pixelart-and-the-image-rendering-paradox">Pixelart and the image-rendering Paradox</a>!</p>
		<CodePen title="image-rendering Example" hash="wvdYgwv" height={400} />
	</PageContent>
</StaticPage>
