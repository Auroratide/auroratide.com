import type { Point } from './Point'
import { Angle } from './Angle'

export class Line {
    public readonly origin: Point
    public readonly length: number
    public readonly angle: Angle
    constructor(origin: Point, length: number, angle: Angle) {
        this.origin = origin
        this.length = length
        this.angle = angle
    }

    public dot(other: Line): number {
        const ra = this.length
        const rb = other.length
        const ta = this.angle.radians
        const tb = other.angle.radians

        return ra * rb * Math.cos(ta - tb)
    }

    static fromEndpoints(start: Point, end: Point): Line {
        const sq = (n: number) => n * n
        const length = Math.sqrt(sq(end.x - start.x) + sq(end.y - start.y))
        const radians = Math.atan2(end.y - start.y, end.x - start.x)

        return new Line(start, length, new Angle(radians))
    }
}
