import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditAuthor = () => {
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/author/${id}`)
            .then((response) => {
                setName(response.data.data[0][0].Name);
                setDes(response.data.data[0][0].Description);
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when fetching the author details");
            });
    }, [id]);

    const handleEditAuthor = () => {
        const data = { name, description };
        axios
            .put(`http://localhost:8080/author/edit/${id}`, data)
            .then(() => {
                navigate('/author');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when editing an author");
            })
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Edit Author</h2>
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
                <label className="block text-gray-700">Description</label>
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDes(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="flex justify-between">
                <button
                    onClick={handleEditAuthor}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                >
                    Save
                </button>
                <button
                    onClick={() => { navigate('/author') }}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default EditAuthor;
