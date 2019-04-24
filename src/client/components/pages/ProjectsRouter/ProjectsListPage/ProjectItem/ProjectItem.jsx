import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Link from 'Client/components/core/Link';
import { UrlBuilder } from 'Client/config/links';

import styles from './style';

const ProjectItem = ({ project, className }) =>
  <Link to={new UrlBuilder().project(project.id)} title={project.title} className={className}>
    <article>
      <img src={project.image} />
      <div className={styles['text-area']}>
        <h1>{project.title}</h1>
      </div>
    </article>
  </Link>;

ProjectItem.propTypes = {
  project: PropTypes.project.isRequired,
  className: PropTypes.string
};

export default ProjectItem;