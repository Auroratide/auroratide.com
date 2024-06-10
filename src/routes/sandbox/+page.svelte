<script lang="ts">
	import { Logo } from "$lib/NEW/auroratide/Logo"
	import type { ArticleType } from "$lib/NEW/auroratide/articles"
    import type { ThemeName } from "$lib/NEW/design-system/Color";
    import type { IconName } from "$lib/NEW/design-system/Icon";
	import { PageLayout } from "$lib/NEW/design-system/PageLayout"
	import { attributes as sAttr, html as sHtml } from "./salesman.md"
	import { attributes as vAttr, html as vHtml } from "./veratasium.md"
	import { attributes as tAttr, html as tHtml } from "./time-to-learn-haxe.md"
    import { ArticleCard } from "$lib/NEW/auroratide/articles/ArticleCard";
   //  import type { PageData } from './$types'
   //  import DocumentInfo from '$lib/layout/DocumentInfo.svelte'
   //  import Container from '$lib/layout/Container.svelte'
   //  import Content from '$lib/layout/Content.svelte'
   //  import RawRenderer from '$lib/design/RawRenderer.svelte'

   //  export let data: PageData
   //  $: content = data.content

	const s: ArticleType = {
		id: sAttr.id as string,
		title: sAttr.title as string,
		category: sAttr.category as string,
		publishedAt: new Date(sAttr.publishedAt as string),
		content: sHtml,
		icon: sAttr.icon as IconName,
		color: sAttr.color as ThemeName,
		summary: {
			short: sAttr.summary as string,
			long: sAttr.longSummary as string,
		},
		links: (sAttr.links as any[])?.map((it) => ({
			title: it.title,
			href: it.href,
			icon: it.icon,
			color: it.color,
		})) ?? []
	}

	const v: ArticleType = {
		id: vAttr.id as string,
		title: vAttr.title as string,
		category: vAttr.category as string,
		publishedAt: new Date(vAttr.publishedAt as string),
		content: vHtml,
		icon: vAttr.icon as IconName,
		color: vAttr.color as ThemeName,
		summary: {
			short: vAttr.summary as string,
			long: vAttr.longSummary as string,
		},
		links: (vAttr.links as any[])?.map((it) => ({
			title: it.title,
			href: it.href,
			icon: it.icon,
			color: it.color,
		})) ?? []
	}

	const t: ArticleType = {
		id: tAttr.id as string,
		title: tAttr.title as string,
		category: tAttr.category as string,
		publishedAt: new Date(tAttr.publishedAt as string),
		content: tHtml,
		icon: tAttr.icon as IconName,
		color: tAttr.color as ThemeName,
		summary: {
			short: tAttr.summary as string,
			long: tAttr.longSummary as string,
		},
		links: (tAttr.links as any[])?.map((it) => ({
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
	<!-- <Article value={t} /> -->
	<ArticleCard value={s} />
	<ArticleCard value={v} />
	<ArticleCard value={t} />
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
