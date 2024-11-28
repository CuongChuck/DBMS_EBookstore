import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
    const [role, setRole] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios
            .get('http://localhost:8080/role')
            .then((response) => {
                if (response.data.role === "Role Admin") setRole(false);
                else if (response.data.role === "Role User") setRole(true);
            })
    }, []);

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