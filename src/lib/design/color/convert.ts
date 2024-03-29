import type { RgbaValue, HslaValue } from './types'

export const hexToRgb = (hex: number): RgbaValue => {
    return {
        r: hex >> 16,
        g: (hex >> 8) & 0xff,
        b: hex & 0xff,
    }
}

export const hexToHsl = (hex: number): HslaValue => {
    const rgb = hexToRgb(hex)
    const r = rgb.r / 255.0
    const g = rgb.g / 255.0
    const b = rgb.b / 255.0

    const cmax = Math.max(r, g, b)
    const cmin = Math.min(r, g, b)
    const dc = cmax - cmin

    let h = 0
    if (dc === 0) {
        h = 0
    } else if (cmax === r) {
        h = ((g - b) / dc) % 6
    } else if (cmax === g) {
        h = (b - r) / dc + 2
    } else {
        h = (r - g) / dc + 4
    }

    let l = (cmax + cmin) / 2
    let s = dc === 0 ? 0 : dc / (1 - Math.abs(2 * l - 1))

    return {
        h: Math.round(60 * (h < 0 ? h + 6 : h)),
        s: Math.round(100 * s),
        l: Math.round(100 * l),
    }
}

// https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
export const hslToHex = ({h, s, l}: HslaValue): number => {
    l /= 100
    const a = s * Math.min(l, 1 - l) / 100
    const f = (n: number) => {
        const k = (n + h / 30) % 12
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
        return Math.round(255 * color)
    }

    return (f(0) << 16) + (f(8) << 8) + f(4)
}
