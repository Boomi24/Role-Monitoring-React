import React from 'react';
import './StatsCard.css';
import { motion } from 'framer-motion';

const StatsCard = ({ title, value, icon: Icon, trend, color }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="stats-card glass-card"
        >
            <div className="stats-icon" style={{ backgroundColor: `${color}15`, color: color }}>
                <Icon size={24} />
            </div>
            <div className="stats-info">
                <h3>{title}</h3>
                <p className="value">{value}</p>
                <div className="trend">
                    <span className={trend >= 0 ? 'up' : 'down'}>
                        {trend >= 0 ? '+' : ''}{trend}%
                    </span>
                    <span className="since">vs last month</span>
                </div>
            </div>
        </motion.div>
    );
};

export default StatsCard;
