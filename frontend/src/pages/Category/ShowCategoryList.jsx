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
        <div>
            <ul>
                <li><Link to={'/admin'} >Home</Link></li>
            </ul>
            <button onClick={() => {navigate('/category/admin/add')}}>Add category</button>
            <h2>Category List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr key={item.CategoryID}>
                                <td>{item.CategoryID}</td>
                                <td>{item.Name}</td>
                                <td>{item.Description}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            navigate(`/category/admin/edit/${item.CategoryID}`
                                        )}}
                                    >
                                            Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate(`/category/admin/delete/${item.CategoryID}`
                                        )}}
                                    >
                                            Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ShowCategoryList