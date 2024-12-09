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
                navigate('/category');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when deleting a category");
            })
    };

    return (
        <div>
            <h2>Are you sure you want to delete category {id}</h2>
            <button onClick={handleDeleteCategory}>Yes</button>
            <button onClick={() => {navigate('/category')}}>Cancel</button>
        </div>
    )
}

export default DeleteCategory