import Point from './geometry/point';
import Line from './geometry/line';

export default class State {
  constructor(points, lineLimit = 999) {
    this.points = points;
    this.lineLimit = lineLimit;
  }

  record(x, y) {
    if(this.atLimit)
      throw new Error('ConnectNineDots state has reached its line limit');
    this.points.push(new Point(x, y));
  }

  reset() {
    this.points.clear();
  }

  intersectsAllCircles(circles) {
    const lines = this.lines;
    return circles.every(circle => lines.some(line => circle.intersects(line)));
  }

  get lines() {
    const lines = [];
    for(let i = 0; i < this.points.length - 1; ++i) {
      lines.push(Line.fromEndpoints(this.points.get(i), this.points.get(i + 1)));
    }

    return lines;
  }

  get lastPoint() {
    return this.points.get(this.points.length - 1);
  }

  get atLimit() {
    return this.points.length >= this.lineLimit + 1;
  }
}