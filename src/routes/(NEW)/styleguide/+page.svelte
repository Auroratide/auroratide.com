<script lang="ts">
	import { StaticPage } from "$lib/NEW/design-system/pages"
	import { page } from "$app/stores"

	import Palette from './Palette.svelte'
	import Shade from './Shade.svelte'
</script>

<StaticPage title="Styleguide" description="My color and branding standards." pathname={$page.url.pathname}>
	<section slot="content" class="palettes">
		<Palette name="Blue">
			<Shade label="Dark" value="oklch(55% 0.119 250)" />
			<Shade label="Light" value="oklch(64% 0.142 250)" />
		</Palette>
		<Palette name="Purple">
			<Shade label="Dark" value="oklch(53% 0.11 304)" />
			<Shade label="Light" value="oklch(64% 0.13 305)" />
		</Palette>
		<Palette name="Yellow">
			<Shade label="Dark" value="oklch(56.5% 0.11 95.5)" />
			<Shade label="Light" value="oklch(71% 0.14 96)" />
		</Palette>
		<Palette name="Green">
			<Shade label="Dark" value="oklch(55% 0.111 134)" />
			<Shade label="Light" value="oklch(66% 0.129 134)" />
		</Palette>
		<Palette name="Red">
			<Shade label="Dark" value="oklch(50% 0.11 30)" />
			<Shade label="Light" value="oklch(63% 0.13 30.5)" />
		</Palette>
		<Palette name="Dark">
			<Shade label="Dark" value="oklch(22% 0.021 255)" />
			<Shade label="Light" value="oklch(27% 0.02 255)" />
		</Palette>
		<Palette name="Light">
			<Shade label="Dark" value="oklch(80% 0.005 255)" />
			<Shade label="Light" value="oklch(97.5% 0.005 255)" />
		</Palette>
  </section>
</StaticPage>

<style>
	.palettes {
		display: flex;
		column-gap: 0.75em;
		row-gap: 1.5em;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
