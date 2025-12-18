import React, { useEffect } from 'react';
import StatsCard from '../components/StatsCard';
import { STATS, AGR_USERS } from '../data/mockData';
import { Users, Shield, AlertTriangle, Clock } from 'lucide-react';
import DataTable from '../components/DataTable';
import { useAppContext } from '../context/AppContext';
import './Dashboard.css';

const Dashboard = () => {
    const icons = [Shield, Users, AlertTriangle, Clock];
    const { setPageTitle } = useAppContext();

    useEffect(() => {
        setPageTitle('System Overview');
    }, [setPageTitle]);

    const columns = [
        { header: 'Username', accessor: 'UNAME' },
        { header: 'Assigned Role', accessor: 'AGR_NAME' },
        { header: 'Valid From', accessor: 'FROM_DAT' },
        { header: 'Valid To', accessor: 'TO_DAT' },
        {
            header: 'Status',
            accessor: 'TO_DAT',
            render: (val) => (
                <span className={`status-chip ${val === '9999-12-31' ? 'success' : 'warning'}`}>
                    {val === '9999-12-31' ? 'Active' : 'Expiring'}
                </span>
            )
        },
    ];

    return (
        <div className="dashboard">
            <div className="stats-grid">
                {STATS.map((stat, idx) => (
                    <StatsCard
                        key={idx}
                        {...stat}
                        icon={icons[idx]}
                    />
                ))}
            </div>

            <div className="dashboard-sections">
                <div className="recent-activity section">
                    <div className="section-header">
                        <h2>Recent Role Assignments</h2>
                        <button className="btn-text">View All</button>
                    </div>
                    <DataTable columns={columns} data={AGR_USERS.slice(0, 5)} />
                </div>

                <div className="system-health section glass-card">
                    <h2>System Health</h2>
                    <div className="health-grid">
                        <div className="health-item">
                            <p className="label">RFC Connectivity</p>
                            <div className="status success">Stable</div>
                        </div>
                        <div className="health-item">
                            <p className="label">Auth Buffer</p>
                            <div className="status success">98% Free</div>
                        </div>
                        <div className="health-item">
                            <p className="label">Sync Status</p>
                            <div className="status info">Last sync: 2h ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
