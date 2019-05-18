import withId from './with-id';
import PortfolioItemPage from './PortfolioItemPage';

import withResourceItem from 'Client/components/core/with-resource-item';

export default withId(withResourceItem(store => store.portfolio)(PortfolioItemPage));
