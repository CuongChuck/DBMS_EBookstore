import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const [name, setName] = useState('');
    const [oriPrice, setOriPrice] = useState(0);
    const [date, setDate] = useState('');
    const [quantityStored, setQuantityStored] = useState(0);
    const [quantitySold, setQuantitySold] = useState(0);
    const [description, setDescription] = useState('');
    const [sellPrice, setSellPrice] = useState(0);
    const [publisher, setPublisher] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleEditBook = () => {
        const data = { name, description };
        axios
            .put(`http://localhost:8080/book/edit/${id}`, data)
            .then(() => {
                navigate('/book');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when editing an book");
            })
    };

    return (
        <div>
            <h2>Edit Book</h2>
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
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Publication Year</label>
                <input
                    type='number'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div>
                <label>OriginalPrice</label>
                <input
                    type='number'
                    value={oriPrice}
                    onChange={(e) => setOriPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Quantity Stored</label>
                <input
                    type='number'
                    value={quantityStored}
                    onChange={(e) => setQuantityStored(e.target.value)}
                />
            </div>
            <div>
                <label>Quantity Sold</label>
                <input
                    type='number'
                    value={quantitySold}
                    onChange={(e) => setQuantitySold(e.target.value)}
                />
            </div>
            <div>
                <label>Selling Price</label>
                <input
                    type='number'
                    value={sellPrice}
                    onChange={(e) => setSellPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Publisher ID</label>
                <input
                    type='number'
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                />
            </div>
            <button onClick={handleEditBook}>Save</button>
            <button onClick={() => {navigate('/book')}}>Cancel</button>
        </div>
    )
}

export default EditBook