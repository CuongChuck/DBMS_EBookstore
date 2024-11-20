import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAddPublisher = () => {
        const data = {
            email,
            username,
            password
        };
        axios
            .post("http://localhost:8080/publisher/add", data)
            .then(() => {
                navigate('/publisher/list');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding a publisher");
            })
    };

    return (
        <div>
            <h2>Register</h2>
            <div>
                <label>Email</label>
                <input type='email' />
            </div>
            <div>
                <label>Username</label>
                <input type='text' />
            </div>
            <div>
                <label>Password</label>
                <input type='password' />
            </div>
            <div>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Register