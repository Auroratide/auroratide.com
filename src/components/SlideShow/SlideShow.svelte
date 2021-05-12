<svelte:options tag="slide-show" />

<script lang="ts">
    import { Mode } from './Mode'

    export let width: string
    export let height: string
    export let mode: Mode = Mode.Slide

    let container: HTMLElement
    let slides: HTMLElement[]
    let current: number = 0
    let buttonsActive: boolean = false

    const nonNegMod = (n: number, mod: number): number => ((n % mod) + mod) % mod

    const setSlides = (value: HTMLCollection) => {
        slides = Array.from(value) as HTMLElement[]
        slides.forEach(el => {
            el.style.maxWidth = width
            el.style.maxHeight = height
        })

        current = 0
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

    $: {
        if (slides) {
            slides.forEach(el => el.style.opacity = mode === Mode.Fade ? '0' : '0.5')
            slides[current].style.opacity = '1'
        }
    }

    $: buttonsActive = slides ? true : false

    const next = () => current = nonNegMod(current + 1, slides.length)
    const prev = () => current = nonNegMod(current - 1, slides.length)
</script>

<figure class="slide-show {mode}" style="max-width: {width};" bind:this={container}>
    <div class="container">
        <div class="slides" style="left: -{100 * current}%">
            <slot></slot>
        </div>
        <button class="prev slide-button" aria-hidden="true" on:click={prev}><vector-icon icon="angle-left" /></button>
        <button class="next slide-button" aria-hidden="true" on:click={next}><vector-icon icon="angle-right" /></button>
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

    .slide-show.slide .slides {
        position: relative;
        display: flex;
        transition: left 400ms ease-out;
    }

    nav {
        display: flex;
        justify-content: space-between;
    }

    .slide-button {
        position: absolute;
        top: 0;
        bottom: 0;
        font-size: 2em;
        width: 20%;
        opacity: 0.25;
        border: none;
        color: rgba(0, 0, 0, 0.5);
        line-height: 1;
        cursor: pointer;
    }

    .slide-button:hover, .slide-button:active {
        opacity: 0.333;
    }

    .slide-button:active {
        color: rgba(0, 0, 0, 1);
    }

    .slide-button.prev {
        left: 0;
        text-align: left;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
    }

    .slide-button.next {
        right: 0;
        text-align: right;
        background: linear-gradient(to left, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
    }

    ::slotted(*) {
        flex: 1 0 auto;
        width: 100%;
        max-width: 100%;
        object-fit: cover;
        transition: opacity 400ms linear;
    }

    .slide-show.fade ::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 128ms linear;
    }

    /* So the container has size */
    .slide-show.fade ::slotted(*:first-child) {
        position: static;
    }
</style>
