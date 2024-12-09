import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShowAuthorList = () => {
    const [role, setRole] = useState(true);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const authorListRoleBased = async () => {
            try {
                const [roleResponse, authorResponse] = await Promise.all([
                    axios.get('http://localhost:8080/role'),
                    axios.get('http://localhost:8080/author')
                ]);
                if (roleResponse.data.role === "Role Admin") setRole(false);
                else setRole(true);
                setItems(authorResponse.data.data);
            } catch (err) {
                console.error(err.message)
            }
        }
        authorListRoleBased();
    }, []);
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-800">Author List</h2>
                {!role && (
                    <button
                        onClick={() => navigate('/author/add')}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Add Author
                    </button>
                )}
            </div>

            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                {role ? 'No' : 'ID'}
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={item.AuthorID} className="border-t hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {role ? index + 1 : item.AuthorID}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">{item.Name}</td>
                                <td className="px-6 py-4 text-sm text-gray-700 flex space-x-4">
                                    <button
                                        onClick={() => navigate(`/author/${item.AuthorID}`)}
                                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                    >
                                        Details
                                    </button>
                                    {!role && (
                                        <>
                                            <button
                                                onClick={() => navigate(`/author/add-book/${item.AuthorID}`)}
                                                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                                            >
                                                Add book
                                            </button>
                                            <button
                                                onClick={() => navigate(`/author/edit/${item.AuthorID}`)}
                                                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => navigate(`/author/delete/${item.AuthorID}`)}
                                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowAuthorList