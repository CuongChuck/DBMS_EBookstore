import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPublisher = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleAddPublisher = () => {
        const data = {
            name,
            location
        };
        axios
            .post("http://localhost:8080/publisher/add", data)
            .then(() => {
                navigate('/publisher');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding a publisher");
            })
    };

    return (
        <div>
            <h2>Add publisher</h2>
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
            <button onClick={handleAddPublisher}>Save</button>
        </div>
    )
}

export default AddPublisher