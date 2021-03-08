export class Steganographer {
    public encode(imageData: ImageData, message: string): ImageData {
        const data = imageData.data

        let i = 0;
        const increment = () => i += i % 4 === 2 ? 2 : 1;
        const setBits = (bits) => {
            if(i < data.length)
                data[i] = (data[i] & 0xFC) | bits;
            increment()
        }

        message.split('').forEach(letter => {
            const code = letter.charCodeAt(0);
            setBits(code >> 6);
            setBits((code >> 4) & 0x03);
            setBits((code >> 2) & 0x03);
            setBits(code & 0x03);
        })

        if (i > data.length) {
            throw new Error(`Message with length ${i} cannot fit in image of size ${data.length}.`)
        } else {
            return imageData
        }
    }

    public decode(imageData: ImageData): string {
        const data = imageData.data
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

        return decodedMessage
    }
}
