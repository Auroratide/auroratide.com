import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { style as prism } from 'react-syntax-highlighter/styles/prism';
import styles from './style';

const CodeBlock = ({ language, children }) =>
  <SyntaxHighlighter
    language={language}
    style={prism}
    codeTagProps={{style: null, className: styles['code-block']}}
    useInlineStyles={false}
  >
    {children}
  </SyntaxHighlighter>;

CodeBlock.propTypes = {
  language: PropTypes.string,
  children: PropTypes.string
};

export default CodeBlock;