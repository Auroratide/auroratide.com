const Parser = require('./Parser');
const Heading = require('./rules/Heading');
const HorizontalFlex = require('./rules/HorizontalFlex');
const UnorderedList = require('./rules/UnorderedList');
const OrderedList = require('./rules/OrderedList');
const Component = require('./rules/Component');
const Image = require('./rules/Image');
const CodeBlock = require('./rules/CodeBlock');
const InfoBlock = require('./rules/InfoBlock');
const Blockquote = require('./rules/Blockquote');
const HorizontalRule = require('./rules/HorizontalRule');
const Paragraph = require('./rules/Paragraph');
const Ignore = require('./rules/Ignore');

const rules = [
  Heading,
  HorizontalFlex,
  UnorderedList,
  OrderedList,
  Component,
  Image,
  CodeBlock,
  InfoBlock,
  Blockquote,
  HorizontalRule,
  Paragraph,
  Ignore
];

module.exports = input => {
  return new Parser(input, rules).parse();
};