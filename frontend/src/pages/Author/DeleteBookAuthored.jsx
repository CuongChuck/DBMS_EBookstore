import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBookAuthored = () => {
    const { authorid, bookid } = useParams();
    const navigate = useNavigate();
    const handleDeleteBookAuthored = () => {
        axios
            .delete(`http://localhost:8080/author/delete-book/${authorid}/${bookid}`)
            .then(() => {
                navigate(`/author/${authorid}`);
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred when deleting a book from an author");
            })
    };

    return (
        <div>
            <h2>Are you sure you want to delete book {bookid} from author {authorid}</h2>
            <button onClick={handleDeleteBookAuthored}>Yes</button>
            <button onClick={() => {navigate(`/author/${authorid}`)}}>Cancel</button>
        </div>
    )
}

export default DeleteBookAuthored