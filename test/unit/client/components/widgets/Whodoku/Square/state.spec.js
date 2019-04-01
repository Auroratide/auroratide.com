import State from 'Client/components/widgets/Whodoku/Square/state';

describe('Whodoku Square state', () => {
  let state;

  beforeEach(() => {
    state = new State();
  });

  describe('increment', () => {
    it('should increment the square value by one', () => {
      state.value = 2;

      state.increment();

      expect(state.value).toEqual(3);
    });

    it('should set square value to 1 when it is empty', () => {
      state.value = null;

      state.increment();

      expect(state.value).toEqual(1);
    });

    it('should set square value to null when the state is 9', () => {
      state.value = 9;

      state.increment();

      expect(state.value).toBeNull();
    });
  });
});