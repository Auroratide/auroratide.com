<script lang="ts">
	import { Logo } from "$lib/auroratide/Logo"
	import { FooterNav, MainNav, Socials } from "$lib/auroratide/routes"
	import { PageLayout } from "$lib/design-system/PageLayout"
	import { SocialLinks } from "$lib/design-system/SocialLinks"
</script>

<PageLayout headerNav={MainNav} footerNav={FooterNav}>
	<Logo slot="logo" />
	<slot></slot>
	<SocialLinks slot="footer" title="Find me on" values={Object.values(Socials)} />
</PageLayout>
