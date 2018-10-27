import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DateDisplay from 'Client/components/core/DateDisplay';
import StandardTypography from 'Client/components/layout/StandardTypography';
import RconRenderer from 'Client/components/core/RconRenderer';

import styles from './style';

const Content = ({ post }) =>
  <div>
    <DateDisplay className={styles.date} date={new Date(post.publishedAt)} />
    <StandardTypography>
      <RconRenderer rcon={post.content || []} />
    </StandardTypography>
  </div>;

Content.propTypes = {
  post: PropTypes.post.isRequired
};

export default Content;