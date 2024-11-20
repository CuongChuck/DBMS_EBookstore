import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li><Link to={'/user'} >Home</Link></li>
                <li><Link to={'/publisher/list'}>Publisher</Link></li>
                <li><Link to={'/author/list'}>Author</Link></li>
                <li><Link to={'/translator/list'}>Translator</Link></li>
                <li><Link to={'/category/list'}>Category</Link></li>
            </ul>
        </div>
    )
}

export default User