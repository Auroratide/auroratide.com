import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import DigestItem from './DigestItem';
import DigestsStore from 'Client/store/digests-store';

class DigestsPage extends React.Component {

  componentDidMount() {
    this.props.digestsStore.refreshDigests();
  }

  render() {
    const { digestsStore } = this.props;
    return <Container>
      <ContentArea>
        {digestsStore.digests.map(digest => <DigestItem digest={digest} key={digest.id} />)}
      </ContentArea>
    </Container>;
  }

}

DigestsPage.propTypes = {
  digestsStore: PropTypes.instanceOf(DigestsStore).isRequired
};

export default DigestsPage;