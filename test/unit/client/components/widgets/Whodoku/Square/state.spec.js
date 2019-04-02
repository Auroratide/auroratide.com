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

  describe('reset', () => {
    it('should reset the square value to null', () => {
      state.value = 6;

      state.reset();

      expect(state.value).toBeNull();
    });

    it('should not reset the square value if the square cannot be edited', () => {
      state.value = 6;
      state.canBeEdited = false;

      state.reset();

      expect(state.value).toEqual(6);
    });
  });
});