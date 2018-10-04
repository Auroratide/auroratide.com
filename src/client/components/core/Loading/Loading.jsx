import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Icon from 'Client/components/core/Icon';
import { renderIf } from 'Client/utils/render-if';

import styles from './style';

const Loading = ({ text }) =>
  <div className={styles.loading}>
    <Icon className={styles.icon} icon='hourglass-half' />
    {renderIf(text, () => <h2 className={styles.text}>{text}</h2>)}
  </div>;

Loading.propTypes = {
  text: PropTypes.string
};

export default Loading;