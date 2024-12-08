import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTranslator = () => {
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const handleEditTranslator = () => {
        const data = { name, description };
        axios
            .put(`http://localhost:8080/translator/edit/${id}`, data)
            .then(() => {
                navigate('/translator');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when editing an translator");
            })
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Edit Translator</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDes(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <button
                onClick={handleEditTranslator}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
                Save
            </button>
        </div>
    )
}

export default EditTranslator