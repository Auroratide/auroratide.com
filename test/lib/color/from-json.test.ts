import { describe, test, expect } from 'vitest'
import * as color from '../../../src/lib/design/color'

describe('color from json', () => {
    describe('palette', () => {
        test('palette', () => {
            const result = color.fromJson({
                type: color.Format.Palette,
                value: 'fablepink',
            })
    
            expect(result).toEqual('var(--skin-fablepink-banner)')
        })

        test('old format (using hyphens)', () => {
            const result = color.fromJson({
                type: color.Format.Palette,
                value: 'fable-pink',
            })
    
            expect(result).toEqual('var(--skin-fablepink-banner)')
        })
    })

    test('brand', () => {
        const result = color.fromJson({
            type: color.Format.Brand,
            value: 'github',
        })

        expect(result).toEqual('var(--brand-github)')
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

    describe('backward compatibility', () => {
        test('palette string', () => {
            const result = color.fromJson('fable-pink')
    
            expect(result).toEqual('var(--skin-fablepink-banner)')
        })

        test('brand string', () => {
            const result = color.fromJson('github')
    
            expect(result).toEqual('var(--brand-github)')
        })
    })
})