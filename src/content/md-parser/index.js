const Parser = require('./Parser');
const Heading = require('./rules/Heading');
const Paragraph = require('./rules/Paragraph');
const Character = require('./rules/Character');

const rules = [ Heading, Paragraph, Character ];

module.exports = input => {
  return new Parser(input, rules).parse();
};