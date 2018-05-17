import zaha, { is } from 'zaha';

export default zaha({
  key: is.string(),
  pathname: is.string(),
  search: is.string(),
  hash: is.string(),
  state: is.object({})
});