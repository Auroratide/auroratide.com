import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import ResourceStore from 'Client/store/resource-store';
import PortfolioItem from './PortfolioItem';

import styles from './style';

const PortfolioPage = ({ store }) =>
  <DocumentTitle title='Portfolio'>
    <Container>
      <ContentArea className={styles.items}>{store
        .list()
        .map(project => <PortfolioItem className={styles.item} project={project} key={project.id} />)
      }</ContentArea>
    </Container>
  </DocumentTitle>;

PortfolioPage.propTypes = {
  store: PropTypes.instanceOf(ResourceStore).isRequired
};

export default PortfolioPage;