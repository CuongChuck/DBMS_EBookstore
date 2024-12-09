import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState({
        avatar: '',
        name: '',
        email: '',
        purchasedBooks: [],
        favoriteGenres: []
    });
    const navigate = useNavigate();

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
                .delete('http://localhost:8080/delete-account')
                .then((response) => {
                    if (response.data.message === "Account Deleted") navigate('/');
                    else alert("Error occurred!");
                })
                .catch((err) => {
                    console.error(err.message);
                });
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg text-black">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Profile Page</h2>
                <img src={user.avatar} alt="User Avatar" className="rounded-full w-36 h-36 mx-auto mb-4 border-4 border-gray-300" />
                <h3 className="text-2xl font-semibold">{user.name}</h3>
                <p className="mt-2">Email: {user.email}</p>
                <p className="mt-2">Role: {role ? "User" : "Admin"}</p>
                <div className="mt-4">
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
                </div>
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
