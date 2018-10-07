import { observable, computed } from 'mobx';
import Point from './geometry/point';
import Line from './geometry/line';

export default class State {
  @observable points = [];

  constructor(lineLimit = 999) {
    this.lineLimit = lineLimit;
  }

  record(x, y) {
    if(this.atLimit)
      throw new Error('ConnectNineDots state has reached its line limit');
    this.points.push(new Point(x, y));
  }

  reset() {
    this.points = [];
  }

  intersectsAllCircles(circles) {
    const lines = this.lines;
    return circles.every(circle => lines.some(line => circle.intersects(line)));
  }

  @computed get lines() {
    const lines = [];
    for(let i = 0; i < this.points.length - 1; ++i) {
      lines.push(Line.fromEndpoints(this.points[i], this.points[i + 1]));
    }

    return lines;
  }

  @computed get lastPoint() {
    return this.points[this.points.length - 1];
  }

  @computed get atLimit() {
    return this.points.length >= this.lineLimit + 1;
  }
}