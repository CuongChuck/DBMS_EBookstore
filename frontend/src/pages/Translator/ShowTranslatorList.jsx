import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const ShowTranslatorList = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:8080/translator")
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
            <button onClick={() => {navigate('/translator/admin/add')}}>Add translator</button>
            <h2>Translator List</h2>
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
                            <tr key={item.TranslatorID}>
                                <td>{item.TranslatorID}</td>
                                <td>{item.Name}</td>
                                <td>{item.Description}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            navigate(`/translator/admin/edit/${item.TranslatorID}`
                                        )}}
                                    >
                                            Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate(`/translator/admin/delete/${item.TranslatorID}`
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

export default ShowTranslatorList