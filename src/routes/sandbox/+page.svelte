<script lang="ts">
	import { Logo } from "$lib/NEW/auroratide/Logo"
	import { Article, type ArticleType } from "$lib/NEW/design-system/Article"
    import type { ThemeName } from "$lib/NEW/design-system/Color";
    import type { IconName } from "$lib/NEW/design-system/Icon";
	import { PageLayout } from "$lib/NEW/design-system/PageLayout"
	import { attributes, html } from "./salesman.md"
   //  import type { PageData } from './$types'
   //  import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
   //  import Container from '$lib/layout/Container.svelte'
   //  import Content from '$lib/layout/Content.svelte'
   //  import RawRenderer from '$lib/design/RawRenderer.svelte'

   //  export let data: PageData
   //  $: content = data.content

	const article: ArticleType = {
		title: attributes.title as string,
		publishedAt: new Date(attributes.publishedAt as string),
		content: html,
		icon: attributes.icon as IconName,
		color: attributes.color as ThemeName,
		links: (attributes.links as any[])?.map((it) => ({
			title: it.title,
			href: it.href,
			icon: it.icon,
			color: it.color,
		})) ?? []
	}
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
	<Article value={article} />
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
