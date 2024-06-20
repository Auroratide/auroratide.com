<script lang="ts">
	import { Logo } from "$lib/NEW/auroratide/Logo"
	import { Nav } from "$lib/NEW/auroratide/routes"
	import { PageLayout } from "$lib/NEW/design-system/PageLayout"
</script>

<PageLayout nav={Nav}>
	<Logo slot="logo" />
	<slot></slot>
</PageLayout>
