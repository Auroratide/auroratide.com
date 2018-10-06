import { observable, computed } from 'mobx';
import Line from './Line/model';

const point = (x, y) => ({ x, y });

export default class State {
  @observable points = [];

  record(x, y) {
    this.points.push(point(x, y));
  }

  @computed get lines() {
    const lines = [];
    for(let i = 0; i < this.points.length - 1; ++i) {
      lines.push(Line.fromEndpoints(this.points[i], this.points[i + 1]));
    }

    return lines;
  }
}