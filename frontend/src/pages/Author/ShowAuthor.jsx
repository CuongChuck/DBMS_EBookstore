import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowAuthor = () => {
    const [role, setRole] = useState(null);
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const authorRoleBased = async () => {
            try {
                const [roleResponse, authorResponse] = await Promise.all([
                    axios.get('http://localhost:8080/role'),
                    axios.get(`http://localhost:8080/author/${id}`)
                ]);
                if (roleResponse.data.role === "Role Admin") setRole(false);
                else if (roleResponse.data.role === "Role User") setRole(true);
                setItems(authorResponse.data.data);
            } catch (err) {
                console.error(err.message)
            }
        }
        authorRoleBased();
    }, [id])

    if (items.length === 0) {
        return <div>Loading...</div>; // Show loading state or a message
    }

    return (
        <div>
            <p>Name: {items[0][0].Name}</p>
            <p>Description: {items[0][0].Description}</p>
            <div>
                <p>Books</p>
                <ul>
                    {items[1].map((item, index) => {
                        return (
                            <li key={index}><Link to={`/book/${item.BookID}`}>{item.BookName}</Link></li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ShowAuthor