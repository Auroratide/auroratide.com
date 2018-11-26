import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import State from './state';
import classnames from 'classnames';
import styles from './style';

const Textarea = ({ state, placeholder, className, onChange }) =>
  <textarea
    className={classnames(styles.textarea, className)}
    placeholder={placeholder}
    onChange={e => {
      state.text = e.target.value;
      onChange(e);
    }}
    value={state.text}
  ></textarea>;

Textarea.propTypes = {
  state: PropTypes.instanceOf(State),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

Textarea.defaultProps = {
  state: new State(),
  onChange: () => {}
};

export default Textarea;