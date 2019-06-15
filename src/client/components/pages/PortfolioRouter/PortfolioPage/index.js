import PortfolioContext from 'Client/components/context/PortfolioContext';
import PortfolioPage from './PortfolioPage';
import withResourceList from 'Client/components/core/with-resource-list';

export default withResourceList(PortfolioContext)(PortfolioPage);
