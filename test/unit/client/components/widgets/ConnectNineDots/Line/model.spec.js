import Line from 'Client/components/widgets/ConnectNineDots/Line/model';

describe('Line Model', () => {
  describe('fromEndpoints', () => {
    it('should create a 0-length line when the start and end are the same', () => {
      const start = { x: 1, y: 2 };
      const end = { x: 1, y: 2 };

      const line = Line.fromEndpoints(start, end);

      expect(line.length).toBeCloseTo(0, 2);
    });

    it('should create a line with the proper length and angle', () => {
      const start = { x: 1, y: 2 };
      const end = { x: 3, y: 4 };

      const line = Line.fromEndpoints(start, end);

      expect(line.origin).toEqual(start);
      expect(line.length).toBeCloseTo(2.83, 2);
      expect(line.degrees).toBeCloseTo(45, 2);
    });

    it('should create a line with the proper length and angle when the end point is left of the start point', () => {
      const start = { x: 4, y: 3 };
      const end = { x: 2, y: 1 };

      const line = Line.fromEndpoints(start, end);

      expect(line.origin).toEqual(start);
      expect(line.length).toBeCloseTo(2.83, 2);
      expect(line.degrees).toBeCloseTo(-135, 2);
    });
  });
});