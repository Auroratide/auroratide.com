import { Point } from './geometry/Point'
import { Line } from './geometry/Line'
import type { Circle } from './geometry/Circle'

export class LineMaker {
    private points: Point[]
    private limit: number
    constructor(points: Point[], limit: number) {
        this.points = points
        this.limit = limit
    }

    public record(x: number, y: number): LineMaker {
        return new LineMaker([...this.points, new Point(x, y)], this.limit)
    }

    public reset(): LineMaker {
        return new LineMaker([], this.limit)
    }

    public intersectsAll(circles: Circle[]): boolean {
        return circles.every(circle => this.lines.some(line => circle.intersects(line)))
    }

    public get lines(): Line[] {
        const lines: Line[] = []
        for(let i = 0; i < this.points.length - 1; ++i) {
            lines.push(Line.fromEndpoints(this.points[i], this.points[i + 1]))
        }

        return lines
    }

    public get lastPoint(): Point {
        return this.points[this.points.length - 1]
    }

    public get atLimit(): boolean {
        return this.points.length >= this.limit + 1
    }
}
