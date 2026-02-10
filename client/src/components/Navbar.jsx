import React from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { data, theme, toggleTheme } = useApp();
    const links = data?.navbar?.links || [];

    return (
        <nav className="glass sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Tech Brand
            </div>
            <div className="flex items-center space-x-8">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.url}
                        className="text-gray-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium uppercase tracking-wider relative group"
                    >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all group-hover:w-full"></span>
                    </Link>
                ))}
                <Link
                    to="/dashboard"
                    className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium uppercase tracking-wider border border-gray-400 dark:border-gray-600 px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-600 dark:hover:border-gray-400 transition-all"
                >
                    Dashboard
                </Link>

                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-yellow-400 transition-all hover:ring-2 ring-blue-500/50"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? (
                        // Sun Icon
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    ) : (
                        // Moon Icon
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
