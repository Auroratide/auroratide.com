<script lang="ts">
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    export let src: string
    export let alt: string
    export let ext: string = 'png'
    export let lowres: string
    export let medres: string
    export let highres: string
    export let fadeduration: number = 1000
    
    let highresImg: HTMLImageElement
    let highresLoaded: boolean = false

    onMount(() => {
        highresImg.onload = () => {
            highresLoaded = true
        }
    })

    const qualified = (res: string) => `${src}/${res}.${ext}`
</script>

<img class="highres" {alt} loading="lazy" bind:this={highresImg} data-testid="highres"
    sizes="(max-width: 75rem) {parseInt(medres)}px, {parseInt(highres)}px"
    srcset="{qualified(medres)} {medres}, {qualified(highres)} {highres}"
    src="{qualified(highres)}"
/>
{#if !highresLoaded}
    <img class="lowres" src="{qualified(lowres)}" {alt} loading="lazy" transition:fade="{{duration: fadeduration}}" aria-hidden="true" data-testid="lowres" />
{/if}


<style>
    :host, :global(responsive-image) {
        position: relative;
        display: inline-block;
        overflow: hidden;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin: 0;
    }

    .lowres {
        z-index: 2;
    }

    .highres {
        z-index: 1;
    }
</style>
