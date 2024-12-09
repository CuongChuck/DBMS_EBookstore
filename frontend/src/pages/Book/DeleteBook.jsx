import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleDeleteBook = () => {
        axios
            .delete(`http://localhost:8080/book/delete/${id}`)
            .then(() => {
                navigate('/book');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when deleting a book");
            })
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Are you sure you want to delete book {id}?</h2>
                <div className="flex justify-between">
                    <button 
                        onClick={handleDeleteBook} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Yes
                    </button>
                    <button 
                        onClick={() => {navigate('/book')}} 
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteBook