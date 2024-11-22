import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserAuth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const handleLogIn = () => {
        const data = {username, password};
        axios
            .post('http://localhost:8080/login', data)
            .then((response) => {
                if (response.data.status === "User Success") navigate('/user');
                else alert("Username or password is not correct");
            })
            .catch((err) => {
                console.error(err);
            })
    };

    return (
        <div>
            <div>
                <h2>Log In</h2>
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
                    <button onClick={handleLogIn}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default UserAuth