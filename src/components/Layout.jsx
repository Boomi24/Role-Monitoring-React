import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import './Layout.css';

const Layout = () => {
    const { theme, pageTitle } = useAppContext();

    return (
        <div className="app-container" data-theme={theme}>
            <Sidebar />
            <main className="main-content">
                <Header title={pageTitle} />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="page-content"
                >
                    <Outlet />
                </motion.div>
            </main>
        </div>
    );
};

export default Layout;
