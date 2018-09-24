const Parser = require('./Parser');
const Heading = require('./rules/Heading');
const Paragraph = require('./rules/Paragraph');
const Ignore = require('./rules/Ignore');

const rules = [ Heading, Paragraph, Ignore ];

module.exports = input => {
  return new Parser(input, rules).parse();
};