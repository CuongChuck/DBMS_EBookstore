import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowPublisherList = () => {
    const [publishers, setPublishers] = useState([]);
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

export default ShowPublisherList