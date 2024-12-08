import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowAuthor = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/author/${id}`)
            .then((response) => {
                setItems(response.data.data);
            })
            .catch((err) => {
                return (<div>{err.message}</div>);
            })
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