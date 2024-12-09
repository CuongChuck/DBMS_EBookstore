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
                if (response.data.status === "Login Success") {
                    const id = response.data.UserID;
                    navigate(`/user/${id}`);
                }
                else alert("Username or password is not correct");
            })
            .catch((err) => {
                console.error(err);
            })
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Log In</h2>
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
                            onClick={handleLogIn}
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Log In
                        </button>
                    </div>
                    <p className="text-center text-gray-600 text-sm">
                        Don't have an account?{' '}
                        <a href="/register" className="text-blue-500 hover:underline">
                            Register here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserAuth