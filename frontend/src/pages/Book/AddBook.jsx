import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddBook = () => {
    const [name, setName] = useState('');
    const [oriPrice, setOriPrice] = useState(0);
    const [date, setDate] = useState('');
    const [quantityStored, setQuantityStored] = useState(0);
    const [quantitySold, setQuantitySold] = useState(0);
    const [description, setDescription] = useState('');
    const [sellPrice, setSellPrice] = useState(0);
    const [publisher, setPublisher] = useState(null);
    const [category, setCategory] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleAddBook = () => {
        const data = {
            name, oriPrice, quantityStored, publisher, date,
            quantitySold, description, sellPrice, category
        }
        axios
            .post(`http://localhost:8080/book/add/${id}`, data)
            .then(() => {
                navigate('/book');
            })
            .catch ((err) => {
                console.error(err.message)
            })
    };
    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Add a Book</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Publication Year</label>
                <input
                    type='number'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Original Price</label>
                <input
                    type='number'
                    value={oriPrice}
                    onChange={(e) => setOriPrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Quantity Stored</label>
                <input
                    type='number'
                    value={quantityStored}
                    onChange={(e) => setQuantityStored(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Quantity Sold</label>
                <input
                    type='number'
                    value={quantitySold}
                    onChange={(e) => setQuantitySold(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Selling Price</label>
                <input
                    type='number'
                    value={sellPrice}
                    onChange={(e) => setSellPrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Publisher ID</label>
                <input
                    type='number'
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Category ID</label>
                <input
                    type='number'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                />
            </div>
            <div className="flex justify-between">
                <button onClick={handleAddBook} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Save</button>
                <button onClick={() => {navigate('/book')}} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Cancel</button>
            </div>
        </div>
    </div>
    );
}

export default AddBook;
