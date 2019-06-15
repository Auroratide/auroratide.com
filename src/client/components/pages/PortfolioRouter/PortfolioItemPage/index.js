import withId from './with-id';
import PortfolioItemPage from './PortfolioItemPage';
import PortfolioContext from 'Client/components/context/PortfolioContext';
import withResourceItem from 'Client/components/core/with-resource-item';

export default withId(withResourceItem(PortfolioContext)(PortfolioItemPage));
