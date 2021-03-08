<script lang="ts">
    import { Palette } from '@/client/palette'

    export let circleColor: string = Palette.colors.AuroraBlue
    export let auroraColor: string = Palette.greyscale[100]
    export let tideColor: string = Palette.colors.DeepBlue
    export let absolute: boolean = false
    export let size: string = '1em'
    export let layer: number = 1
</script>

<!-- Created using Krita: https://krita.org -->
<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 368.64 368.64"
    class="avatar-svg"
    style="position: {absolute ? 'absolute' : 'relative'}; font-size: {size}; top: {absolute ? '50%' : '0'}; left: {absolute ? '50%' : '0'}; transform: {absolute ? 'translate(-50%, -50%)' : 'none'}; z-index: {layer};"
>
    <defs />
    <path id="avatar-aurora-behind-top" transform="matrix(0.999999920527145 0 0 0.999999920527145 303.210609331799 145.352865167471)" fill="{auroraColor}" fill-rule="evenodd" d="M2.99136 88.8727C6.23712 89.0087 8.18873 88.8072 8.84621 88.2681C18.3168 76.6 22.3155 48.2803 20.8423 3.30926L3.65958 0C-0.985904 58.0655 -1.20864 87.6897 2.99136 88.8727Z" />
    <path id="avatar-aurora-behind-bottom" transform="matrix(0.999999960263572 0 0 0.999999960263572 49.1849766904237 188.8200001531)" fill="{auroraColor}" fill-rule="evenodd" d="M22.6005 69.5568L26.3552 68.1567L4.63502 0L0.405023 1.89C-1.882 21.2927 5.51649 43.8483 22.6005 69.5568Z" />
    <circle id="avatar-circle" transform="matrix(0.999999801317875 0 0 0.999999801317875 51.8399897003186 51.1199898433698)" r="134.28" cx="134.28" cy="134.28" fill="{circleColor}" fill-rule="evenodd" />
    <path id="avatar-tide" transform="matrix(0.99999988079072 0 0 0.99999988079072 52.9556708237221 84.9654672340187)" fill="{tideColor}" fill-rule="evenodd" d="M160.619 126.318C232.799 94.9348 181.69 -6.32583 102.325 0.311611C22.9596 6.94905 -25.4267 83.4523 14.0043 163.254C53.4354 243.056 139.804 222.161 172.838 210.067C205.872 197.974 239.324 180.231 304.884 213.654C245.193 111.602 142.572 165.001 120.345 145.784C98.1184 126.567 121.141 98.9909 135.864 96.2945C150.586 93.5981 167.911 100.391 160.619 126.318Z" />
    <path id="avatar-aurora-bottom" transform="matrix(0.999999877320053 0 0 0.999999877320053 13.365188793793 189.35998581297)" fill="{auroraColor}" fill-rule="evenodd" d="M338.355 127.8C304.12 114.143 274.363 107.192 249.084 106.946C211.167 106.577 151.899 143.197 101.95 141.821C52.0004 140.445 17.3797 120.397 4.27481 85.32C-8.83006 50.2435 9.82142 12.6784 38.1148 0C39.3383 20.6904 43.0884 42.5604 59.3549 69.075C49.331 75.1432 55.0387 80.6165 58.0948 83.385C61.1509 86.1536 81.1712 93.9017 119.769 91.418C158.366 88.9343 199.963 57.616 244.757 60.1073C274.62 61.7681 302.579 73.7723 328.635 96.12C328.635 96.12 331.875 106.68 338.355 127.8Z" />
    <path id="avatar-aurora-top" transform="matrix(0.99999988079072 0 0 0.99999988079072 66.9925359955499 6.07851862688096)" fill="{auroraColor}" fill-rule="evenodd" d="M0 0C130.358 8.22397 213.175 26.8916 248.449 56.0029C283.723 85.1141 303.477 138.578 294.779 177.701C286.081 216.825 260.012 230.495 244.376 228.084C251.419 211.778 260.172 176.186 245.394 140.007C211.648 123.405 141.05 115.089 33.6017 115.06C32.2441 113.363 21.0435 75.0099 0 0Z" />
</svg>

<style>
    .avatar-svg {
        display: block;
        width: 1em;
        height: 1em;
    }
</style>
