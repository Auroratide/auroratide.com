import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import TitleArea from './TitleArea';
import Content from './Content';
import DownloadButtons from './DownloadButtons';
import ResourceStore from 'Client/store/resource-store';

import styles from './style';

const ProjectPage = ({ item }) =>
  <DocumentTitle title={item.title}>
    <Container.article>
      <TitleArea title={item.title} image={item.image} />
      <ContentArea white className={styles.content}>
        <DownloadButtons links={item.links} />
        <Content project={item} />
      </ContentArea>
    </Container.article>
  </DocumentTitle>;

ProjectPage.propTypes = {
  item: PropTypes.project.isRequired,
  store: PropTypes.instanceOf(ResourceStore).isRequired
};

export default ProjectPage;