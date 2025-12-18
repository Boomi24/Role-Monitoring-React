import React, { useEffect } from 'react';
import DataTable from '../components/DataTable';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const TablePage = ({ title, columns, data, loading, description }) => {
    const { setPageTitle } = useAppContext();

    useEffect(() => {
        setPageTitle(title);
    }, [title, setPageTitle]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="table-page"
        >
            <div className="page-info glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{description}</p>
            </div>
            <DataTable columns={columns} data={data} loading={loading} />
        </motion.div>
    );
};

export default TablePage;
