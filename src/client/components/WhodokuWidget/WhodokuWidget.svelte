<script lang="ts">
    import Square from './Square.svelte'
    import { Sudoku, SudokuValue } from './Sudoku'

    export let assetspath: string

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
            <Square value={square} canEdit={original.board[index] === SudokuValue.Empty && !solved} {assetspath} onClick={() => {
                if (!solved)
                    puzzle = puzzle.increment(index)
            }} />
        {/each}
    </div>
    <div class="options">
        <button on:click={reset}>Reset</button>
        <button class="secondary" on:click={newPuzzle}>New Puzzle</button>
    </div>
    {#if solved}
        <div class="solved-text">
            <span>It&apos;s solved! Yay!</span>
        </div>
    {/if}
</div>

<style>
    :host, :global(whodoku-widget) {
        display: block;
    }

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

    .options > * {
        display: inline-block;
        margin: 0 1em;
    }

    .solved-text {
        font-size: 3em;
        background: var(--skin-color-bg);
        position: absolute;
        top: 3em;
        width: 100%;
        padding: 0.5em 0;
        text-align: center;
        z-index: 3;
    }
</style>
