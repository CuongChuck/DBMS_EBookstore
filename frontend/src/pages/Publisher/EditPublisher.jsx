import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPublisher = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/publisher/${id}`)
            .then((response) => {
                setName(response.data.data[0][0].Name);
                setLocation(response.data.data[0][0].Location);
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when getting a publisher");
            })
    }, [id]);

    const handleEditPublisher = () => {
        const data = {
            name,
            location
        };
        axios
            .put(`http://localhost:8080/publisher/edit/${id}`, data)
            .then(() => {
                navigate('/publisher');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when editing a publisher");
            })
    };

    return (
        <div>
            <h2>Edit publisher</h2>
            <div>
                <label>Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Location</label>
                <input
                    type='text'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <button onClick={handleEditPublisher}>Save</button>
        </div>
    )
}

export default EditPublisher