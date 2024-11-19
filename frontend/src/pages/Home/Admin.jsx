import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li><Link to={'/admin'} >Home</Link></li>
                <li><Link to={'/publisher/list'}>Publisher</Link></li>
                <li><Link to={'/author/list'}>Author</Link></li>
            </ul>
        </div>
    )
}

export default Admin