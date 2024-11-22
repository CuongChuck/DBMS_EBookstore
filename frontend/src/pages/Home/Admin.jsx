import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get('http://localhost:8080/')
            .then((response) => {
                if (response.data.status === "Admin Success") setAuth(true);
                else setAuth(false);
            })

    }, []);

    const handleLogOut = () => {
        axios
            .get('http://localhost:8080/logout')
            .then((response) => {
                if (response.data.message === "Success") navigate('/');
                else alert("Error occurred!");
            })
            .catch((err) => {
                console.error(err.message);
            })
    };

    return (
        <div>
            {
                auth ?
                <div>
                    <h2>Dashboard</h2>
                    <ul>
                        <li><Link to={'/admin'} >Home</Link></li>
                        <li><Link to={'/publisher/list'}>Publisher</Link></li>
                        <li><Link to={'/author/list'}>Author</Link></li>
                        <li><Link to={'/translator/list'}>Translator</Link></li>
                        <li><Link to={'/category/list'}>Category</Link></li>
                    </ul>
                    <button onClick={handleLogOut}>Logout</button>
                </div>
                :
                <div>
                    <h2>Error. Log in again</h2>
                    <button onClick={() => {navigate('/admin/auth')}}>Log In</button>
                </div>
            }
        </div>
    )
}

export default Admin