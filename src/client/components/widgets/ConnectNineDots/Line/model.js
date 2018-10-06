export default class Line {
  constructor(origin, length, degrees) {
    this.origin = origin;
    this.length = length;
    this.degrees = degrees;
  }

  static fromEndpoints(start, end) {
    const sq = n => n * n;
    const length = Math.sqrt(sq(end.x - start.x) + sq(end.y - start.y));
    const degrees = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;

    return new Line({ x: start.x, y: start.y }, length, degrees);
  }
}