import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShowAuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:8080/author")
            .then((response) => {
                setAuthors(response.data.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);
    return (
        <div>
            <button onClick={() => {navigate('/author/admin/add')}}>Add publisher</button>
            <h2>Publisher List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {publishers.map((publisher) => {
                        return (
                            <tr key={publisher.PublisherID}>
                                <td>{publisher.PublisherID}</td>
                                <td>{publisher.Name}</td>
                                <td>{publisher.Location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ShowAuthorList