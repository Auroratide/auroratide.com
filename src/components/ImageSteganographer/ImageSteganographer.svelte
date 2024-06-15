<svelte:options customElement="image-steganographer" />

<script lang="ts">
    import { onMount } from 'svelte'
    import { Canvas } from './Canvas'
    import { Steganographer } from './Steganographer'
    import { Status } from './Status'
    import { burst } from './burst'

    export let initialimage: string

    const steganographer = new Steganographer()
    let canvasElement: HTMLCanvasElement
    let canvas: Canvas
    let message: string = ''
    let status = Status.nothing()
    let showFeedback: boolean = false

    $: {
        if (showFeedback)
            setTimeout(() => showFeedback = false, 401)
    }

    const fail = (message: string) => {
        status = Status.fail(message)
        showFeedback = true
    }

    const succeed = (message: string) => {
        status = Status.succeed(message)
        showFeedback = true
    }

    onMount(() => {
        canvas = new Canvas(canvasElement, null)
        const startingImage = new Image()
        startingImage.onload = async () => {
            canvas = await canvas.upload(startingImage)
        }
        startingImage.src = initialimage
    })

    const handleUpload = async (e: Event) => {
        try {
            const files = (e.target as HTMLInputElement).files

            if (files) {
                canvas = await canvas.upload(files[0])
            }
        } catch(e) {
            // console.warn((e as Error).message)
            fail('Unfortunately, the image could not be processed.')
        }
    }

    const handleEncode = () => {
        canvas = canvas.reset()
        try {
            const imageData = steganographer.encode(canvas.imageData, message)
            canvas = canvas.write(imageData)
            succeed('Message encoded!')
        } catch(e) {
            fail('Unfortunately, the message is too long and cannot fit in the image.')
        }
    }

    const handleDecode = () => {
        message = steganographer.decode(canvas.imageData)
        if (message.length === 0)
            fail('Unfortunately, no message could be found in the image.')
        else
            succeed('Message decoded!')
    }
</script>

<div class="image-steganographer">
    <div class="area image-area">
        <strong class="area-title">Image</strong>
        <img alt="Steganography" src={canvas?.base64} />
        <button part="button secondary"><label class="image-selector">
            Select Image <input type="file" on:change={handleUpload} />
        </label></button>
    </div>
    <div class="area action-area">
        <button part="button" on:click={handleEncode}>
            <vector-icon icon="angle-double-up" />
            <span>Encode</span>
            <vector-icon icon="angle-double-up" />
        </button>
        <button part="button" on:click={handleDecode}>
            <vector-icon icon="angle-double-down" />
            <span>Decode</span>
            <vector-icon icon="angle-double-down" />
        </button>
    </div>
    <div class="area message-area">
        <strong class="area-title"><label for="steganography-message-input">Message</label></strong>
        <textarea part="textarea" bind:value={message} id="steganography-message-input"></textarea>
    </div>
    {#if showFeedback}
        <div in:burst|global={{duration: 400}} class="feedback {status.type}"></div>
    {/if}
    <div class="area status-area {status.type}">
        <span>{status.message}</span>
    </div>
    <canvas data-testid="canvas" bind:this={canvasElement}></canvas>
</div>

<style>
    :host {
        display: block;
        margin-bottom: 1.5em;
    }

    .image-steganographer {
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .area {
        margin-bottom: 1.5em;
    }

    .image-area {
        text-align: center;
    }

    .image-area img {
        display: block;
        margin: 0 auto 0.5em;
        max-height: 10em;
    }

    .image-area input {
        display: none;
    }

    .image-area .image-selector {
        cursor: pointer;
    }

    .action-area {
        text-align: center;
    }

    .message-area {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .message-area textarea {
        min-height: 7.5em;
    }

    .area-title {
        margin-bottom: 0.5em;
        display: block;
    }

    .status-area {
        text-align: center;
        color: var(--t-fg-b);
        padding: 0.5em;
    }

    .status-area.success {
        background: var(--t-green-a);
    }

    .status-area.failure {
        background: var(--t-red-a);
    }

    .feedback {
        position: absolute;
        content: '';
        width: 0.1px;
        height: 0.1px;
        border-radius: 0.1px;
        background: transparent;
        bottom: 2em;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 0;
    }

    .feedback.success {
        --burst-color: oklch(55% 0.111 134 / 0.2);
    }

    .feedback.failure {
        --burst-color: oklch(50% 0.11 30 / 0.2);
    }

    canvas { display: none; }

    button vector-icon {
        vertical-align: -0.125em;
    }
</style>
