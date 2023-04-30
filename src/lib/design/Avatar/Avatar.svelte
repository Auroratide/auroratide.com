<script lang="ts">
    import Svg from './Svg.svelte'
    import { Palette } from '../color'

    export let color: string = Palette.newColors.AuroraBlue.colorOnBlack
    export let shadowColor: string | undefined = undefined
    export let shadowWidth: string | undefined = undefined
</script>

<div class="avatar">
    {#if shadowColor && shadowWidth}
        <Svg circleColor={shadowColor} tideColor={shadowColor} auroraColor={shadowColor} size={shadowWidth} absolute layer={1} />
    {/if}
    <Svg circleColor={color} layer={2} />
</div>

<style>
    .avatar {
        position: relative;
    }
</style>
