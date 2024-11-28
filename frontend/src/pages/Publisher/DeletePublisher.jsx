import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeletePublisher = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleDeletePublisher = () => {
        axios
            .delete(`http://localhost:8080/publisher/delete/${id}`)
            .then(() => {
                navigate('/publisher');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when deleting a publisher");
            })
    }

    return (
        <div>
            <h2>Are you sure you want to delete publisher {id}</h2>
            <button onClick={handleDeletePublisher}>Yes</button>
            <button onClick={() => {navigate('/publisher')}}>Cancel</button>
        </div>
    )
}

export default DeletePublisher