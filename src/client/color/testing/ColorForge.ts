import type { Color } from '../from-json'
import { Format } from '../from-json'

export class ColorForge {
    palette(value: string): Color {
        return {
            type: Format.Palette,
            value,
        }
    }

    hex(value: string): Color {
        return {
            type: Format.Hex,
            value,
        }
    }

    rgba(r: number, g: number, b: number, a: number = 1): Color {
        return {
            type: Format.Rgba,
            value: { r, g, b, a }
        }
    }
}