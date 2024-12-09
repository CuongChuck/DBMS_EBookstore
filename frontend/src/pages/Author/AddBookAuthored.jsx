import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddBookAuthored = () => {
    const [bookid, setBookID] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleAddBookAuthored = () => {
        axios
            .post(`http://localhost:8080/author/add-book/${id}`, { bookid })
            .then(() => {
                navigate('/author');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding an book authored");
            })
    };

    return (
        <div>
            <h2>Add book authored</h2>
            <div>
                <label>Book ID</label>
                <input
                    type='number'
                    value={bookid}
                    onChange={(e) => setBookID(e.target.value)}
                />
            </div>
            <button onClick={handleAddBookAuthored}>Save</button>
            <button onClick={() => {navigate('/author')}}>Cancel</button>
        </div>
    )
}

export default AddBookAuthored