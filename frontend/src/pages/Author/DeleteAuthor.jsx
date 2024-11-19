import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteAuthor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleDeleteAuthor = () => {
        axios
            .delete(`http://localhost:8080/author/delete/${id}`)
            .then(() => {
                navigate('/author/list');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when deleting an author");
            })
    };

    return (
        <div>
            <h2>Are you sure you want to delete author {id}</h2>
            <button onClick={handleDeleteAuthor}>Yes</button>
            <button onClick={() => {navigate('/author/list')}}>Cancel</button>
        </div>
    )
}

export default DeleteAuthor