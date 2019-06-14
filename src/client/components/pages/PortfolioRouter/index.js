import PortfolioContext from 'Client/components/context/PortfolioContext';
import PortfolioRouter from './PortfolioRouter';
import { withRouter } from 'react-router-dom';

export default withRouter(PortfolioContext.withProvider(PortfolioRouter));