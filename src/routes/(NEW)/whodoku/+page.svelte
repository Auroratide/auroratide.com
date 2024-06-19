<script lang="ts">
	import { StaticPage } from '$lib/NEW/design-system/pages'
	import { page } from "$app/stores"
	import WhodokuWidget from './WhodokuWidget.svelte'
	import { PageContent } from '$lib/NEW/design-system/PageContent'
</script>

<div style:text-align="center">
	<StaticPage title="Whodoku!" description="Fun sudoku widget which is actually an inside joke between me and some friends." pathname={$page.url.pathname}>
		<div slot="content">
			<PageContent>
				<p>Tap an empty square until it is the face you want!</p>
			</PageContent>
			<WhodokuWidget />
		</div>
	</StaticPage>
</div>