import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import axios from 'axios';

const Dashboard = () => {
    const { data, updateData, updateNavbarLink, loading: appLoading } = useApp();
    const [uploading, setUploading] = useState(false);
    const [localPreview, setLocalPreview] = useState(null);
    const [uploadError, setUploadError] = useState(null);

    // Handlers
    const handleTitleChange = (e) => updateData('header', { title: e.target.value });

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploadError(null);

        // Local Preview
        const objectUrl = URL.createObjectURL(file);
        setLocalPreview(objectUrl);

        // Upload
        setUploading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            // Upload to Backend
            const res = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // Update Global State with Cloudinary URL
            updateData('header', { imgUrl: res.data.url });
        } catch (error) {
            console.error("Upload failed", error);
            setUploadError("Failed to upload image. Please ensure backend is running.");
        } finally {
            setUploading(false);
        }
    };

    const handleFooterChange = (field, value) => {
        updateData('footer', { [field]: value });
    };

    if (appLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-24 pb-12 px-6 transition-colors duration-300">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-8 inline-block">
                    Dashboard Control Panel
                </h1>

                {/* Header Controls */}
                <section className="glass-card p-8">
                    <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Header Configuration</h2>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Main Title</label>
                        <input
                            type="text"
                            value={data.header.title}
                            onChange={handleTitleChange}
                            className="input-field"
                            placeholder="Enter header title..."
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Hero Image</label>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <label className="cursor-pointer btn-primary inline-flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                <span>Choose File</span>
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                            </label>

                            {uploading && (
                                <div className="flex items-center gap-2 text-blue-400 animate-pulse">
                                    <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-sm font-medium">Uploading to Cloud...</span>
                                </div>
                            )}

                            {uploadError && (
                                <span className="text-red-400 text-sm">{uploadError}</span>
                            )}
                        </div>

                        {/* Image Preview */}
                        <div className="mt-6">
                            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">Live Preview</p>
                            <div className="relative w-full max-w-sm h-48 bg-gray-100 dark:bg-slate-900/50 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 flex items-center justify-center group">
                                <img
                                    src={localPreview || data.header.imgUrl}
                                    alt="Preview"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Navbar Controls */}
                <section className="glass-card p-8">
                    <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Navbar Links</h2>
                    <div className="space-y-4">
                        {data.navbar.links.map((link, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 dark:bg-slate-900/40 rounded-xl border border-gray-200 dark:border-slate-700/50 hover:border-blue-500/30 transition-colors">
                                <div>
                                    <label className="block text-xs uppercase text-gray-600 dark:text-gray-400 font-semibold mb-1">Label {index + 1}</label>
                                    <input
                                        type="text"
                                        value={link.label}
                                        onChange={(e) => updateNavbarLink(index, 'label', e.target.value)}
                                        className="input-field"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-gray-600 dark:text-gray-400 font-semibold mb-1">URL {index + 1}</label>
                                    <input
                                        type="text"
                                        value={link.url}
                                        onChange={(e) => updateNavbarLink(index, 'url', e.target.value)}
                                        className="input-field"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer Controls */}
                <section className="glass-card p-8">
                    <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">Footer Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <input
                                type="email"
                                value={data.footer.email}
                                onChange={(e) => handleFooterChange('email', e.target.value)}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                            <input
                                type="text"
                                value={data.footer.phone}
                                onChange={(e) => handleFooterChange('phone', e.target.value)}
                                className="input-field"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Physical Address</label>
                            <input
                                type="text"
                                value={data.footer.address}
                                onChange={(e) => handleFooterChange('address', e.target.value)}
                                className="input-field"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
