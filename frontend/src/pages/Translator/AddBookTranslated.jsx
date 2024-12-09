import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddBookTranslated = () => {
    const [bookid, setBookID] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleAddBookTranslated = () => {
        axios
            .post(`http://localhost:8080/translator/add-book/${id}`, { bookid })
            .then(() => {
                navigate('/translator');
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when adding an book translated");
            })
    };

    return (
        <div>
            <h2>Add book translated</h2>
            <div>
                <label>Book ID</label>
                <input
                    type='number'
                    value={bookid}
                    onChange={(e) => setBookID(e.target.value)}
                />
            </div>
            <button onClick={handleAddBookTranslated}>Save</button>
            <button onClick={() => {navigate('/author')}}>Cancel</button>
        </div>
    )
}

export default AddBookTranslated