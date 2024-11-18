import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AddPublisher from './pages/AddPublisher';
import ShowPublisher from './pages/ShowPublisher';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/publisher/add' element={<AddPublisher />} />
            <Route path='/publisher/details/:name' element={<ShowPublisher />} />
        </Routes>
    )
}

export default App