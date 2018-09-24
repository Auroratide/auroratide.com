const Parser = require('./Parser');
const Heading = require('./rules/Heading');
const UnorderedList = require('./rules/UnorderedList');
const OrderedList = require('./rules/OrderedList');
const Image = require('./rules/Image');
const Blockquote = require('./rules/Blockquote');
const Paragraph = require('./rules/Paragraph');
const Ignore = require('./rules/Ignore');

const rules = [
  Heading,
  UnorderedList,
  OrderedList,
  Image,
  Blockquote,
  Paragraph,
  Ignore
];

module.exports = input => {
  return new Parser(input, rules).parse();
};