import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const Textarea = ({ text, placeholder, className, onChange }) =>
  <textarea
    className={classnames(styles.textarea, className)}
    placeholder={placeholder}
    onChange={e => onChange(e.target.value)}
    value={text}
  ></textarea>;

Textarea.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

Textarea.defaultProps = {
  onChange: () => {}
};

export default Textarea;