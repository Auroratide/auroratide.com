<script lang="ts">
	import { onDestroy, onMount } from "svelte"
	import { Canvas } from "./Canvas"
	import { Input } from "./Input"
	import { Game } from "./Game";
	import { browser } from "$app/environment"

	let canvas: HTMLCanvasElement
	let game: Game

	onMount(() => {
		if (browser) {
			Canvas.setup(canvas)
			Input.listen()
	
			game = Game.create()
			Game.start(game)
		}
	})

	onDestroy(() => {
		if (browser) {
			Input.unlisten()
			Canvas.teardown()
	
			if (game) {
				Game.stop(game)
			}
		}
	})
</script>

<canvas bind:this={canvas}></canvas>

<style>

</style>