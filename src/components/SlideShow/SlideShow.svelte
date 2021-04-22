<svelte:options tag="slide-show" />

<script lang="ts">
    export let width: string
    export let height: string

    let container: HTMLElement
    let slides: HTMLElement[]
    let current: number = 0

    const setSlides = (value: HTMLCollection) => {
        slides = Array.from(value) as HTMLElement[]
        slides.forEach(el => {
            el.style.opacity = '0.5'
        })
        slides[current].style.opacity = '1'
    }

    $: {
        if (container) {
            if ((container.parentNode as ShadowRoot).host) {
                const waitUntilChildrenExist = () => {
                    if ((container.parentNode as ShadowRoot).host.children.length > 0) {
                        setSlides((container.parentNode as ShadowRoot).host.children)
                    } else {
                        setTimeout(waitUntilChildrenExist, 2)
                    }
                }
                
                waitUntilChildrenExist()
            } else {
                setSlides(container.children[0].children)
            }
        }
    }

    const next = () => {
        current = (((current + 1) % slides.length) + slides.length) % slides.length
        slides.forEach(el => {
            el.style.opacity = '0.5'
        })
        slides[current].style.opacity = '1'
    }

    const prev = () => {
        current = (((current - 1) % slides.length) + slides.length) % slides.length
        slides.forEach(el => {
            el.style.opacity = '0.5'
        })
        slides[current].style.opacity = '1'
    }
</script>

<figure class="slide-show" style="width: {width}; height: {height};" bind:this={container}>
    <div class="slides" style="left: -{parseInt(width) * current}px">
        <slot></slot>
    </div>
</figure>
<button on:click={prev}>Prev</button>
<button on:click={next}>Next</button>

<style>
    :host {
        display: block;
    }

    .slide-show {
        position: relative;
        margin: auto;
        overflow: hidden;
    }

    .slides {
        position: relative;
        display: flex;
        transition: left 500ms ease-out;
    }

    ::slotted(*) {
        transition: opacity 500ms linear;
    }
</style>
