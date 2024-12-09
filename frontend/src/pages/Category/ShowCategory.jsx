import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ShowCategory = () => {
    const [role, setRole] = useState(true);
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        const categoryRoleBased = async () => {
            try {
                const [roleResponse, categoryResponse] = await Promise.all([
                    axios.get('http://localhost:8080/role'),
                    axios.get(`http://localhost:8080/category/${id}`)
                ])
                setItems(categoryResponse.data.data);
                if (roleResponse.data.role === "Role Admin") setRole(false);
                    else setRole(true);
            } catch (err) {
                alert(err.message);
            }
        }
        categoryRoleBased();
    }, []);

    const handleDeleteBook = (bookid) => {
        if (window.confirm(`Are you sure you want to delete book ${bookid} from author ${id}? This action cannot be undone.`)) {
            axios
                .delete(`http://localhost:8080/category/${id}/delete-book/${bookid}`)
                .then(() => {
                    navigate(`/category`)
                })
                .catch((err) => {
                    alert(err.message);
                })
        }
    }

    if (items.length === 0) {
        return <div className="text-center text-gray-500">Loading...</div>; 
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">{items[0][0].Name}</h1>
                    <p className="text-gray-700">{items[0][0].Description}</p>
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
                                    <td className="py-2 px-4 flex justify-between">
                                        <span>
                                            <Link to={`/book/${item.BookID}`} className="text-blue-500 hover:underline">
                                                {item.BookName}
                                            </Link>
                                        </span>
                                        {!role && (
                                            <span>
                                                <button
                                                    onClick={() => {handleDeleteBook(item.BookID)}}
                                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </span>
                                        )}
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

export default ShowCategory