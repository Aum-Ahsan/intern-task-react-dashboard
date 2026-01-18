import React from 'react';
import { useApp } from '../context/AppContext';

const Footer = () => {
    const { data } = useApp();
    const { email, phone, address } = data.footer;

    return (
        <footer className="w-full bg-slate-950 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Brand */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Ahsan Brand</h3>
                    <p className="text-gray-400 text-sm">
                        Building the future, one pixel at a time.
                    </p>
                </div>

                {/* Links (Static for Footer as per request only Header/Nav/Footer inputs are dynamic, footer links not specified to be dynamic list but footer info is) */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <span className="text-blue-400">📧</span> {email}
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <span className="text-blue-400">📱</span> {phone}
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <span className="text-blue-400">📍</span> {address}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-gray-600 text-xs mt-12">
                © {new Date().getFullYear()} Brand Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
