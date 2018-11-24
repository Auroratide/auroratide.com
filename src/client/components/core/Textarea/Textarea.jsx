import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import State from './state';
import styles from './style';

const Textarea = ({ state, placeholder, onChange }) =>
  <textarea
    className={styles.textarea}
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
  onChange: PropTypes.func
};

Textarea.defaultProps = {
  state: new State()
};

export default Textarea;