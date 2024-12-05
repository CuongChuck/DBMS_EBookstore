import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-30 w-full bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link to="/">Bookstore</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="px-6 py-2 text-black hover:bg-blue-500 hover:text-white rounded-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to="/publisher" className="px-6 py-2 text-black hover:bg-blue-500 hover:text-white rounded-lg">
              Publisher
            </Link>
          </li>
          <li>
            <Link to="/author" className="px-6 py-2 text-black hover:bg-blue-500 hover:text-white rounded-lg">
              Author
            </Link>
          </li>
          <li>
            <Link to="/translator" className="px-6 py-2 text-black hover:bg-blue-500 hover:text-white rounded-lg">
              Translator
            </Link>
          </li>
          <li>
            <Link to="/category" className="px-6 py-2 text-black hover:bg-blue-500 hover:text-white rounded-lg">
              Category
            </Link>
          </li>
          <li>
            <Link to="/book" className="px-6 py-2 text-black hover:bg-blue-500 hover:text-white rounded-lg">
              Book
            </Link>
          </li>
          <li className="relative">
            <button 
              onClick={toggleDropdown} 
              className="px-6 text-black hover:bg-blue-500 hover:text-white rounded-lg"
            >
              Profile
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                <ul className="flex flex-col">
                  <li>
                    <Link to="/user/auth" className="block px-6 py-2 text-black hover:bg-blue-500 hover:text-white rounded-t-lg">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="block px-6 py-2 text-black hover:bg-blue-500 hover:text-white rounded-b-lg">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
