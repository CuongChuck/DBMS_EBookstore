import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeletePublisher = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const handleDeletePublisher = () => {
        axios
            .delete(`http://localhost:8080/publisher/delete/${name}`)
            .then(() => {
                navigate('/publisher/list');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when deleting a publisher");
            })
    }

    return (
        <div>
            <h2>Are you sure you want to delete publisher {name}</h2>
            <button onClick={handleDeletePublisher}>Yes</button>
            <button onClick={() => {navigate('/publisher/list')}}>Cancel</button>
        </div>
    )
}

export default DeletePublisher