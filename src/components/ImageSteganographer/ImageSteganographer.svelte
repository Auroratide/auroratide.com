<svelte:options tag="image-steganographer" />

<script lang="ts">
    import { onMount } from 'svelte'

    let canvas: HTMLCanvasElement
    let originalImage: ImageBitmap
    let message: string = ''
    let base64: string = ''

    onMount(() => {
        
    })

    const handleUpload = async (e: Event) => {
        const ctx = canvas.getContext('2d')
        originalImage = await createImageBitmap((e.target as HTMLInputElement).files[0])
        canvas.width = originalImage.width
        canvas.height = originalImage.height
        ctx.drawImage(originalImage, 0, 0)
        base64 = canvas.toDataURL()
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

<div>
    <label>
        Select Image <input type="file" on:change={handleUpload} />
    </label>
    <button on:click={handleEncode}>Encode</button>
    <button on:click={handleDecode}>Decode</button>
    <label for="steganography-message-input">Message</label>
    <textarea bind:value={message} id="steganography-message-input"></textarea>
    <img alt="Steganography" src={base64} />

    <canvas data-testid="canvas" bind:this={canvas}></canvas>
</div>

<style>
    canvas { display: none; }
</style>
