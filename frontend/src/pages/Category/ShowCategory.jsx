import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowCategory = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/category/${id}`)
            .then((response) => {
                setItems(response.data.data);
            })
            .catch((err) => {
                return (<div>{err.message}</div>);
            })
    }, [id])

    if (items.length === 0) {
        return <div className="text-center text-gray-500">Loading...</div>; 
    }

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <p className="text-2xl font-bold mb-4">Name: {items[0][0].Name}</p>
            <p className="text-lg text-gray-700 mb-6">Description: {items[0][0].Description}</p>
            <div>
                <p className="text-xl font-semibold mb-2">Books</p>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Book Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items[1].map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">
                                    <Link to={`/book/${item.BookID}`} className="text-blue-500 hover:underline">{item.BookName}</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowCategory