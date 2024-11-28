import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        const data = {
            email,
            username,
            password
        };
        axios
            .post("http://localhost:8080/register", data)
            .then(() => {
                navigate('/user/auth');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding a user");
            })
    };

    return (
        <div>
            <h2>Register</h2>
            <div>
                <label>Email</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Username</label>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    )
}

export default Register