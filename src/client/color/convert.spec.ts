import { hexToRgb, hexToHsl } from '.'

describe('color conversion', () => {
    describe('hex to rgb', () => {
        it('black', () => {
            expect(hexToRgb(0x000000)).toEqual({
                r: 0,
                g: 0,
                b: 0,
            })
        })

        it('white', () => {
            expect(hexToRgb(0xffffff)).toEqual({
                r: 255,
                g: 255,
                b: 255,
            })
        })

        it('other colors', () => {
            expect(hexToRgb(0x123456)).toEqual({
                r: 18,
                g: 52,
                b: 86,
            })

            expect(hexToRgb(0x654321)).toEqual({
                r: 101,
                g: 67,
                b: 33,
            })
        })
    })

    describe('hex to hsl', () => {
        it('black', () => {
            expect(hexToHsl(0x000000)).toEqual({
                h: 0,
                s: 0,
                l: 0,
            })
        })

        it('white', () => {
            expect(hexToHsl(0xffffff)).toEqual({
                h: 0,
                s: 0,
                l: 100,
            })
        })

        it('other colors', () => {
            expect(hexToHsl(0x123456)).toEqual({
                h: 210,
                s: 65,
                l: 20,
            })

            expect(hexToHsl(0x654321)).toEqual({
                h: 30,
                s: 51,
                l: 26,
            })

            expect(hexToHsl(0xbe2c38)).toEqual({
                h: 355,
                s: 62,
                l: 46,
            })
        })
    })
})