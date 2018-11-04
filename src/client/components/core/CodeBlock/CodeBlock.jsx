import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { style as prism } from 'react-syntax-highlighter/styles/prism';
import classnames from 'classnames';
import styles from './style';

const CodeBlock = ({ language, children, success, warning, danger }) =>
  <SyntaxHighlighter
    language={language}
    style={prism}
    codeTagProps={{style: null, className: classnames(styles['code-block'], {
      [styles.success]: success,
      [styles.warning]: warning,
      [styles.danger]: danger
    })}}
    useInlineStyles={false}
  >
    {children}
  </SyntaxHighlighter>;

CodeBlock.propTypes = {
  language: PropTypes.string,
  children: PropTypes.string,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool
};

export default CodeBlock;