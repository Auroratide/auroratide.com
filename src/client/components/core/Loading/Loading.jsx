import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Icon from 'Client/components/core/Icon';
import { renderIf } from 'Client/utils/render-if';

import classnames from 'classnames';
import styles from './style';

const Loading = ({ text, className }) =>
  <div className={classnames(styles.loading, className)}>
    <Icon className={styles.icon} icon='hourglass-half' />
    {renderIf(text, () => <h2 className={styles.text}>{text}</h2>)}
  </div>;

Loading.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export default Loading;