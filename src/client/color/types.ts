export type HexValue = string
export type RgbaValue = {
    r: number, // [0, 255]
    g: number, // [0, 255]
    b: number, // [0, 255]
    a?: number, // [0, 1]
}
export type HslaValue = {
    h: number, // [0, 360)
    s: number, // [0, 100]
    l: number, // [0, 100]
    a?: number, // [0, 1]
}