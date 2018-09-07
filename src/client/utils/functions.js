const series = (...funcs) => () => funcs.forEach(f => f());

export default {
  series
};