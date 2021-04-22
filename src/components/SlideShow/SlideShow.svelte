<svelte:options tag="slide-show" />

<script lang="ts">
    export let width: string
    export let height: string

    let container: HTMLElement
    let slides: HTMLElement[]
    let current: number = 0
    let buttonsActive: boolean = false

    const nonNegMod = (n: number, mod: number): number => ((n % mod) + mod) % mod
    const setSlideVisibility = () => {
        slides.forEach(el => el.style.opacity = '0.5')
        slides[current].style.opacity = '1'
    }

    const setSlides = (value: HTMLCollection) => {
        slides = Array.from(value) as HTMLElement[]
        slides.forEach(el => {
            el.style.maxWidth = width
            el.style.maxHeight = height
        })
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
                setSlides(container.querySelector('.slides').children)
            }
        }
    }

    $: buttonsActive = slides ? true : false

    const next = () => {
        current = nonNegMod(current + 1, slides.length)
        setSlideVisibility()
    }

    const prev = () => {
        current = nonNegMod(current - 1, slides.length)
        setSlideVisibility()
    }
</script>

<figure class="slide-show" style="max-width: {width};" bind:this={container}>
    <div class="container">
        <div class="slides" style="left: -{100 * current}%">
            <slot></slot>
        </div>
    </div>
    <nav>
        <button part="button" on:click={prev} disabled={!buttonsActive}>Prev</button>
        <button part="button" on:click={next} disabled={!buttonsActive}>Next</button>
    </nav>
</figure>

<style>
    :host {
        display: block;
        margin-bottom: 1.5em;
    }

    .slide-show {
        margin: auto;
    }

    .container {
        position: relative;
        overflow: hidden;
        margin-bottom: 0.5em;
    }

    .slides {
        position: relative;
        display: flex;
        transition: left 400ms ease-out;
    }

    nav {
        display: flex;
        justify-content: space-between;
    }

    ::slotted(*) {
        flex: 1 0 auto;
        width: 100%;
        max-width: 100%;
        object-fit: cover;
        transition: opacity 400ms linear;
    }
</style>
