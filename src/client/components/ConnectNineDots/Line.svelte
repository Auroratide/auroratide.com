<script lang="ts">
    import type { Line } from './geometry/Line'
    import type { Angle } from './geometry/Angle'

    export let assetspath: string
    export let line: Line

    const translation = (angle: Angle) => -50 * Math.cos(angle.radians)
</script>

<img class="line" src="{assetspath}/line.png" alt="Line" style={`
    left: ${line.origin.x}px;
    top: ${line.origin.y}px;
    width: ${line.length}px;
    transform: rotate(${line.angle.degrees}deg) translate(0, ${translation(line.angle)}%);
`} />

<style>
    .line {
        position: absolute;
        transform-origin: center left;
        height: 0.625em;
    }
</style>
