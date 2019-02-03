const { Parser } = require('md-reactor/parsing');
const InfoBlock = require('./rules/InfoBlock');
const HorizontalFlex = require('./rules/HorizontalFlex');
const CodeBlock = require('./rules/CodeBlock');
const StegoBody = require('./rules/StegoBody');

const Link = require('./rules/Link');
const ColoredText = require('./rules/ColoredText');

module.exports = input => {
  return Parser
    .withBlockRules([ HorizontalFlex, InfoBlock, CodeBlock, StegoBody ])
    .withInlineRules([ Link, ColoredText ])
    .parse(input);
};