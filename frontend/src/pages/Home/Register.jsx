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
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Register</h2>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-600 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <button
                        onClick={handleRegister}
                        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Register
                    </button>
                </div>
                <p className="text-center text-gray-600 text-sm">
                    Already have an account?{' '}
                <a href="/user/auth" className="text-blue-500 hover:underline">
                    Log in here
                 </a>
                </p>
            </div>
        </div>
    )
}

export default Register