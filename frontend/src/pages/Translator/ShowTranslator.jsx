import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ShowTranslator = () => {
    const [role, setRole] = useState(true);
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        const authorRoleBased = async () => {
            try {
                const [roleResponse, translatorResponse] = await Promise.all([
                    axios.get('http://localhost:8080/role'),
                    axios.get(`http://localhost:8080/translator/${id}`)
                ])
                setItems(translatorResponse.data.data);
                if (roleResponse.data.role === "Role Admin") setRole(false);
                    else setRole(true);
            } catch (err) {
                alert(err.message);
            }
        }
        authorRoleBased();
    }, [id])

    if (items.length === 0) {
        return <div className="text-center text-gray-500">Loading...</div>; // Show loading state or a message
    }

    const handleDeleteBook = (bookid) => {
        if (window.confirm(`Are you sure you want to delete book ${bookid} from translator ${id}? This action cannot be undone.`)) {
            axios
                .delete(`http://localhost:8080/translator/${id}/delete-book/${bookid}`)
                .then(() => {
                    navigate(`/translator`)
                })
                .catch((err) => {
                    alert(err.message);
                })
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <p className="text-2xl font-semibold mb-2">Name: {items[0][0].Name}</p>
                <p className="text-gray-700 mb-4">Description: {items[0][0].Description}</p>
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

export default ShowTranslator