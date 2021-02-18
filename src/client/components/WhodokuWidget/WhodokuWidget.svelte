<script lang="ts">
    import Square from './Square.svelte'
    import { Sudoku, SudokuValue } from './Sudoku'

    export let assetspath: string

    let puzzle: Sudoku
    let original: Sudoku

    const reset = () => puzzle = new Sudoku([...original.board])
    const newPuzzle = () => {
        puzzle = Sudoku.newPuzzle()
        original = new Sudoku([...puzzle.board])
    }

    newPuzzle()
</script>

<div class="whodoku">
    <div class="board">
        {#each puzzle.board as square, index}
            <Square value={square} canEdit={original.board[index] === SudokuValue.Empty} {assetspath} onClick={() => {
                puzzle = puzzle.increment(index)
            }} />
        {/each}
    </div>
    <div class="options">
        <button on:click={reset}>Reset</button>
        <button class="secondary" on:click={newPuzzle}>New Puzzle</button>
    </div>
</div>

<style>
    :host, :global(whodoku-widget) {
        display: block;
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

    .options {
        text-align: center;
    }
</style>
