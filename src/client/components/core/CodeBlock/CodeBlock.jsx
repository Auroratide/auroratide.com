import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/prism-light';
import prism from 'react-syntax-highlighter/dist/styles/prism/prism';
import classnames from 'classnames';
import languages from './languages';
import styles from './style';

for(const [name, language] of Object.entries(languages)) {
  registerLanguage(name, language);
}

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