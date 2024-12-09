import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddBookCategory = () => {
    const [bookid, setBookID] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleAddBookCategory = () => {
        axios
            .post(`http://localhost:8080/category/add-book/${id}`, { bookid })
            .then(() => {
                navigate('/category');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding a book category");
            })
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add Book Category</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Book ID</label>
                <input
                    type='number'
                    value={bookid}
                    onChange={(e) => setBookID(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex justify-between">
                <button
                    onClick={handleAddBookCategory}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Save
                </button>
                <button
                    onClick={() => { navigate('/category') }}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
    )
}

export default AddBookCategory;