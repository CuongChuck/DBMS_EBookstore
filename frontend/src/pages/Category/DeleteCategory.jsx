import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteCategory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleDeleteCategory = () => {
        axios
            .delete(`http://localhost:8080/category/delete/${id}`)
            .then(() => {
                navigate('/category/list');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when deleting a category");
            })
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Are you sure you want to delete category {id}?</h2>
                <div className="flex space-x-4">
                    <button 
                        onClick={handleDeleteCategory} 
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Yes
                    </button>
                    <button 
                        onClick={() => navigate('/category/list')} 
                        className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCategory