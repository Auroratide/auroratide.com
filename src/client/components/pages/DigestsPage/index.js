import DigestsPage from './DigestsPage';
import DigestsContext from 'Client/components/context/DigestsContext';
import withResourceList from 'Client/components/core/with-resource-list';

export default DigestsContext.withProvider(withResourceList(DigestsContext)(DigestsPage));
