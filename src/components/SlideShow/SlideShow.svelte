<svelte:options tag="slide-show" />

<script lang="ts">
    export let width: string
    export let height: string

    let container: HTMLElement
    let slides: HTMLElement[]
    let current: number = 0

    const nonNegMod = (n: number, mod: number): number => ((n % mod) + mod) % mod
    const setSlideVisibility = () => {
        slides.forEach(el => el.style.opacity = '0.5')
        slides[current].style.opacity = '1'
    }

    const setSlides = (value: HTMLCollection) => {
        slides = Array.from(value) as HTMLElement[]
        setSlideVisibility()
    }

    $: {
        if (container) {
            // This horrible if statement is necessary since, unfortunately, the test does not
            // render web components very well; hence, the test is done in vanilla Svelte
            if ((container.parentNode as ShadowRoot).host) {
                // For some reason, the DOM only registers that children exist after Svelte
                // has fully finished updating. So, we wait until there are children.
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
        current = nonNegMod(current + 1, slides.length)
        setSlideVisibility()
    }

    const prev = () => {
        current = nonNegMod(current - 1, slides.length)
        setSlideVisibility()
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
