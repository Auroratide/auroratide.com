import withId from './with-id';
import ProjectPage from './ProjectPage';

import withResourceItem from 'Client/components/core/with-resource-item';

export default withId(withResourceItem(store => store.portfolio)(ProjectPage));
