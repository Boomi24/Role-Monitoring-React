import React, { useState } from 'react';
import { Search, Bell, Moon, Sun, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = ({ title }) => {
    const { theme, toggleTheme, searchQuery, setSearchQuery, notifications, clearNotifications } = useAppContext();
    const [showNotifs, setShowNotifs] = useState(false);

    return (
        <header className="header glass-card">
            <div className="header-left">
                <h1>{title}</h1>
            </div>

            <div className="header-right">
                <div className="search-bar">
                    <Search size={18} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search roles, users or auth data..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="header-actions">
                    <button className="action-btn" onClick={toggleTheme}>
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <div className="notification-wrapper">
                        <button
                            className={`action-btn ${notifications.length > 0 ? 'notification' : ''}`}
                            onClick={() => setShowNotifs(!showNotifs)}
                        >
                            <Bell size={20} />
                            {notifications.length > 0 && <span className="badge"></span>}
                        </button>

                        <AnimatePresence>
                            {showNotifs && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="notification-dropdown glass-card"
                                >
                                    <div className="notif-header">
                                        <h3>Notifications</h3>
                                        <button onClick={clearNotifications} className="clear-btn">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                    <div className="notif-list">
                                        {notifications.length > 0 ? (
                                            notifications.map(n => (
                                                <div key={n.id} className={`notif-item ${n.type}`}>
                                                    <p>{n.message}</p>
                                                    <span>{n.time}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="empty-notifs">No new notifications</p>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
