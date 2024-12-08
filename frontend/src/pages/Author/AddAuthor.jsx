import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAuthor = () => {
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    const navigate = useNavigate();

    const handleAddAuthor = () => {
        const data = { name, description };
        axios
            .post("http://localhost:8080/author/add", data)
            .then(() => {
                navigate('/author');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding an author");
            })
    };

    return (
        <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-6">Add Author</h2>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Description</label>
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDes(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="flex justify-between">
                <button onClick={handleAddAuthor} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
                <button onClick={() => {navigate('/author')}} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
            </div>
        </div>
    )
}

export default AddAuthor;