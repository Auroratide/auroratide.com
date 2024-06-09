<script lang="ts">
	import { Logo } from "$lib/NEW/auroratide/Logo";
	import { PageLayout } from "$lib/NEW/design-system/PageLayout"
</script>

<PageLayout sitetitle="Auroratide" subtitle="Coding + Storytelling" nav={[ {
	href: "/posts2",
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
	<slot></slot>
</PageLayout>
