import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowPublisher = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/publisher/${id}`)
            .then((response) => {
                setItems(response.data.data);
            })
            .catch((err) => {
                return (<div>{err.message}</div>);
            })
    }, [id]);

    if (items.length === 0) {
        return <div className="text-center text-gray-500">Loading...</div>; // Show loading state or a message
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">{items[0][0].Name}</h1>
                    <p className="text-gray-700">{items[0][0].Location}</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Books</h2>
                    <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 text-left border-b">Book Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items[1]?.map((item, index) => (
                                <tr key={index} className="border-t">
                                    <td className="py-2 px-4">
                                        <Link to={`/book/${item.BookID}`} className="text-blue-500 hover:underline">
                                            {item.BookName}
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShowPublisher