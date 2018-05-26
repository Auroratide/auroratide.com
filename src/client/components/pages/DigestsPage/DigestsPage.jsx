import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import DigestItem from 'Client/components/core/DigestItem';
import DigestsStore from 'Client/store/digests-store';

class DigestsPage extends React.Component {

  componentDidMount() {
    this.props.digestsStore.refreshDigests();
  }

  render() {
    const { digestsStore } = this.props;
    return <Container>
      <ContentArea>
        {digestsStore.digests.length > 0 && <DigestItem digest={digestsStore.digests[0]} />}
      </ContentArea>
    </Container>;
  }

}

DigestsPage.propTypes = {
  digestsStore: PropTypes.instanceOf(DigestsStore).isRequired
};

export default DigestsPage;