import type {
    HexValue,
    RgbaValue,
} from './types'

export enum Format {
    Palette = 'palette',
    Brand = 'brand',
    Hex = 'hex',
    Rgba = 'rgba',
}

export type PaletteValue = string

export type BrandValue = string

export type Value = PaletteValue | HexValue | RgbaValue

export type Color = {
    type: Format.Palette,
    value: PaletteValue,
} | {
    type: Format.Brand,
    value: BrandValue,
} | {
    type: Format.Hex,
    value: HexValue,
} | {
    type: Format.Rgba,
    value: RgbaValue,
}

const converters = {
    [Format.Palette]: (value: PaletteValue) => `var(--skin-${value.replace('-', '')}-banner)`,
    [Format.Brand]: (value: BrandValue) => `var(--brand-${value})`,
    [Format.Hex]: (value: HexValue) => `#${value}`,
    [Format.Rgba]: (value: RgbaValue) => `rgba(${value.r}, ${value.g}, ${value.b}, ${value.a ?? 1})`,
} as const

const backwardCompatibility = (value: string) => {
    if (['aurora', 'autumn', 'fable', 'livian', 'aella', 'winter', 'eventide'].some(name => value.includes(name))) {
        return converters[Format.Palette](value)
    } else {
        return converters[Format.Brand](value)
    }
}

export const fromJson = (raw: Color | string) => {
    if (typeof raw === 'string') {
        return backwardCompatibility(raw)
    } else {
        if (raw.type === Format.Rgba) { // whatever typescript, whatever
            return converters[Format.Rgba](raw.value)
        } else {
            return converters[raw.type](raw.value)
        }
    }
}
