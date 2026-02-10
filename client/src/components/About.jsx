import React from 'react';
import { useApp } from '../context/AppContext';

const About = () => {
    const { data } = useApp();
    const { title, description, purpose, techStack } = data?.about || {
        title: "About",
        description: "Loading...",
        purpose: "Loading...",
        techStack: []
    };

    return (
        <div id="about-page" className="w-full min-h-[80vh] bg-gray-50 dark:bg-slate-900 transition-colors duration-300 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 blur-3xl">
                        <div className="w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob"></div>
                        <div className="w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob ml-12" style={{ animationDelay: '2s' }}></div>
                    </div>
                    <h1 className="relative text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 mb-6 pb-2">
                        {title}
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    {/* Description Card */}
                    <div className="glass-card p-8 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Project Overview</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            {description}
                        </p>
                    </div>

                    {/* Purpose Card */}
                    <div className="glass-card p-8 transform hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-indigo-500/20 rounded-lg mr-4">
                                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            {purpose}
                        </p>
                    </div>

                    {/* Tech Stack Section (Full Width) */}
                    <div className="md:col-span-2 glass-card p-8 mt-4">
                        <div className="flex items-center mb-8 justify-center">
                            <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Technologies Used</h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            {techStack && techStack.map((tech, index) => (
                                <div
                                    key={index}
                                    className="group relative px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-default"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="relative font-medium text-gray-600 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
