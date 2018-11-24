import { debounce as debounceLib } from 'debounce';

const debounce = debounceLib;
debounce.event = (fn, time) => {
  const db = debounceLib(fn, time);
  return e => {
    e.persist();
    db(e);
  };
};

export default debounce;