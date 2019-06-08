export const ADD_ALL = 'ResourceContext::ADD_ALL';
export const addAll = items => ( {
  type: ADD_ALL,
  items
} );
const reduceAddAll = (state, payload) => {
  const result = { ...state };
  payload.items.forEach(item => {
    if(!result[item.id])
      result[item.id] = item;
  });
  return result;
};

export const UPDATE = 'ResourceContext::UPDATE';
export const update = item => ( {
  type: UPDATE,
  item
} );
const reduceUpdate = (state, payload) => ( {
  ...state,
  [payload.item.id]: payload.item
} );

export default (state, { type, ...payload }) => {
  switch(type) {
    case ADD_ALL: return reduceAddAll(state, payload);
    case UPDATE: return reduceUpdate(state, payload);
    default: return state;
  }
};