import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Link from 'Client/components/core/Link';
import { UrlBuilder } from 'Client/config/links';
import classnames from 'classnames';

import styles from './style';

const PortfolioItem = ({ project, className }) =>
  <Link to={new UrlBuilder().portfolioItem(project.id)} title={project.title} className={classnames(styles['portfolio-item'], className)}>
    <article>
      <div className={styles.image} style={{ backgroundImage: `url(${project.image})`}} />
      <div className={styles['text-area']}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.byline}>
          <span>{project.dateRange}</span>
          <span className={styles.bullet}>&bull;</span>
          <span>{project.category}</span>
        </div>
      </div>
    </article>
  </Link>;

PortfolioItem.propTypes = {
  project: PropTypes.project.isRequired,
  className: PropTypes.string
};

export default PortfolioItem;