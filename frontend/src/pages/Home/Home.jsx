import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome to E-Bookstore</h2>
            <button onClick={() => {navigate('/user/auth')}}>Login</button>
            <button onClick={() => {navigate('/register')}}>Register</button>
        </div>
    )
}

export default Home