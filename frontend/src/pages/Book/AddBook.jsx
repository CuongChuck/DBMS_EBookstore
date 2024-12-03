import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [name, setName] = useState('');
    const [oriPrice, setOriPrice] = useState(0);
    const [date, setDate] = useState('');
    const [quantityStored, setQuantityStored] = useState(0);
    const [quantitySold, setQuantitySold] = useState(0);
    const [description, setDescription] = useState('');
    const [sellPrice, setSellPrice] = useState(0);
    const [publisher, setPublisher] = useState(null);
    const navigate = useNavigate();

    const handleAddBook = () => {
        const data = {
            name, oriPrice, date, quantityStored, quantitySold,
            description, sellPrice, publisher
        }
        axios
            .post('http://localhost:8080/book/add', data)
            .then(() => {
                navigate('/book');
            })
            .catch ((err) => {
                console.error(err.message)
            })
    };
    
    return (
        <div>
            <h2>Add a Book</h2>
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
            <button onClick={handleAddBook}>Save</button>
            <button onClick={() => {navigate('/book')}}>Cancel</button>
        </div>
    );
}

export default AddBook