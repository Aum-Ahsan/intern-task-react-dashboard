/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

const API_URL = 'http://localhost:5000/api/components';

export const AppProvider = ({ children }) => {
    const [data, setData] = useState({
        header: {
            title: "Welcome to My  Brand",
            imgUrl: "https://via.placeholder.com/150",
        },
        navbar: {
            links: [
                { label: "Home", url: "/" },
                { label: "About", url: "/about" },
                { label: "Contact", url: "/contact" },
            ],
        },
        about: {
            title: "About This Project",
            description: "Empowering users with a modern, dynamic dashboard experience. This application serves as a comprehensive demonstration of full-stack capabilities, integrating a responsive frontend with a robust backend.",
            purpose: "To provide a seamless, intuitive interface for content management and data visualization, ensuring efficiency and ease of use for administrators.",
            techStack: ["React", "Tailwind CSS", "Node.js", "Express", "Vite", "Cloudinary"],
        },
        footer: {
            email: "contact@example.com",
            phone: "+1 234 567 890",
            address: "123 Tech Street, Silicon Valley",
        },
    });

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    // Theme Effect
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const [loading, setLoading] = useState(true);

    // Load from LocalStorage or Backend on mount
    useEffect(() => {
        const loadData = async () => {
            console.log("App: Starting data load...");
            // 1. Try LocalStorage first for instant load
            const cached = localStorage.getItem('appData');
            if (cached) {
                console.log("App: Loaded cached data", JSON.parse(cached));
                setData(prev => ({ ...prev, ...JSON.parse(cached) }));
                setLoading(false);
            }

            // 2. Fetch from Backend to sync
            try {
                console.log("App: Fetching from API...");
                const response = await axios.get(API_URL);
                console.log("App: API Response", response.data);
                if (response.data) {
                    setData(prev => ({ ...prev, ...response.data }));
                    // LocalStorage update handled by the other useEffect
                }
            } catch (error) {
                console.error("Failed to fetch from backend", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    // Unified Persistence Effect
    useEffect(() => {
        if (loading) return; // Don't persist during initial load

        // Instant LocalStorage Save
        localStorage.setItem('appData', JSON.stringify(data));

        // Debounced Backend Sync (1 second delay)
        const timeoutId = setTimeout(() => {
            axios.post(API_URL, data)
                .then(() => console.log("Data synced to backend"))
                .catch(err => console.error("Backend sync failed", err));
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [data, loading]);

    // Update Function
    const updateData = (section, updates) => {
        setData((prev) => ({
            ...prev,
            [section]: { ...prev[section], ...updates },
        }));
    };

    const updateNavbarLink = (index, field, value) => {
        setData((prev) => {
            const newLinks = [...prev.navbar.links];
            newLinks[index] = { ...newLinks[index], [field]: value };
            return {
                ...prev,
                navbar: { ...prev.navbar, links: newLinks }
            };
        });
    };

    // Cloudinary Upload Helper within Context or Component?
    // Component is easy, but context can provide the function.
    // Let's keep it in component for simplicity or here for reusability. AppContext is fine.

    return (
        <AppContext.Provider value={{ data, updateData, updateNavbarLink, loading, theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};
