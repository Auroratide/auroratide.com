<script lang="ts">
    import { onMount } from 'svelte'
    import { Canvas } from './Canvas'
    import { IconName } from '@/client/components/VectorIcon/IconName'
    import { Steganographer } from './Steganographer'

    const steganographer = new Steganographer()
    let canvasElement: HTMLCanvasElement
    let canvas: Canvas
    let message: string = ''

    let base64: string = ''
    $: base64 = canvas?.base64

    onMount(() => {
        canvas = new Canvas(canvasElement, null)
    })

    const handleUpload = async (e: Event) => {
        canvas = await canvas.upload((e.target as HTMLInputElement).files[0])
    }

    const handleEncode = () => {
        canvas = canvas.reset()
        const imageData = steganographer.encode(canvas.imageData, message)
        canvas = canvas.write(imageData)
    }

    const handleDecode = () => {
        message = steganographer.decode(canvas.imageData)
    }
</script>

<div class="image-steganographer">
    <div class="area image-area">
        <strong class="area-title">Image</strong>
        <img alt="Steganography" src={base64} />
        <button class="secondary"><label class="image-selector">
            Select Image <input type="file" on:change={handleUpload} />
        </label></button>
    </div>
    <div class="area action-area">
        <button on:click={handleEncode}>
            <vector-icon icon={IconName.AngleDoubleUp} />
            <span>Encode</span>
            <vector-icon icon={IconName.AngleDoubleUp} />
        </button>
        <button on:click={handleDecode}>
            <vector-icon icon={IconName.AngleDoubleDown} />
            <span>Decode</span>
            <vector-icon icon={IconName.AngleDoubleDown} />
        </button>
    </div>
    <div class="area message-area">
        <strong class="area-title"><label for="steganography-message-input">Message</label></strong>
        <textarea bind:value={message} id="steganography-message-input"></textarea>
    </div>
    <canvas data-testid="canvas" bind:this={canvasElement}></canvas>
</div>

<style>
    :host, :global(image-steganographer) {
        display: block;
        margin-bottom: 1.5em;
    }

    .image-steganographer {
        display: flex;
        flex-direction: column;
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

    canvas { display: none; }
</style>
