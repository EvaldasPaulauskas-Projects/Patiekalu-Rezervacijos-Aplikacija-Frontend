import React from 'react';
import UserService from '../../service/UserService';

function Navbar() {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();



    const handleLogout = () => {
        const confirmDelete = window.confirm('Are you sure you want to logout this user?');
        if (confirmDelete) {
            UserService.logout();
            console.log("Logged out")
            
        }
    };


    if (isAuthenticated) {
        return (
            <nav className="flex items-center justify-between bg-gray-800 text-white p-4 shadow-lg">
            <a href='/dashboard' className='text-white font-bold text-2xl'>Patiekalų Rezervacijos Aplikacija</a>
            <a href="/food" className="bg-gray-600 ml-10 text-center mr-auto hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Patiekalai</a>
            <div className="flex items-center gap-6">
                {isAdmin && <a href="/add-food" className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Add Patiekalas</a>}
                <a href="/" onClick={handleLogout} className="inline-block bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Logout</a>
            </div>
        </nav>
        );
    } else {
        return null;
    }
    
}

export default Navbar;