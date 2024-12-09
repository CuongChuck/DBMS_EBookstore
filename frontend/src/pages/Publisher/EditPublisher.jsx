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
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Edit Publisher</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                    type='text'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <button
                onClick={handleEditPublisher}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
                Save
            </button>
        </div>
    )
}

export default EditPublisher
