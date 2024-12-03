import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowBook = () => {
    const [role, setRole] = useState(null);
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
                else if (roleResponse.data.role === "Role User") setRole(true);
                setItems(bookResponse.data.data);
            } catch (err) {
                console.error(err.message)
            }
        }
        bookRoleBased();
    }, [id])
    if (items.length === 0) {
        return <div>items.length</div>; // Show loading state or a message
    }

    return (
        <div>
            <p>Name: {items[0][0].BookName}</p>
            <p>Description: {items[0][0].Description}</p>
            <p>SellingPrice: {items[0][0].SellingPrice}</p>
            <p>Publisher: {items[0][0].PublisherName}</p>
            {!role && (
                <p>OriginalPrice: {items[0][0].OriginalPrice}</p>
            )}
            <div>
                <p>Authors</p>
                <ul>
                    {items[1].map((item, index) => {
                        return (
                            <li key={index}><Link to={`/author/${item.AuthorID}`}>{item.AuthorName}</Link></li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <p>Categories</p>
                <ul>
                    {items[3].map((item, index) => {
                        return (
                            <li key={index}><Link to={`/category/${item.CategoryID}`}>{item.CategoryName}</Link></li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <p>Translators</p>
                <ul>
                    {items[2].map((item, index) => {
                        return (
                            <li key={index}><Link to={`/translator/${item.TranslatorID}`}>{item.TranslatorName}</Link></li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <p>Languages</p>
                <ul>
                    {items[4].map((item, index) => {
                        return (
                            <li key={index}>{item.Language}</li>
                        );
                    })}
                </ul>
            </div>
            <p>Publication Year: {items[0][0].PublicationDate}</p>
            <p>Quantity in stock: {items[0][0].QuantityStored}</p>
            <p>Quantity sold: {items[0][0].QuantitySold}</p>
            <p>AgeRating: {items[0][0].AgeRating}</p>
            <p>Size: {items[0][0].Length} x {items[0][0].Width} x {items[0][0].Height}</p>
            <p>Number of Pages: {items[0][0].PageCount}</p>
            <p>Mass: {items[0][0].Mass}</p>
            <p>Status: {items[0][0].Status}</p>
            <p>Format: {items[0][0].Format}</p>
        </div>
    )
}

export default ShowBook