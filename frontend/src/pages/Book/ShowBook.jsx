import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowBook = () => {
    const [role, setRole] = useState(true);
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const bookRoleBased = async () => {
            try {
                const [roleResponse, bookResponse] = await Promise.all([
                    axios.get('http://localhost:8080/role'),
                    axios.get(`http://localhost:8080/book/${id}`)
                ]);
                if (roleResponse.data.role === "Role Admin") setRole(false);
                else setRole(true);
                setItems(bookResponse.data.data);
            } catch (err) {
                console.error(err.message)
            }
        }
        bookRoleBased();
    }, [id]);
    if (items.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">{items[0][0].BookName}</h1>
                <p className="mb-2"><strong>Description:</strong> {items[0][0].Description}</p>
                <p className="mb-2"><strong>Selling Price:</strong> ${items[0][0].SellingPrice}</p>
                <p className="mb-2"><strong>Publisher:</strong> {items[0][0].PublisherName}</p>
                {!role && (
                    <p className="mb-2"><strong>Original Price:</strong> VND{items[0][0].OriginalPrice}</p>
                )}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Authors</h2>
                    <ul className="list-disc list-inside">
                        {items[1].map((item, index) => (
                            <li key={index}><Link className="text-blue-500 hover:underline" to={`/author/${item.AuthorID}`}>{item.AuthorName}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Categories</h2>
                    <ul className="list-disc list-inside">
                        {items[3].map((item, index) => (
                            <li key={index}><Link className="text-blue-500 hover:underline" to={`/category/${item.CategoryID}`}>{item.CategoryName}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Translators</h2>
                    <ul className="list-disc list-inside">
                        {items[2].map((item, index) => (
                            <li key={index}><Link className="text-blue-500 hover:underline" to={`/translator/${item.TranslatorID}`}>{item.TranslatorName}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Languages</h2>
                    <ul className="list-disc list-inside">
                        {items[4].map((item, index) => (
                            <li key={index}>{item.Language}</li>
                        )
                        )}
                    </ul>
                </div>
                <p className="mb-2"><strong>Publication Year:</strong> {items[0][0].PublicationDate}</p>
                <p className="mb-2"><strong>Quantity in stock:</strong> {items[0][0].QuantityStored}</p>
                <p className="mb-2"><strong>Quantity sold:</strong> {items[0][0].QuantitySold}</p>
                <p className="mb-2"><strong>Age Rating:</strong> {items[0][0].AgeRating}</p>
                <p className="mb-2"><strong>Size:</strong> {items[0][0].Length} x {items[0][0].Width} x {items[0][0].Height}</p>
                <p className="mb-2"><strong>Number of Pages:</strong> {items[0][0].PageCount}</p>
                <p className="mb-2"><strong>Mass:</strong> {items[0][0].Mass}</p>
                <p className="mb-2"><strong>Status:</strong> {items[0][0].Status}</p>
                <p className="mb-2"><strong>Format:</strong> {items[0][0].Format}</p>
            </div>
        </div>
    )
}

export default ShowBook
