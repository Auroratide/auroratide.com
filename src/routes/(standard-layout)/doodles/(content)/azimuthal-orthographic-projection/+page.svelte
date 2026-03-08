<script lang="ts">
	import { StaticPage } from "$lib/design-system/pages"
	import { page } from "$app/state"
	import { createScene } from "./scene"
	import { createSphere } from "./sphere"
	import { createLight } from "./lighting"
	import { metadata } from "./metadata"

	let root: HTMLElement

	$effect(() => {
		const { scene, cleanup, rerender } = createScene(root)
		const sphere = createSphere()
		const light = createLight()

		scene.add(sphere)
		scene.add(light)

		let frame = -1

		function animate() {
			frame = requestAnimationFrame(animate)

			sphere.rotation.y += 0.005

			rerender()
		}

		animate()

		return () => {
			cleanup()
			cancelAnimationFrame(frame)
		}
	})
</script>

<StaticPage title={metadata.title} description={metadata.summary} theme={metadata.color} pathname={page.url.pathname}>
	<div slot="content" class="page-content">
		<div class="root" bind:this={root}></div>
		<p>I'm trying to visualize one way people in a world I'm building might make a map.</p>
	</div>
</StaticPage>

<style>
	.root {
		inline-size: 100%;
		block-size: 400px;
	}
</style>