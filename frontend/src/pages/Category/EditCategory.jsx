import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditCategory = () => {
    const [name, setName] = useState('');
    const [description, setDes] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/category/${id}`)
            .then((response) => {
                setName(response.data.data[0][0].Name);
                setDes(response.data.data[0][0].Description);
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when getting a category");
            })
    }, [id]);

    const handleEditCategory = () => {
        const data = { name, description };
        axios
            .put(`http://localhost:8080/category/edit/${id}`, data)
            .then(() => {
                navigate('/category');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when editing a category");
            })
    };

    return (
        <div>
            <h2>Edit category</h2>
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
            <button onClick={handleEditCategory}>Save</button>
        </div>
    )
}

export default EditCategory