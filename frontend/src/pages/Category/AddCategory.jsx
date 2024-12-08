import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    const navigate = useNavigate();

    const handleAddCategory = () => {
        const data = { name, description };
        axios
            .post("http://localhost:8080/category/add", data)
            .then(() => {
                navigate('/category');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding an category");
            })
    };

    return (
        <div>
            <h2>Add Category</h2>
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
            <button onClick={handleAddCategory}>Save</button>
        </div>
    )
}

export default AddCategory