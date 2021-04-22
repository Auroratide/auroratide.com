import type { Point } from './Point'
import { Line } from './Line'

export class Circle {
    private center: Point
    private radius: number
    constructor(center: Point, radius: number) {
        this.center = center
        this.radius = radius
    }

    public intersects(line: Line) {
        // https://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm
        const TOLERANCE = 0.0001
    
        const circleLine = Line.fromEndpoints(this.center, line.origin)
    
        const a = line.dot(line)
        const b = 2 * circleLine.dot(line)
        const c = circleLine.dot(circleLine) - this.radius * this.radius
        const discriminant = b*b - 4*a*c + TOLERANCE
    
        if (discriminant < 0) {
            return false
        } else {
            const t1 = (-b - Math.sqrt(discriminant)) / (2 * a)
            const t2 = (-b + Math.sqrt(discriminant)) / (2 * a)
        
            return (0 <= t1 && t1 <= 1) || (0 <= t2 && t2 <= 1)
        }
    }
}
