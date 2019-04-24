import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import ResourceStore from 'Client/store/resource-store';
import ProjectItem from './ProjectItem';

import styles from './style';

const ProjectsListPage = ({ store }) =>
  <DocumentTitle title='Projects'>
    <Container>
      <ContentArea className={styles.items}>{store
        .list()
        .map(project => <ProjectItem className={styles.item} project={project} key={project.id} />)
      }</ContentArea>
    </Container>
  </DocumentTitle>;

ProjectsListPage.propTypes = {
  store: PropTypes.instanceOf(ResourceStore).isRequired
};

export default ProjectsListPage;