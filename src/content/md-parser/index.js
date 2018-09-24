const Parser = require('./Parser');
const Heading = require('./rules/Heading');
const UnorderedList = require('./rules/UnorderedList');
const Paragraph = require('./rules/Paragraph');
const Ignore = require('./rules/Ignore');

const rules = [ Heading, UnorderedList, Paragraph, Ignore ];

module.exports = input => {
  return new Parser(input, rules).parse();
};