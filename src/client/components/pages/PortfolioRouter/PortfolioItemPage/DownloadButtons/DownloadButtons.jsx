import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Button from 'Client/components/core/Button';
import Link from 'Client/components/core/Link';
import Icon from 'Client/components/core/Icon';
import { renderIf } from 'Client/utils/render-if';
import styles from './style';

const DownloadButtons = ({ links }) =>
  <React.Fragment>
    {links.map(link => <span className={styles.spacing} key={link.title}>
      <Button primary newTab tag={Link} to={link.href} color={link.color} className={styles.button}>
        {link.title}{renderIf(link.icon, () => <Icon icon={link.icon} className={styles.icon} />)}
      </Button>
    </span>)}
  </React.Fragment>;

DownloadButtons.propTypes = {
  links: PropTypes.arrayOf(PropTypes.projectDownloadLink)
};

DownloadButtons.defaultProps = {
  links: []
};

export default DownloadButtons;