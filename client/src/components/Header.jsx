import React from 'react';
import { useApp } from '../context/AppContext';

const Header = () => {
    const { data } = useApp();
    const { title, imgUrl } = data.header;

    return (
        <header className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-90 z-0"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[100px] z-0 pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 drop-shadow-sm">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
                        Experience the future of digital interaction with our dynamic platform.
                    </p>
                    <button className="btn-primary">
                        Get Started
                    </button>
                </div>

                {/* Image Content */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden glass-card p-4 transition-transform hover:scale-[1.02] duration-500">
                        <img
                            src={imgUrl || "https://via.placeholder.com/400"}
                            alt="Header Feature"
                            className="w-full h-full object-cover rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
