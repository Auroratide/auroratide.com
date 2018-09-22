import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Icon from 'Client/components/core/Icon';
import classnames from 'classnames';
import { renderIf } from 'Client/utils/render-if';

import styles from './style';

const TitleArea = ({ title, color, icon }) =>
  <header className={classnames(styles['title-area'], styles[`color-${color}`])}>
    {renderIf(icon, () => <Icon icon={icon} className={styles.icon} />)}
    <h1 className={styles.title}>{title}</h1>
  </header>;

TitleArea.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string
};

export default TitleArea;