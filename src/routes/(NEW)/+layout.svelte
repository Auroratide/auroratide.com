<script lang="ts">
	import { Logo } from "$lib/auroratide/Logo"
	import { FooterNav, MainNav, Socials } from "$lib/auroratide/routes"
	import { PageLayout } from "$lib/design-system/PageLayout"
	import { SocialLinks } from "$lib/design-system/SocialLinks"
	import { page } from "$app/stores"
</script>

<PageLayout headerNav={MainNav} footerNav={FooterNav}>
	<Logo slot="logo" />
	<svelte:fragment slot="header">
		{#if $page.data.navcontent}
			<svelte:component this={$page.data.navcontent} />
		{/if}
	</svelte:fragment>
	<slot></slot>
	<SocialLinks slot="footer" title="Find me on" values={Object.values(Socials)} />
</PageLayout>
