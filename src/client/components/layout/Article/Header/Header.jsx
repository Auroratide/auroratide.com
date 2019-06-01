import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Icon from 'Client/components/core/Icon';
import { renderIf } from 'Client/utils/render-if';

import classnames from 'classnames';
import styles from './style';

const Header = ({ title, color, icon, image }) =>
  <header
    className={classnames(
      styles.header,
      styles[`color-${color}`],
      { [styles['with-image']]: image }
    )} style={{ backgroundImage: image ? `url(${image})` : 'none'}}
  >
    {renderIf(icon, () => <Icon icon={icon} className={styles.icon} />)}
    <h1 className={styles.title}>{title}</h1>
  </header>;

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.color,
  icon: PropTypes.string,
  image: PropTypes.string
};

export default Header;