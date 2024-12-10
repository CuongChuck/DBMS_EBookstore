import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddReview = () => {
    const [rating, setRating] = useState(0);
    const { bookid, userid } = useParams();
    const navigate = useNavigate();

    const handleAddReview = () => {
        const data = { rating }
        axios
            .post(`http://localhost:8080/book/${bookid}/add/${userid}`, data)
            .then(() => {
                navigate('/book');
            })
            .catch ((err) => {
                console.error(err.message)
            })
    };
    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Rate the book</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Rating</label>
                <input
                    type='number'
                    min={0}
                    max={5}
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="flex justify-between">
                <button onClick={handleAddReview} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Save</button>
                <button onClick={() => {navigate('/book')}} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Cancel</button>
            </div>
        </div>
    </div>
    );
}

export default AddReview;
