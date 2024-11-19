import './App.css'
import { Routes, Route } from 'react-router-dom'
import { routes } from './Routes'

const App = () => {
    return (
        <Routes>
            {routes.map((route, index) => {
                const Page = route.component;
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={<Page />}
                    />
                );
            })}
        </Routes>
    )
}

export default App