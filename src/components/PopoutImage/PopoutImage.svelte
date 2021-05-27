<svelte:options tag="popout-image" />

<script lang="ts">
    import { fade } from '@auroratide/svelte-custom-element-transitions'

    export let src: string
    export let alt: string
    export let loading: string = 'eager'

    let enlarged: boolean = false

    const popout = () => {
        enlarged = true
        document.body.style.top = `-${window.scrollY}px`
        document.body.classList.add('popout-stopscroll')
        document.body.addEventListener('keyup', escapeListener)
    }

    const popin = () => {
        enlarged = false
        document.body.classList.remove('popout-stopscroll')
        window.scrollTo(0, parseInt(document.body.style.top || '0') * -1)
        document.body.removeEventListener('keyup', escapeListener)
    }

    const escapeListener = (e: KeyboardEvent) => {
        if (e.key === 'Escape')
            popin()
    }

    const forwardLoad = (e: Event) => {
        ((e.target as HTMLElement).parentNode as ShadowRoot).host.dispatchEvent(new Event('load'))
    }
</script>

<img class="image" {src} {alt} {loading} on:click={popout} on:load={forwardLoad} />
{#if enlarged}
    <div class="cover" on:click={popin} transition:fade={{duration: 100}} data-testid="popped-out">
        <img {src} {alt} class="popped-out" />
    </div>
{/if}

<style>
    :host {
        display: inline-block;
    }

    .image {
        display: block;
        width: 100%;
        height: 100%;
        max-width: inherit;
        max-height: inherit;
        object-fit: contain;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    .cover {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        z-index: 999;
        -webkit-tap-highlight-color: tranparent;
    }

    .popped-out {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
    }
</style>
