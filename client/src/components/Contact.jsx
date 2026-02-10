import React from 'react';
import { useApp } from '../context/AppContext';

const Contact = () => {
    const { data } = useApp();
    const { email, phone, address } = data.footer;

    return (
        <div id="contact-page" className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-300 dark:via-indigo-300 dark:to-purple-300 mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
                        We'd love to hear from you. Here's how you can reach us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Email Card */}
                    <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:-translate-y-1 shadow-lg dark:shadow-none">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Email Us</h3>
                        <p className="text-gray-600 dark:text-slate-400 break-words">{email}</p>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group hover:transform hover:-translate-y-1 shadow-lg dark:shadow-none">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-300 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-500/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Call Us</h3>
                        <p className="text-gray-600 dark:text-slate-400">{phone}</p>
                    </div>

                    {/* Address Card */}
                    <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:-translate-y-1 shadow-lg dark:shadow-none">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-500/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Visit Us</h3>
                        <p className="text-gray-600 dark:text-slate-400">{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
