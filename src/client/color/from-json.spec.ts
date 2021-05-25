import * as color from '.'

describe('color from json', () => {
    test('palette', () => {
        const result = color.fromJson({
            type: color.Format.Palette,
            value: 'fable-pink',
        })

        expect(result).toEqual('var(--palette-fable-pink)')
    })

    test('hex', () => {
        const result = color.fromJson({
            type: color.Format.Hex,
            value: '789abc',
        })

        expect(result).toEqual('#789abc')
    })

    test('rgba', () => {
        const result = color.fromJson({
            type: color.Format.Rgba,
            value: {
                r: 125,
                g: 144,
                b: 27,
                a: 0.75,
            },
        })

        expect(result).toEqual('rgba(125, 144, 27, 0.75)')
    })

    test('rgba without alpha', () => {
        const result = color.fromJson({
            type: color.Format.Rgba,
            value: {
                r: 125,
                g: 144,
                b: 27,
            },
        })

        expect(result).toEqual('rgba(125, 144, 27, 1)')
    })
})