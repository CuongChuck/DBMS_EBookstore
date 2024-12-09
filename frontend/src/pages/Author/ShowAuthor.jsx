import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ShowAuthor = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/author/${id}`)
            .then((response) => {
                setItems(response.data.data);
            })
            .catch((err) => {
                return (<div>{err.message}</div>);
            })
    }, [id]);

    if (items.length === 0) {
        return <div>Loading...</div>;
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
                            <li key={index}>
                                <Link to={`/book/${item.BookID}`}>{item.BookName}</Link>
                                <span style={{marginLeft:'30px'}} />
                                <button onClick={() => {navigate(`/author/delete-book/${id}/${item.BookID}`)}}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ShowAuthor
