import { Routes, Route, Link } from 'react-router-dom'
import { routes } from './Routes'
import ProtectedRoute from './content/ProtectedRoute'
import './index.css';
import { NavBar } from './component/NavBar';

const App = () => {
    return (
        <div>
            <NavBar />
            <div className="mt-16">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        if (index > 19) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Page />}
                                />
                            );
                        }
                        else if (index == 18) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <ProtectedRoute requiredRole={"user"}>
                                            <Page />
                                        </ProtectedRoute>
                                    }
                                />
                            );
                        }
                        else if (index == 19) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <ProtectedRoute requiredRole={"any"}>
                                            <Page />
                                        </ProtectedRoute>
                                    }
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
        </div>
    );
}

export default App;
