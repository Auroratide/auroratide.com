<script lang="ts">
    import type { Point } from './geometry/Point'

    export let at: Point
</script>

<vector-icon class="last-clicked" title="Last Clicked" icon="crosshairs" style="left: {at.x}px; top: {at.y}px;" />

<style>
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
