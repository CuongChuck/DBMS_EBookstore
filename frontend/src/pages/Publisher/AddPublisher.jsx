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
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add Publisher</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input
                    type='text'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                onClick={handleAddPublisher}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
                Save
            </button>
        </div>
    )
}

export default AddPublisher