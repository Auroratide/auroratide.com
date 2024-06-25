<script lang="ts">
	import { ListPage, StaticPage } from "$lib/design-system/pages"
	import { page } from "$app/stores"
	import { Logo } from "$lib/auroratide/Logo"
	import { FooterNav, MainNav, Socials } from "$lib/auroratide/routes"
	import { PageLayout } from "$lib/design-system/PageLayout"
	import { SocialLinks } from "$lib/design-system/SocialLinks"
	import type { PageData } from "./$types"
	import { StoryCategories } from "$lib/auroratide/stories/Category"
	import { StoryCard } from "$lib/auroratide/stories/StoryCard"

	export let data: PageData
</script>

<PageLayout headerNav={MainNav} footerNav={FooterNav}>
	<Logo slot="logo" />
	<ListPage
		title="Stories"
		description="Stories by Auroratide, Timothy Foster"
		pathname={$page.url.pathname}
		categories={StoryCategories}
		items={data.values}
		columns={1}
	>
		<StoryCard slot="item" let:item value={item} />
	</ListPage>
	<SocialLinks slot="footer" title="Find me on" values={Object.values(Socials)} />
</PageLayout>
