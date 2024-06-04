<script lang="ts">
	import { Logo } from "$lib/NEW/auroratide/Logo"
	import { PageLayout } from "$lib/NEW/design-system/PageLayout"
   //  import type { PageData } from './$types'
   //  import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
   //  import Container from '$lib/layout/Container.svelte'
   //  import Content from '$lib/layout/Content.svelte'
   //  import RawRenderer from '$lib/design/RawRenderer.svelte'

   //  export let data: PageData
   //  $: content = data.content
</script>

<PageLayout sitetitle="Auroratide" subtitle="Coding + Storytelling" nav={[ {
	href: "/posts",
	name: "Articles I Wrote",
}, {
	href: "/portfolio",
	name: "Websites I Made",
}, {
	href: "/portfolio",
	name: "Other Thingies",
}, {
	href: "/art",
	name: "Art I Drew",
}, {
	href: "/about",
	name: "About Me",
} ]}>
	<Logo slot="logo" />
	<h1>Hello world!</h1>
	<p>This is a test.</p>
</PageLayout>

<!-- <DocumentInfo title="Sandbox" description="A page for me to test things">
    <Container>
        <Content>
            <h1>Sandbox</h1>
            <RawRenderer content={content} />
        </Content>
    </Container>
</DocumentInfo> -->

<!-- <style>
    h1 {
        text-align: center;
        margin-bottom: var(--sp-st-s);
    }
</style> -->
