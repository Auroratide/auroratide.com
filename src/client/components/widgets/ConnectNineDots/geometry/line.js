import Point from './point';

export default class Line {
  constructor(origin, length, degrees) {
    this.origin = origin;
    this.length = length;
    this.degrees = degrees;
  }

  get radians() {
    return this.degrees * Math.PI / 180;
  }

  dot(other) {
    const ra = this.length;
    const rb = other.length;
    const ta = this.radians;
    const tb = other.radians;

    return ra * rb * Math.cos(ta - tb);
  }

  static fromEndpoints(start, end) {
    const sq = n => n * n;
    const length = Math.sqrt(sq(end.x - start.x) + sq(end.y - start.y));
    const degrees = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;

    return new Line(new Point(start.x, start.y), length, degrees);
  }
}