import withResourceList from 'Client/components/core/with-resource-list';
import ProjectsListPage from './ProjectsListPage';

export default withResourceList(store => store.projects)(ProjectsListPage);
