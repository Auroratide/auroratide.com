import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import RconRenderer from 'Client/components/core/RconRenderer';

import styles from './style';

const Content = ({ project }) =>
  <div>
    <span className={styles['minor-title']}>{project.dateRange}</span>
    <RconRenderer rcon={project.summary || []} />
    <RconRenderer rcon={project.content || []} />
  </div>;

Content.propTypes = {
  project: PropTypes.project.isRequired
};

export default Content;