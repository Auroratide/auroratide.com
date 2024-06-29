<script lang="ts">
	import { SudokuValue } from "./Sudoku"
	import one from "./1.png"
	import two from "./2.png"
	import three from "./3.png"
	import four from "./4.png"
	import five from "./5.png"
	import six from "./6.png"
	import seven from "./7.png"
	import eight from "./8.png"
	import nine from "./9.png"

	export let value: SudokuValue

	const getSrc = (value: SudokuValue) => {
		switch (value) {
			case SudokuValue.One: return one
			case SudokuValue.Two: return two
			case SudokuValue.Three: return three
			case SudokuValue.Four: return four
			case SudokuValue.Five: return five
			case SudokuValue.Six: return six
			case SudokuValue.Seven: return seven
			case SudokuValue.Eight: return eight
			case SudokuValue.Nine: return nine
			default: return ""
		}
	}

	$: src = getSrc(value)
</script>

<img {src} alt={value.toString()} />

<style>
	img {
		display: block;
		width: 100%;
		box-shadow: 0.125rem 0.125rem 0 oklch(0% 0 0 / 0.25);
	}
</style>
