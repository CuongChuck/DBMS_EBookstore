import Home from './pages/Home/Home';
import Register from './pages/Home/Register';
import AdminAuth from './pages/Home/AdminAuth';
import Admin from './pages/Home/Admin';
import User from './pages/Home/User';
import AddPublisher from './pages/Publisher/AddPublisher';
import ShowPublisherList from './pages/Publisher/ShowPublisherList';
import EditPublisher from './pages/Publisher/EditPublisher';
import DeletePublisher from './pages/Publisher/DeletePublisher';
import ShowAuthorList from './pages/Author/ShowAuthorList';
import AddAuthor from './pages/Author/AddAuthor';
import DeleteAuthor from './pages/Author/DeleteAuthor';
import EditAuthor from './pages/Author/EditAuthor';
import ShowTranslatorList from './pages/Translator/ShowTranslatorList';
import AddTranslator from './pages/Translator/AddTranslator';
import DeleteTranslator from './pages/Translator/DeleteTranslator';
import EditTranslator from './pages/Translator/EditTranslator';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/admin', component: Admin },
    { path: '/admin/auth', component: AdminAuth },
    { path: '/user', component: User },
    { path: '/publisher/admin/add', component: AddPublisher },
    { path: '/publisher/list', component: ShowPublisherList },
    { path: '/publisher/admin/edit/:id', component: EditPublisher },
    { path: '/publisher/admin/delete/:id', component: DeletePublisher },
    { path: '/author/list', component: ShowAuthorList },
    { path: '/author/admin/add', component: AddAuthor },
    { path: '/author/admin/delete/:id', component: DeleteAuthor },
    { path: '/author/admin/edit/:id', component: EditAuthor },
    { path: '/translator/list', component: ShowTranslatorList },
    { path: '/translator/admin/add', component: AddTranslator },
    { path: '/translator/admin/delete/:id', component: DeleteTranslator },
    { path: '/translator/admin/edit/:id', component: EditTranslator }
];

export { routes };