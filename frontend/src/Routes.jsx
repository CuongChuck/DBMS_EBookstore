import Home from './pages/Home/Home';
import Register from './pages/Home/Register';
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
import ShowBookList from './pages/Book/ShowBookList';
import AddBook from './pages/Book/AddBook';
import ShowAuthor from './pages/Author/ShowAuthor';
import ShowBook from './pages/Book/ShowBook';
import ShowPublisher from './pages/Publisher/ShowPublisher';
import ShowCategory from './pages/Category/ShowCategory';
import ShowTranslator from './pages/Translator/ShowTranslator';
import DeleteBook from './pages/Book/DeleteBook';
import EditBook from './pages/Book/EditBook';
import AddBookAuthored from './pages/Author/AddBookAuthored';
import DeleteBookAuthored from './pages/Author/DeleteBookAuthored';

const routes = [
    { path: '/publisher/add', component: AddPublisher },
    { path: '/publisher/edit/:id', component: EditPublisher },
    { path: '/publisher/delete/:id', component: DeletePublisher },
    { path: '/author/add', component: AddAuthor },
    { path: '/author/delete/:id', component: DeleteAuthor },
    { path: '/author/edit/:id', component: EditAuthor },
    { path: '/author/add-book/:id', component: AddBookAuthored },
    { path: '/author/delete-book/:authorid/:bookid', component: DeleteBookAuthored },
    { path: '/translator/add', component: AddTranslator },
    { path: '/translator/delete/:id', component: DeleteTranslator },
    { path: '/translator/edit/:id', component: EditTranslator },
    { path: '/category/add', component: AddCategory },
    { path: '/category/delete/:id', component: DeleteCategory },
    { path: '/category/edit/:id', component: EditCategory },
    { path: '/book/add', component: AddBook },
    { path: '/book/delete/:id', component: DeleteBook },
    { path: '/book/edit/:id', component: EditBook },
    { path: '/user', component: User },
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/user/auth', component: UserAuth },
    { path: '/book', component: ShowBookList },
    { path: '/book/:id', component: ShowBook },
    { path: '/author/:id', component: ShowAuthor },
    { path: '/author', component: ShowAuthorList },
    { path: '/publisher', component: ShowPublisherList },
    { path: '/publisher/:id', component: ShowPublisher },
    { path: '/translator', component: ShowTranslatorList },
    { path: '/translator/:id', component: ShowTranslator },
    { path: '/category', component: ShowCategoryList },
    { path: '/category/:id', component: ShowCategory }
];

export { routes };