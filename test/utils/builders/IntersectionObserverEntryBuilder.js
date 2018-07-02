import zaha, { is } from 'zaha';

export default zaha({
  boundingClientRect: is.object({}),
  intersectionRatio: is.number(),
  intersectionRect: is.object({}),
  isIntersecting: is.boolean(),
  rootBounds: is.object({}),
  target: is.object({}),
  time: is.int()
});