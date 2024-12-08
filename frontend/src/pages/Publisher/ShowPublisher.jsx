import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowPublisher = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/publisher/${id}`)
            .then((response) => {
                setItems(response.data.data);
            })
            .catch((err) => {
                return (<div>{err.message}</div>);
            })
    }, [id]);

    if (items.length === 0) {
        return <div>Loading...</div>; // Show loading state or a message
    }

    return (
        <div>
            <p>Name: {items[0][0].Name}</p>
            <p>Location: {items[0][0].Location}</p>
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

export default ShowPublisher