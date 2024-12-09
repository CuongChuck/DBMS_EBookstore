import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditCategory = () => {
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/category/${id}`)
            .then((response) => {
                setName(response.data.data[0][0].Name);
                setDes(response.data.data[0][0].Description);
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when getting a category");
            })
    }, [id]);

    const handleEditCategory = () => {
        const data = { name, description };
        axios
            .put(`http://localhost:8080/category/edit/${id}`, data)
            .then(() => {
                navigate('/category');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when editing a category");
            })
    };
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Edit Category</h2>
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
            <button 
                onClick={handleEditCategory} 
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
                Save
            </button>
        </div>
    )
}

export default EditCategory
