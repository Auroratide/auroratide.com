import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Figure from 'Client/components/core/Figure';
import RconRenderer from 'Client/components/core/RconRenderer';

import styles from './style';

const Content = ({ project }) =>
  <div className={styles.content}>
    <div className={styles.main}>
      <span className={styles['minor-title']}>{project.dateRange}</span>
      <RconRenderer rcon={project.summary || []} />
      <RconRenderer rcon={project.content || []} />
    </div>
    <aside className={styles.sidebar}>
      <h2 className={styles['more-title']}>Some Pics</h2>
      <div className={styles.gallery}>
        {project.gallery.map(img =>
          <Figure
            className={styles.image}
            src={img.image}
            key={img.image}
            alt={img.caption}
            caption={img.caption}
            size='lg'
          />
        )}
      </div>
    </aside>
  </div>;

Content.propTypes = {
  project: PropTypes.project.isRequired
};

export default Content;