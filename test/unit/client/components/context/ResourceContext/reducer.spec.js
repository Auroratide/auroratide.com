import reducer, { addAll, update } from 'Client/components/context/ResourceContext/reducer';

describe('Resource Context reducer', () => {
  let id;
  let item;

  beforeEach(() => {
    id = '1';
    item = { id };
  });

  describe('addAll', () => {
    it('should return same state when there are no items to add', () => {
      const state = { [id]: item };

      expect(reducer(state, addAll([]))).toEqual(state);
    });

    it('should add items into the state by key if they do not exist', () => {
      const state = { [id]: item };
      const newItem = { id: '2' };

      expect(reducer(state, addAll([newItem]))).toEqual({
        [id]: item,
        '2': newItem
      });
    });

    it('should not override items already in the state', () => {
      const state = { [id]: item };
      const overrideItem = { id, field: 'value' };

      expect(reducer(state, addAll([overrideItem]))).toEqual(state);
    });
  });

  describe('update', () => {
    it('should add item to the state if it is not already there', () => {
      const state = {};

      expect(reducer(state, update(item))).toEqual({
        [id]: item
      });
    });

    it('should override the item if it is already in the state', () => {
      const state = { [id]: item };
      const overrideItem = { id, field: 'value' };

      expect(reducer(state, update(overrideItem))).toEqual({
        [id]: overrideItem
      });
    });
  });
});