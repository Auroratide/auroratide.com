<script lang="ts">
	import { Logo } from "$lib/auroratide/Logo"
	import { FooterNav, MainNav } from "$lib/auroratide/routes"
	import { PageLayout } from "$lib/design-system/PageLayout"
</script>

<PageLayout headerNav={MainNav} footerNav={FooterNav}>
	<Logo slot="logo" />
	<slot></slot>
</PageLayout>
