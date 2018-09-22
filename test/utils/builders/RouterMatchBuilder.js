import zaha, { is } from 'zaha';

export default zaha({
  params: is.object(),
  isExact: is.boolean(),
  path: is.string(),
  url: is.string()
});