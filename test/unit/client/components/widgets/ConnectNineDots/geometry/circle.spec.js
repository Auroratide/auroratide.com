import Point from 'Client/components/widgets/ConnectNineDots/geometry/point';
import Line from 'Client/components/widgets/ConnectNineDots/geometry/line';
import Circle from 'Client/components/widgets/ConnectNineDots/geometry/circle';

describe('Circle', () => {
  describe('intersects', () => {
    it('should return true when the line intersects the circle', () => {
      const cases = [ {
        circle: new Circle(new Point(4, 5), 2),
        line: Line.fromEndpoints(new Point(3, 2), new Point(7, 7))
      }, {
        circle: new Circle(new Point(4, 5), 2),
        line: Line.fromEndpoints(new Point(7, 7), new Point(3, 2))
      }, {
        circle: new Circle(new Point(10, 2), 1),
        line: Line.fromEndpoints(new Point(8, 2), new Point(11, 2))
      }, {
        circle: new Circle(new Point(10, 2), 1),
        line: Line.fromEndpoints(new Point(9, 3), new Point(11, 3))
      } ];

      cases.forEach(({ circle, line }) => {
        expect(circle.intersects(line)).toBe(true);
      });
    });

    it('should return false when the line fails to intersect the circle', () => {
      const cases = [ {
        circle: new Circle(new Point(4, 5), 2),
        line: Line.fromEndpoints(new Point(1, 6), new Point(2, 10))
      }, {
        circle: new Circle(new Point(4, 5), 2),
        line: Line.fromEndpoints(new Point(4, 1), new Point(4, 2))
      }, {
        circle: new Circle(new Point(10, 2), 1),
        line: Line.fromEndpoints(new Point(12, 2), new Point(9, 5))
      }, {
        circle: new Circle(new Point(10, 2), 1),
        line: Line.fromEndpoints(new Point(12, 2), new Point(14, 3))
      } ];

      cases.forEach(({ circle, line }) => {
        expect(circle.intersects(line)).toBe(false);
      });
    });
  });
});