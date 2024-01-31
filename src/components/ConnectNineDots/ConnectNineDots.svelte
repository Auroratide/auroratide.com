<svelte:options customElement="connect-nine-dots" />

<script lang="ts">
    import type { Angle } from './geometry/Angle'
    import { LineMaker } from './LineMaker'
    import { Point } from './geometry/Point'
    import { Circle } from './geometry/Circle'

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

    const translation = (angle: Angle) => -50 * Math.cos(angle.radians)
</script>

<div class="connect-nine-dots">
    <div class="puzzle-area" class:success class:failure={!success && lineMaker.atLimit} data-testid="puzzle-area">
        <div class="dot-area" bind:this={dots}>
            {#each nine as _}
                <img class="dot" src="{assetspath}/dot.png" alt="Dot" />
            {/each}
        </div>
        <div class="line-area" on:click={handleClick} bind:this={lines} data-testid="line-area">
            {#each lineMaker.lines as line}
                <img class="line" src="{assetspath}/line.png" alt="Line" style={`
                    left: ${line.origin.x}px;
                    top: ${line.origin.y}px;
                    width: ${line.length}px;
                    transform: rotate(${line.angle.degrees}deg) translate(0, ${translation(line.angle)}%);
                `} />
            {/each}
        </div>
        {#if lineMaker.lastPoint && !lineMaker.atLimit}
            <vector-icon class="last-clicked" title="Last Clicked" icon="crosshairs" style="left: {lineMaker.lastPoint.x}px; top: {lineMaker.lastPoint.y}px;" />
        {/if}
    </div>
    <button part="button" on:click={handleReset}>Reset</button>
</div>

<style>
    :host {
        display: block;
        margin-bottom: 1.5em;
    }

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
        border-color: var(--skin-success-banner);
        background-color: var(--skin-success-overlay);
    }

    .puzzle-area.failure {
        border-color: var(--skin-danger-banner);
        background-color: var(--skin-danger-overlay);
    }

    .dot-area {
        --dot-size: 2em;
        display: grid;
        grid-template: repeat(3, var(--dot-size)) / repeat(3, var(--dot-size));
        grid-gap: var(--dot-size) var(--dot-size);
        justify-content: center;
    }

    .dot {
        width: var(--dot-size);
        height: var(--dot-size);
    }

    .line-area {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .line {
        position: absolute;
        transform-origin: center left;
        height: 0.625em;
    }

    .last-clicked {
        position: absolute;
        transform: translate(-50%, -50%);
        animation: grow-shrink 1024ms;
        animation-iteration-count: infinite;
        opacity: 0.667;
    }

    @keyframes grow-shrink {
        0% { font-size: 1em; }
        50% { font-size: 1.5em; }
        100% { font-size: 1em; }
    }
</style>
