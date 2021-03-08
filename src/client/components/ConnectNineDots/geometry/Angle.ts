export class Angle {
    public readonly radians: number
    constructor(radians: number) {
        this.radians = radians
    }

    public get degrees(): number {
        return this.radians * 180 / Math.PI
    }
}
