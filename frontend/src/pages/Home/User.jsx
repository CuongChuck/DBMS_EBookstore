import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState({});
    const [role, setRole] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios
            .get(`http://localhost:8080/user/${id}`)
            .then((response) => {
                setUser(response.data.data[0]);
                response.data.role == 1 ? setRole(true) : setRole(false);
            })
            .catch((err) => {
                alert(err.message);
            })
    }, [])

    const handleLogOut = () => {
        axios
            .get('http://localhost:8080/logout')
            .then((response) => {
                if (response.data.message === "Logout Success") navigate('/');
                else alert("Error occurred!");
            })
            .catch((err) => {
                console.error(err.message);
            })
    };

    const handleDeleteAccount = () => {
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            axios
                .delete(`http://localhost:8080/user/delete/${id}`)
                .then(() => {
                    navigate('/');
                })
                .catch((err) => {
                    console.error(err.message);
                    alert("Error occurred!");
                });
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg text-black">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Profile Page</h2>
                <img src={user.avatar} alt="User Avatar" className="rounded-full w-36 h-36 mx-auto mb-4 border-4 border-gray-300" />
                <p className="mt-2">Username: {user.Username}</p>
                <p className="mt-2">Name: {user.Name}</p>
                <p className="mt-2">Email: {user.Email}</p>
                <p className="mt-2">Role: {role ? "User" : "Admin"}</p>
                <p className="mt-2">Address: {user.Address}</p>
                <p className="mt-2">Date Created: {user.DateJoined}</p>
                {/*<div className="mt-4">
                    <h4 className="text-xl font-semibold">Purchased Books:</h4>
                    <ul className="list-disc list-inside">
                        {user.purchasedBooks.map((book, index) => (
                            <li key={index}>{book.title} by {book.author}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <h4 className="text-xl font-semibold">Favorite Genres:</h4>
                    <ul className="list-disc list-inside">
                        {user.favoriteGenres.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                </div> */}
                <button 
                    onClick={handleLogOut} 
                    className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
                >
                    Log Out
                </button>
                <button 
                    onClick={handleDeleteAccount} 
                    className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-300"
                >
                    Delete Account
                </button>
            </div>
        </div>
    );
}

export default User;
