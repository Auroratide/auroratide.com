import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Button from 'Client/components/core/Button';
import Link from 'Client/components/core/Link';
import Icon from 'Client/components/core/Icon';
import { renderIf } from 'Client/utils/render-if';
import styles from './style';

const DownloadButtons = ({ links }) =>
  <div className={styles.buttons}>
    {links.map(link => <Button primary newTab tag={Link} to={link.href} className={styles.button} key={link.title}>
      {link.title}{renderIf(link.icon, () => <Icon icon={link.icon} className={styles.icon} />)}
    </Button>)}
  </div>;

DownloadButtons.propTypes = {
  links: PropTypes.arrayOf(PropTypes.projectDownloadLink)
};

DownloadButtons.defaultProps = {
  links: []
};

export default DownloadButtons;