<script lang="ts">
    import { onMount } from 'svelte'
    import { Image } from './Image'
    import { IconName } from '@/client/components/VectorIcon/IconName'

    let canvas: HTMLCanvasElement
    let image: Image
    let message: string = ''

    let originalImage: ImageBitmap
    let base64: string = ''
    $: originalImage = image?.bitmap
    $: base64 = image?.base64

    onMount(() => {
        image = new Image(canvas, null)
    })

    const handleUpload = async (e: Event) => {
        image = await image.upload((e.target as HTMLInputElement).files[0])
    }

    const handleEncode = () => {
        const ctx = canvas.getContext('2d')
        ctx.drawImage(originalImage, 0, 0)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        let i = 0;
        const increment = () => i += i % 4 === 2 ? 2 : 1;
        const setBits = (bits) => {
            if(i < data.length)
                data[i] = (data[i] & 0xFC) | bits;
            increment();
        };

        message.split('').forEach(letter => {
            const code = letter.charCodeAt(0);
            setBits(code >> 6);
            setBits((code >> 4) & 0x03);
            setBits((code >> 2) & 0x03);
            setBits(code & 0x03);
        });

        ctx.putImageData(imageData, 0, 0)
        base64 = canvas.toDataURL()
    }

    const handleDecode = () => {
        const ctx = canvas.getContext('2d')
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
        let decodedMessage = ''
        let i = 0;
        const increment = () => i += i % 4 === 2 ? 2 : 1;
        const next = () => {
            const couple = data[i] & 0x03;
            increment();
            return couple;
        };

        while(i < data.length) {
            const code = (next() << 6) |
                         (next() << 4) |
                         (next() << 2) |
                         (next());
            if(9 <= code && code <= 13 || 32 <= code && code <= 126)
                decodedMessage += String.fromCharCode(code);
            else
                break;
        }

        message = decodedMessage
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
    <canvas data-testid="canvas" bind:this={canvas}></canvas>
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
