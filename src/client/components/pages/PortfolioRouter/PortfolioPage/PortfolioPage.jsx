import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import PortfolioItem from './PortfolioItem';

import styles from './style';

const PortfolioPage = ({ resource }) =>
  <DocumentTitle title='Portfolio'>
    <Container>
      <ContentArea className={styles.items}>{resource
        .list()
        .map(project => <PortfolioItem className={styles.item} project={project} key={project.id} />)
      }</ContentArea>
    </Container>
  </DocumentTitle>;

PortfolioPage.propTypes = {
  resource: PropTypes.shape({
    list: PropTypes.func
  })
};

export default PortfolioPage;