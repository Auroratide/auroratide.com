import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import ResourceStore from 'Client/store/resource-store';

const ProjectPage = ({ item }) =>
  <DocumentTitle title={item.title}>
    <Container.article>
      <ContentArea>
        {item.title}
      </ContentArea>
    </Container.article>
  </DocumentTitle>;

ProjectPage.propTypes = {
  item: PropTypes.project.isRequired,
  store: PropTypes.instanceOf(ResourceStore).isRequired
};

export default ProjectPage;