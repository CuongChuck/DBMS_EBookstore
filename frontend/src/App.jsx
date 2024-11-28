import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { routes } from './Routes'
import ProtectedRoute from './content/ProtectedRoute'

const App = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/user'} >Home</Link></li>
                <li><Link to={'/publisher'}>Publisher</Link></li>
                <li><Link to={'/author'}>Author</Link></li>
                <li><Link to={'/translator'}>Translator</Link></li>
                <li><Link to={'/category'}>Category</Link></li>
                <li><Link to={'/book'}>Book</Link></li>
            </ul>
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    if (index > 12) {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    }
                    else return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <ProtectedRoute requiredRole={"admin"}>
                                    <Page />
                                </ProtectedRoute>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    )
}

export default App