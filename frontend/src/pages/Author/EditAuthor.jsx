import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditAuthor = () => {
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const handleEditAuthor = () => {
        const data = { name, description };
        axios
            .put(`http://localhost:8080/author/edit/${id}`, data)
            .then(() => {
                navigate('/author');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when editing an author");
            })
    };

    return (
        <div>
            <h2>Edit author</h2>
            <div>
                <label>Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDes(e.target.value)}
                />
            </div>
            <button onClick={handleEditAuthor}>Save</button>
            <button onClick={() => {navigate('/author')}}>Cancel</button>
        </div>
    )
}

export default EditAuthor