import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { data } = useApp();
    const links = data?.navbar?.links || [];

    return (
        <nav className="glass sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
               Ahsan Brand
            </div>
            <div className="flex space-x-8">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider relative group"
                    >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                    </a>
                ))}
                {/* Dashboard Link for Admin access */}
                <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider ml-4 border border-gray-600 px-3 py-1 rounded hover:bg-gray-800"
                >
                    Dashboard
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
