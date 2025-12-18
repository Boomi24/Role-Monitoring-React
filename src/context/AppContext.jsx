import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [searchQuery, setSearchQuery] = useState('');
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'New role assignment: SAP_ALL to BREADS', time: '5m ago', type: 'info' },
        { id: 2, message: 'Critical authorization change in Z_CHEMIST_PRO', time: '1h ago', type: 'warning' },
    ]);

    const [pageTitle, setPageTitle] = useState('Overview');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const addNotification = (notif) => {
        setNotifications(prev => [{ id: Date.now(), ...notif }, ...prev]);
    };

    const clearNotifications = () => {
        setNotifications([]);
    };

    return (
        <AppContext.Provider value={{
            theme,
            toggleTheme,
            searchQuery,
            setSearchQuery,
            notifications,
            addNotification,
            clearNotifications,
            pageTitle,
            setPageTitle
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
