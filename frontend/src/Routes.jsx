import Home from './pages/Home';
import AddPublisher from './pages/Publisher/AddPublisher';
import ShowPublisherList from './pages/Publisher/ShowPublisherList';
import ShowPublisher from './pages/Publisher/ShowPublisher';
import EditPublisher from './pages/Publisher/EditPublisher';
import DeletePublisher from './pages/Publisher/DeletePublisher';

const routes = [
    { path: '/', component: Home },
    { path: '/publisher/admin/add', component: AddPublisher },
    { path: '/publisher/list', component: ShowPublisherList },
    { path: '/publisher/details/:name', component: ShowPublisher },
    { path: '/publisher/admin/edit/:id', component: EditPublisher },
    { path: '/publisher/admin/delete/:name', component: DeletePublisher },
];

export { routes };