<script lang="ts">
	import { Logo } from "$lib/auroratide/Logo"
	import { Nav } from "$lib/auroratide/routes"
	import { PageLayout } from "$lib/design-system/PageLayout"
</script>

<PageLayout nav={Nav}>
	<Logo slot="logo" />
	<slot></slot>
</PageLayout>
