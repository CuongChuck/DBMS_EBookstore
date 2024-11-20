import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteTranslator = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleDeleteTranslator = () => {
        axios
            .delete(`http://localhost:8080/translator/delete/${id}`)
            .then(() => {
                navigate('/translator/list');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when deleting an translator");
            })
    };

    return (
        <div>
            <h2>Are you sure you want to delete translator {id}</h2>
            <button onClick={handleDeleteTranslator}>Yes</button>
            <button onClick={() => {navigate('/translator/list')}}>Cancel</button>
        </div>
    )
}

export default DeleteTranslator