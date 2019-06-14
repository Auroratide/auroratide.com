import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Content from './Content';
import DownloadButtons from './DownloadButtons';
import Gallery from './Gallery';
import Article, {
  Header,
  ButtonBar,
  Body,
  Aside
} from 'Client/components/layout/Article';

import styles from './style';

const ProjectPage = ({ item, isRefreshing }) =>
  <DocumentTitle title={item.title}>
    <Article>
      <Header title={item.title} image={item.image} />
      <ButtonBar>
        <DownloadButtons links={item.links} />
      </ButtonBar>
      <Body className={styles.body}>
        <Content item={item} isRefreshing={isRefreshing} />
        <Aside title='Some Pics'>
          <Gallery images={item.gallery} />
        </Aside>
      </Body>
    </Article>
  </DocumentTitle>;

ProjectPage.propTypes = {
  item: PropTypes.project.isRequired,
  isRefreshing: PropTypes.bool
};

export default ProjectPage;