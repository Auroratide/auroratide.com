import State from 'Client/components/widgets/ConnectNineDots/state';
import Circle from 'Client/components/widgets/ConnectNineDots/geometry/circle';
import Point from 'Client/components/widgets/ConnectNineDots/geometry/point';

describe('ConnectNineDots state', () => {
  describe('record', () => {
    it('should remember the most recently recorded points, in order', () => {
      const state = new State();

      state.record(1, 2);
      state.record(3, 4);

      expect(state.points[0]).toEqual({ x: 1, y: 2 });
      expect(state.points[1]).toEqual({ x: 3, y: 4 });
    });

    it('should not allow any more points to be recorded when the line limit has been reached', () => {
      const state = new State(1);

      state.record(1, 2);
      state.record(3, 4);

      expect(() => state.record(5, 6)).toThrow();
      expect(state.points).toHaveLength(2);
    });
  });

  describe('reset', () => {
    it('should clear the array of points', () => {
      const state = new State();
      state.points = [{ x: 1, y: 2 }, { x: 3, y: 4 }];

      state.reset();

      expect(state.points).toHaveLength(0);
    });
  });

  describe('intersectsAllCircles', () => {
    let state;
    let circles;

    beforeEach(() => {
      state = new State();
      circles = [
        new Circle(new Point(5, 5), 1),
        new Circle(new Point(10, 10), 1)
      ];
    });

    it('should return false when there are no lines', () => {
      expect(state.intersectsAllCircles(circles)).toBe(false);
    });

    it('should return false when the lines do not intersect the circles', () => {
      state.record(1, 1);
      state.record(3, 1);
      state.record(5, 1);

      expect(state.intersectsAllCircles(circles)).toBe(false);
    });

    it('should return false when the lines intersect some of the circles but not all', () => {
      state.record(1, 1);
      state.record(5, 5);
      state.record(5, 7);

      expect(state.intersectsAllCircles(circles)).toBe(false);
    });

    it('should return true when the lines intersect all the circles', () => {
      state.record(1, 1);
      state.record(5, 5);
      state.record(10, 10);

      expect(state.intersectsAllCircles(circles)).toBe(true);
    });
  });

  describe('lines', () => {
    let state;

    beforeEach(() => {
      state = new State();
    });

    it('should return empty list when there are 0 or 1 recorded points', () => {
      expect(state.lines).toHaveLength(0);

      state.record(1, 2);
      expect(state.lines).toHaveLength(0);
    });

    it('should return a line when there are two points', () => {
      state.record(1, 2);
      state.record(3, 4);

      expect(state.lines).toHaveLength(1);
      expect(state.lines[0].origin).toEqual({ x: 1, y: 2 });
    });

    it('should return lines for consecutive pairs of points', () => {
      state.record(1, 2);
      state.record(3, 4);
      state.record(5, 6);

      expect(state.lines).toHaveLength(2);
      expect(state.lines[0].origin).toEqual({ x: 1, y: 2 });
      expect(state.lines[1].origin).toEqual({ x: 3, y: 4 });
    });
  });

  describe('lastPoint', () => {
    let state;

    beforeEach(() => {
      state = new State();
    });

    it('should return nothing when there is no last point', () => {
      expect(state.lastPoint).toBeFalsy();
    });

    it('should return the last recorded point', () => {
      state.record(1, 2);
      expect(state.lastPoint.x).toEqual(1);
      expect(state.lastPoint.y).toEqual(2);

      state.record(3, 4);
      expect(state.lastPoint.x).toEqual(3);
      expect(state.lastPoint.y).toEqual(4);
    });
  });
});