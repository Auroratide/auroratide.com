const path = require('path');

const basePath = componentPath => path.dirname(componentPath);
const nameFromPath = componentPath => path.basename(componentPath);
const toCamelCase = name => name.charAt(0).toLowerCase() + name.substring(1); 
const toKebabCase = name => toCamelCase(name).replace(/([A-Z0-9])/g, (match, letter) => `-${letter.toLowerCase()}`);

module.exports = {
  basePath,
  nameFromPath,
  toCamelCase,
  toKebabCase
};