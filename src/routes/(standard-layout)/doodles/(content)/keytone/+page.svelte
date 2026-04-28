<script lang="ts">
	import { StaticPage } from "$lib/design-system/pages"
	import { page } from "$app/state"
	import { KeyboardPanel } from "./KeyboardPanel"
	import { Piano } from "./Piano"
	import { Keytone } from "./Keytone"
	import { browser } from "$app/environment"

	const piano = browser ? new Piano() : undefined
	const keytone = browser && piano != null ? new Keytone(piano) : undefined
</script>

<StaticPage title="Keytone" description="" pathname={page.url.pathname}>
	<div slot="content" class="page-content">
		{#if keytone != null}
			<KeyboardPanel onPress={keytone.onPress} onRelease={keytone.onRelease} toName={keytone.getPitchName} />
		{/if}
		<p>Playing with making a laptop an instrument. The key layout is very important; this layout is pretty bad. I think what I want to do is optimize for a major scale, and change the scale using a parameter.</p>
	</div>
</StaticPage>
