import { withRouter } from 'react-router-dom';
import { withAccordion } from 'Client/components/core/Accordion';
import TopBar from './TopBar';

export default withRouter(withAccordion(TopBar));
