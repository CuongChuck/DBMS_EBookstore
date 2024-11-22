import Home from './pages/Home/Home';
import Register from './pages/Home/Register';
import AdminAuth from './pages/Home/AdminAuth';
import Admin from './pages/Home/Admin';
import UserAuth from './pages/Home/UserAuth';
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
import ShowCategoryList from './pages/Category/ShowCategoryList';
import AddCategory from './pages/Category/AddCategory';
import DeleteCategory from './pages/Category/DeleteCategory';
import EditCategory from './pages/Category/EditCategory';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/admin', component: Admin },
    { path: '/user', component: User },
    { path: '/admin/auth', component: AdminAuth },
    { path: '/user/auth', component: UserAuth },
    { path: '/publisher/add', component: AddPublisher },
    { path: '/publisher/list', component: ShowPublisherList },
    { path: '/publisher/edit/:id', component: EditPublisher },
    { path: '/publisher/delete/:id', component: DeletePublisher },
    { path: '/author/list', component: ShowAuthorList },
    { path: '/author/add', component: AddAuthor },
    { path: '/author/delete/:id', component: DeleteAuthor },
    { path: '/author/edit/:id', component: EditAuthor },
    { path: '/translator/list', component: ShowTranslatorList },
    { path: '/translator/add', component: AddTranslator },
    { path: '/translator/delete/:id', component: DeleteTranslator },
    { path: '/translator/edit/:id', component: EditTranslator },
    { path: '/category/list', component: ShowCategoryList },
    { path: '/category/add', component: AddCategory },
    { path: '/category/delete/:id', component: DeleteCategory },
    { path: '/category/edit/:id', component: EditCategory }
];

export { routes };