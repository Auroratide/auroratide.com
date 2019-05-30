import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const Layer = ({ title, text, className }) =>
  <div className={classnames(styles.layer, className)}>
    <strong>{title}</strong>
    <p>{text}</p>
  </div>;

Layer.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
};

export default Layer;