import Flatted from 'flatted';

// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
const hashString = (str) => {
  let hash = 0;
  let i;
  let chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const hashObject = (obj) => {
  return hashString(Flatted.stringify(obj));
};

export default {
  string: hashString,
  object: hashObject
};