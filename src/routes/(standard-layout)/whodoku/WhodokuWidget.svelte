<script lang="ts">
	import { Button } from '$lib/design-system/Button'
	import SquareImg from './SquareImg.svelte'
	import { Sudoku, SudokuValue } from './Sudoku'

	let puzzle: Sudoku
	let original: Sudoku
	let solved: boolean = false

	const reset = () => puzzle = new Sudoku([...original.board])
	const newPuzzle = () => {
		puzzle = Sudoku.newPuzzle()
		original = new Sudoku([...puzzle.board])
	}

	newPuzzle()
	$: solved = puzzle.isSolved()
</script>

<div class="whodoku">
	<div class="board" class:solved>
		{#each puzzle.board as square, index}
			<button class="square" title="Sudoku Square" disabled={original.board[index] !== SudokuValue.Empty || solved} on:click={() => {
				if (!solved)
					puzzle = puzzle.increment(index)
			}}>
				{#if square !== SudokuValue.Empty}
					<SquareImg value={square} />
				{/if}
			</button>
		{/each}
	</div>
	<div class="options">
		<Button on:click={reset} theme="red">Reset</Button>
		<Button on:click={newPuzzle}>New Puzzle</Button>
	</div>
	{#if solved}
		<div class="solved-text">
			<span>It&apos;s solved! Yay!</span>
		</div>
	{/if}
</div>

<style>
	.whodoku {
		position: relative;
	}

	.board {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		grid-template-rows: repeat(9, 1fr);
		width: 80vmin;
		height: 80vmin;
		margin: 0 auto 3rem;
		user-select: none;
	}

	.board.solved {
		opacity: 0.25;
	}

	.options {
		text-align: center;
	}

	.options > :global(*) {
		display: inline-block;
		margin: 0 1em;
	}

	.solved-text {
		font-size: 3em;
		background: var(--t-bg-b);
		border: 0.25em solid var(--t-bg-a);
		box-shadow: var(--elevated);
		position: absolute;
		top: 3em;
		width: 100%;
		padding: 0.5em 0;
		text-align: center;
		z-index: 3;
	}

	.square {
		border: none;
		background: none;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 0.125rem solid var(--t-fg-a);
		border-left: 0.125rem solid var(--t-fg-a);
		padding: 10%;
		border-radius: 0;
	}

	.square:nth-child(9n) {
		border-right: 0.125rem solid var(--t-fg-a);
	}

	.square:nth-last-child(-n + 9) {
		border-bottom: 0.125rem solid var(--t-fg-a);
	}

	.square:nth-child(9n + 4),
	.square:nth-child(9n + 7) {
		border-left-width: 0.25rem;
		border-left-color: var(--t-fg-b);
	}

	.square:nth-child(n + 28):not(:nth-child(n + 37)),
	.square:nth-child(n + 55):not(:nth-child(n + 64)) {
		border-top-width: 0.25rem;
		border-top-color: var(--t-fg-b);
	}

	.square[disabled] {
		background: oklch(100% 0 0 / 0.25);
		cursor: not-allowed;
	}
</style>
