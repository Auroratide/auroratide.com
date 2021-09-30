import type {
    HexValue,
    RgbaValue,
} from './types'

export enum Format {
    Palette = 'palette',
    Hex = 'hex',
    Rgba = 'rgba',
}

export type PaletteValue = string

export type Value = PaletteValue | HexValue | RgbaValue

export type Color = {
    type: Format,
    value: Value,
}

const converters: Record<Format, (value: Value) => string> = {
    [Format.Palette]: (value: PaletteValue) => `var(--palette-${value})`,
    [Format.Hex]: (value: HexValue) => `#${value}`,
    [Format.Rgba]: (value: RgbaValue) => `rgba(${value.r}, ${value.g}, ${value.b}, ${value.a ?? 1})`,
}

export const fromJson = (raw: Color | string) => {
    if (typeof raw === 'string') {
        return converters[Format.Palette](raw)
    } else {
        return converters[raw.type](raw.value)
    }
}
