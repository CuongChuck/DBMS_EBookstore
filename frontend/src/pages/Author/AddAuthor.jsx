import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAuthor = () => {
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    const navigate = useNavigate();

    const handleAddAuthor = () => {
        const data = { name, description };
        axios
            .post("http://localhost:8080/author/add", data)
            .then(() => {
                navigate('/author/list');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding an author");
            })
    };

    return (
        <div>
            <h2>Add author</h2>
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
            <button onClick={handleAddAuthor}>Save</button>
        </div>
    )
}

export default AddAuthor