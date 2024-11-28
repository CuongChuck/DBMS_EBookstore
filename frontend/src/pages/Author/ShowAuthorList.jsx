import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const ShowAuthorList = () => {
    const [role, setRole] = useState(null);
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
                else if (roleResponse.data.role === "Role User") setRole(true);
                setItems(authorResponse.data.data);
            } catch (err) {
                console.error(err.message)
            }
        }
        authorListRoleBased();
    }, []);
    return (
        <div>
            {!role && (<button onClick={() => {navigate('/author/add')}}>Add author</button>)}
            <h2>Author List</h2>
            <table>
                <thead>
                    <tr>
                        {role ? (<th>No</th>) : (<th>ID</th>)}
                        <th>Name</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{role ? index : item.AuthorID}</td>
                                <td>{item.Name}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            navigate(`/author/${item.AuthorID}`);
                                        }}
                                    >
                                            Details
                                    </button>
                                    {!role && (
                                        <button
                                            onClick={() => {
                                                navigate(`/author/edit/${item.AuthorID}`);
                                            }}
                                        >
                                                Edit
                                        </button>
                                    )}
                                    {!role && (
                                        <button
                                            onClick={() => {
                                                navigate(`/author/delete/${item.AuthorID}`
                                            )}}
                                        >
                                                Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ShowAuthorList