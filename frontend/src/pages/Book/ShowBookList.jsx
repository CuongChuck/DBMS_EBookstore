import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ShowBookList = () => {
    const [role, setRole] = useState(null);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const bookListRoleBased = async () => {
            try {
                const [roleResponse, bookResponse] = await Promise.all([
                    axios.get('http://localhost:8080/role'),
                    axios.get('http://localhost:8080/book')
                ]);
                if (roleResponse.data.role === "Role Admin") setRole(false);
                else if (roleResponse.data.role === "Role User") setRole(true);
                setItems(bookResponse.data.data);
            } catch (err) {
                console.error(err.message)
            }
        }
        bookListRoleBased();
    }, []);
    return (
        <div>
            <h2>Books</h2>
            {!role && (<button onClick={() => {navigate('/book/add')}}>Add book</button>)}
            <h2>Book List</h2>
            <table>
                <thead>
                    <tr>
                        {role ? (<th>No</th>) : (<th>ID</th>)}
                        <th>Name</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{role ? index : item.BookID}</td>
                                <td>{item.BookName}</td>
                                <td>{item.SellingPrice}</td>
                                <td>
                                    {!role && (
                                        <button
                                            onClick={() => {
                                                navigate(`/book/edit/${item.BookID}`)
                                            }}
                                        >
                                            Edit
                                        </button>
                                    )}
                                    {!role && (
                                        <button
                                            onClick={() => {
                                                navigate(`/book/delete/${item.BookID}`)
                                            }}
                                        >
                                            Delete
                                        </button>
                                    )}
                                    <button
                                        onClick={() => {
                                            navigate(`/book/${item.BookID}`)
                                        }}
                                    >
                                        Details
                                    </button>                        
                                </td>
                            </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}

export default ShowBookList