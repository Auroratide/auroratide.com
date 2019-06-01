import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Container from 'Client/components/core/Container';
import styles from './style';

const Article = ({ children }) =>
  <Container.article className={styles.article}>
    {children}
  </Container.article>;

Article.propTypes = {
  children: PropTypes.node
};

export default Article;