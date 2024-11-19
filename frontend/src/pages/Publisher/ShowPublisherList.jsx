import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShowPublisherList = () => {
    const [publishers, setPublishers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:8080/publisher")
            .then((response) => {
                setPublishers(response.data.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);
    return (
        <div>
            <button onClick={() => {navigate('/publisher/admin/add')}}>Add publisher</button>
            <h2>Publisher List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {publishers.map((publisher) => {
                        return (
                            <tr key={publisher.PublisherID}>
                                <td>{publisher.PublisherID}</td>
                                <td>{publisher.Name}</td>
                                <td>{publisher.Location}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            navigate(`/publisher/details/${publisher.PublisherID}`
                                        )}}
                                    >
                                            Details
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate(`/publisher/admin/edit/${publisher.PublisherID}`
                                        )}}
                                    >
                                            Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate(`/publisher/admin/delete/${publisher.PublisherID}`
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

export default ShowPublisherList