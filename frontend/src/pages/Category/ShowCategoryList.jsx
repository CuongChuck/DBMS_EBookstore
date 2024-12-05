import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const ShowCategoryList = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:8080/category")
            .then((response) => {
                setItems(response.data.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Category List</h2>
            <button
                onClick={() => navigate('/category/add')}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Add Category
            </button>
        </div>
        
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">ID</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Description</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.CategoryID} className="border-t hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-700">{item.CategoryID}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{item.Name}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{item.Description}</td>
                            <td className="px-6 py-4 text-sm text-gray-700 flex space-x-4">
                                <button
                                    onClick={() => navigate(`/category/edit/${item.CategoryID}`)}
                                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => navigate(`/category/delete/${item.CategoryID}`)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ShowCategoryList