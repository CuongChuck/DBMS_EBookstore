import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome to E-Bookstore</h2>
            <button onClick={() => {navigate('/user')}}>User</button>
            <button onClick={() => {navigate('/admin/auth')}}>Admin</button>
            <button onClick={() => {navigate('/register')}}>Register</button>
        </div>
    )
}

export default Home