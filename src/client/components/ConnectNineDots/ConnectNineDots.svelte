<script lang="ts">
    import { LineMaker } from './LineMaker'
    import { Point } from './geometry/Point'
    import { Circle } from './geometry/Circle'
    import Dot from './Dot.svelte'
    import Line from './Line.svelte'
    import LastClicked from './LastClicked.svelte'

    export let assetspath: string

    const nine = [...Array(9).keys()]

    let dots: HTMLElement
    let lines: HTMLElement
    const getCircles = () => {
        const container = lines.getBoundingClientRect()
        return Array.from(dots.children).map(dot => {
            const rect = dot.getBoundingClientRect()
            const radius = rect.width / 2
            return new Circle(new Point(rect.left - container.left + radius, rect.top - container.top + radius), radius)
        })
    }

    let lineMaker = new LineMaker([], 4)
    let success: boolean = false

    $: success = dots && lines ? lineMaker.intersectsAll(getCircles()) : false

    const handleClick = (e: MouseEvent) => {
        if (lineMaker.atLimit) {
            lineMaker = lineMaker.reset()
        } else {
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            lineMaker = lineMaker.record(e.clientX - rect.left, e.clientY - rect.top)
        }
    }

    const handleReset = () => lineMaker = lineMaker.reset()
</script>

<div class="connect-nine-dots">
    <div class="puzzle-area" class:success class:failure={!success && lineMaker.atLimit} data-testid="puzzle-area">
        <div class="dot-area" bind:this={dots}>
            {#each nine as _}
                <Dot {assetspath} />
            {/each}
        </div>
        <div class="line-area" on:click={handleClick} bind:this={lines} data-testid="line-area">
            {#each lineMaker.lines as line}
                <Line {assetspath} {line} />
            {/each}
        </div>
        {#if lineMaker.lastPoint && !lineMaker.atLimit}
            <LastClicked at={lineMaker.lastPoint} />
        {/if}
    </div>
    <button on:click={handleReset}>Reset</button>
</div>

<style>
    .connect-nine-dots {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .puzzle-area {
        position: relative;
        padding: 4em;
        flex: 0;
        border: 0.375em solid rgba(0, 0, 0, 0.1);
        margin-bottom: 1em;
    }

    .puzzle-area.success {
        border-color: var(--skin-color-success);
        background-color: rgba(var(--skin-rgb-success), 0.1);
    }

    .puzzle-area.failure {
        border-color: var(--skin-color-danger);
        background-color: rgba(var(--skin-rgb-danger), 0.1);
    }

    .dot-area {
        --dot-size: 2em;
        display: grid;
        grid-template: repeat(3, var(--dot-size)) / repeat(3, var(--dot-size));
        grid-gap: var(--dot-size) var(--dot-size);
        justify-content: center;
    }

    .line-area {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
