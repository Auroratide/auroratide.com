import State from 'Client/components/widgets/ConnectNineDots/state';

describe('ConnectNineDots state', () => {
  describe('record', () => {
    it('should remember the most recently recorded points, in order', () => {
      const state = new State();

      state.record(1, 2);
      state.record(3, 4);

      expect(state.points[0]).toEqual({ x: 1, y: 2 });
      expect(state.points[1]).toEqual({ x: 3, y: 4 });
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
});