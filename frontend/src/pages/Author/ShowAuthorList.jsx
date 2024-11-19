import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const ShowAuthorList = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:8080/author")
            .then((response) => {
                setItems(response.data.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);
    return (
        <div>
            <ul>
                <li><Link to={'/admin'} >Home</Link></li>
            </ul>
            <button onClick={() => {navigate('/author/admin/add')}}>Add author</button>
            <h2>Author List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr key={item.AuthorID}>
                                <td>{item.AuthorID}</td>
                                <td>{item.Name}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            navigate(`/author/admin/edit/${item.AuthorID}`
                                        )}}
                                    >
                                            Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate(`/author/admin/delete/${item.AuthorID}`
                                        )}}
                                    >
                                            Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ShowAuthorList