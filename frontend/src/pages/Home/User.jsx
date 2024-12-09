import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        axios
            .get('http://localhost:8080/logout')
            .then((response) => {
                if (response.data.message === "Logout Success") navigate('/');
                else alert("Error occurred!");
            })
            .catch((err) => {
                console.error(err.message);
            })
    };

    return (
        <div>
            <div>
                <h2>Dashboard</h2>
                <button onClick={handleLogOut}>Logout</button>
            </div>
        </div>
    )
}

export default User