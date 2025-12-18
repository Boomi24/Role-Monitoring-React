import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import './DataTable.css';

const DataTable = ({ columns, data, loading }) => {
    const { searchQuery } = useAppContext();

    const filteredData = useMemo(() => {
        if (!searchQuery) return data;

        const lowerQuery = searchQuery.toLowerCase();
        return data.filter(row => {
            return columns.some(col => {
                const val = row[col.accessor];
                if (val === null || val === undefined) return false;
                return String(val).toLowerCase().includes(lowerQuery);
            });
        });
    }, [data, searchQuery, columns]);

    if (loading) {
        return (
            <div className="table-loading glass-card">
                <div className="spinner"></div>
                <p>Fetching SAP Records...</p>
            </div>
        );
    }

    return (
        <div className="data-table-container glass-card">
            <table className="data-table">
                <thead>
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((row, rowIdx) => (
                            <tr key={rowIdx}>
                                {columns.map((col, colIdx) => (
                                    <td key={colIdx}>
                                        {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="no-data">
                                No records found matching "{searchQuery}".
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
