export enum Format {
    Palette = 'palette',
    Hex = 'hex',
    Rgba = 'rgba',
}

export type PaletteValue = string
export type HexValue = string
export type RgbaValue = {
    r: number, // [0, 255]
    g: number, // [0, 255]
    b: number, // [0, 255]
    a?: number, // [0, 1]
}

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

export const fromJson = (raw: Color) => converters[raw.type](raw.value)
