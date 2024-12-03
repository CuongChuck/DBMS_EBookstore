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
                alert("An error occurred when deleting an book");
            })
    };

    return (
        <div>
            <h2>Are you sure you want to delete book {id}</h2>
            <button onClick={handleDeleteBook}>Yes</button>
            <button onClick={() => {navigate('/book')}}>Cancel</button>
        </div>
    )
}

export default DeleteBook