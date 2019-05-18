import withResourceList from 'Client/components/core/with-resource-list';
import PortfolioPage from './PortfolioPage';

export default withResourceList(store => store.portfolio)(PortfolioPage);
