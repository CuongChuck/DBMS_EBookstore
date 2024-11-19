import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowPublisher = () => {
    const [publisher, setPublisher] = useState({});
    const { name } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/publisher/${name}`)
            .then((response) => {
                setPublisher(response.data[0]);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);

    return (
        <div>
            <h2>Publisher {publisher.Name}</h2>
            <ul>
                <li>Name: {publisher.Name}</li>
                <li>Location: {publisher.Location}</li>
            </ul>
        </div>
    )
}

export default ShowPublisher