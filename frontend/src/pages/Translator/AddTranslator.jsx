import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTranslator = () => {
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    const navigate = useNavigate();

    const handleAddTranslator = () => {
        const data = { name, description };
        axios
            .post("http://localhost:8080/translator/add", data)
            .then(() => {
                navigate('/translator');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding an translator");
            })
    };

    return (
        <div>
            <h2>Add translator</h2>
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
            <button onClick={handleAddTranslator}>Save</button>
        </div>
    )
}

export default AddTranslator