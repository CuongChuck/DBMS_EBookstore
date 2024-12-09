import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const [name, setName] = useState(null);
    const [oriPrice, setOriPrice] = useState(0);
    const [date, setDate] = useState(null);
    const [quantityStored, setQuantityStored] = useState(0);
    const [quantitySold, setQuantitySold] = useState(null);
    const [description, setDescription] = useState(null);
    const [sellPrice, setSellPrice] = useState(null);
    const [publisher, setPublisher] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/book/${id}`)
            .then((response) => {
                setName(response.data.data[0][0].BookName);
                setDescription(response.data.data[0][0].Description);
                setSellPrice(response.data.data[0][0].SellingPrice);
                setPublisher(response.data.data[0][0].PublisherID);
                setOriPrice(response.data.data[0][0].OriginalPrice);
                setDate(response.data.data[0][0].PublicationDate);
                setQuantityStored(response.data.data[0][0].QuantityStored);
                setQuantitySold(response.data.data[0][0].QuantitySold);
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when getting info of a book");
            })
    }, [id]);

    const handleEditBook = () => {
        const data = {
            name, oriPrice, quantityStored, publisher, date,
            quantitySold, description, sellPrice
        };
        axios
            .put(`http://localhost:8080/book/edit/${id}`, data)
            .then(() => {
                navigate('/book');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when editing a book");
                alert("An error occurred when editing a book");
            })
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Edit Book</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Publication Year</label>
                <input
                    type='number'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Original Price</label>
                <input
                    type='number'
                    value={oriPrice}
                    onChange={(e) => setOriPrice(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Quantity Stored</label>
                <input
                    type='number'
                    value={quantityStored}
                    onChange={(e) => setQuantityStored(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Quantity Sold</label>
                <input
                    type='number'
                    value={quantitySold}
                    onChange={(e) => setQuantitySold(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Selling Price</label>
                <input
                    type='number'
                    value={sellPrice}
                    onChange={(e) => setSellPrice(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Publisher ID</label>
                <input
                    type='number'
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={handleEditBook}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Save
                </button>
                <button
                    onClick={() => { navigate('/book') }}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default EditBook
