import Point from 'Client/components/widgets/ConnectNineDots/geometry/point';
import Line from 'Client/components/widgets/ConnectNineDots/geometry/line';

describe('Line', () => {
  describe('dot', () => {
    it('should return the dot product', () => {
      const cases = [ {
        a: Line.fromEndpoints(new Point(1, 1), new Point(3, 3)),
        b: Line.fromEndpoints(new Point(5, 1), new Point(1, 2)),
        ans: -6
      }, {
        a: Line.fromEndpoints(new Point(1, 4), new Point(4, 4)),
        b: Line.fromEndpoints(new Point(5, 1), new Point(5, 4)),
        ans: 0
      }, {
        a: Line.fromEndpoints(new Point(1, 5), new Point(4, 4)),
        b: Line.fromEndpoints(new Point(5, 3), new Point(11, 1)),
        ans: 20
      } ];

      cases.forEach(({ a, b, ans }) => {
        expect(a.dot(b)).toBeCloseTo(ans, 3);
      });
    });
  });

  describe('fromEndpoints', () => {
    it('should create a 0-length line when the start and end are the same', () => {
      const start = new Point(1, 2);
      const end = new Point(1, 2);

      const line = Line.fromEndpoints(start, end);

      expect(line.length).toBeCloseTo(0, 2);
    });

    it('should create a line with the proper length and angle', () => {
      const start = new Point(1, 2);
      const end = new Point(3, 4);

      const line = Line.fromEndpoints(start, end);

      expect(line.origin).toEqual(start);
      expect(line.length).toBeCloseTo(2.83, 2);
      expect(line.degrees).toBeCloseTo(45, 2);
    });

    it('should create a line with the proper length and angle when the end point is left of the start point', () => {
      const start = new Point(4, 3);
      const end = new Point(2, 1);

      const line = Line.fromEndpoints(start, end);

      expect(line.origin).toEqual(start);
      expect(line.length).toBeCloseTo(2.83, 2);
      expect(line.degrees).toBeCloseTo(-135, 2);
    });
  });
});