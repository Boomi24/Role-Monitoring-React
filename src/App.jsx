import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TablePage from './pages/TablePage';
import Layout from './components/Layout';
import {
  AGR_USERS,
  AGR_DEFINE,
  AGR_TEXTS,
  AGR_1251,
  AGR_1252,
  AGR_PROF,
  UST04
} from './data/mockData';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/assignments"
            element={
              <TablePage
                title="Role Assignments (AGR_USERS)"
                description="Assignment of roles to users with validity periods and assignment types."
                data={AGR_USERS}
                columns={[
                  { header: 'Username', accessor: 'UNAME' },
                  { header: 'Role Name', accessor: 'AGR_NAME' },
                  { header: 'From', accessor: 'FROM_DAT' },
                  { header: 'To', accessor: 'TO_DAT' },
                  { header: 'Direct', accessor: 'DIRECT', render: (val) => val === 'X' ? 'Yes' : 'No' },
                ]}
              />
            }
          />

          <Route
            path="/definitions"
            element={
              <TablePage
                title="Role Definitions (AGR_DEFINE)"
                description="Master role definitions, including parent-child relationships and creation metadata."
                data={AGR_DEFINE}
                columns={[
                  { header: 'Role Name', accessor: 'AGR_NAME' },
                  { header: 'Parent Role', accessor: 'PARENT_AGR', render: (val) => val || '-' },
                  { header: 'Created By', accessor: 'CREATE_USR' },
                  { header: 'Created On', accessor: 'CREATE_DAT' },
                ]}
              />
            }
          />

          <Route
            path="/hierarchy"
            element={
              <TablePage
                title="Menu Hierarchies (AGR_TEXTS)"
                description="Structural data for hierarchical menus and role naming translations."
                data={AGR_TEXTS}
                columns={[
                  { header: 'Role Name', accessor: 'AGR_NAME' },
                  { header: 'Description / Menu Text', accessor: 'TEXT' },
                ]}
              />
            }
          />

          <Route
            path="/auth-data"
            element={
              <TablePage
                title="Authorization Data (AGR_1251)"
                description="Technical authorization objects and field values associated with activity groups."
                data={AGR_1251}
                columns={[
                  { header: 'Role Name', accessor: 'AGR_NAME' },
                  { header: 'Auth Object', accessor: 'OBJECT' },
                  { header: 'Auth ID', accessor: 'AUTH' },
                  { header: 'Field', accessor: 'FIELD' },
                  { header: 'Value', accessor: 'VAL' },
                ]}
              />
            }
          />

          <Route
            path="/org-elements"
            element={
              <TablePage
                title="Organizational Elements (AGR_1252)"
                description="Organizational levels and restrictions within specific authorization objects."
                data={AGR_1252}
                columns={[
                  { header: 'Role Name', accessor: 'AGR_NAME' },
                  { header: 'Object', accessor: 'OBJECT' },
                  { header: 'Org Variable', accessor: 'VARBL' },
                  { header: 'Low Value', accessor: 'LOW' },
                  { header: 'High Value', accessor: 'HIGH', render: (val) => val || '-' },
                ]}
              />
            }
          />

          <Route
            path="/profiles"
            element={
              <TablePage
                title="Profile Texts (AGR_PROF)"
                description="Descriptions and profiles associated with single roles."
                data={AGR_PROF}
                columns={[
                  { header: 'Role Name', accessor: 'AGR_NAME' },
                  { header: 'Profile Name', accessor: 'PROFILE' },
                  { header: 'Profile Text', accessor: 'PTEXT' },
                ]}
              />
            }
          />

          <Route
            path="/users"
            element={
              <TablePage
                title="User Masters (UST04)"
                description="User master profiles and direct profile assignments."
                data={UST04}
                columns={[
                  { header: 'User ID', accessor: 'BNAME' },
                  { header: 'Profile Assigned', accessor: 'PROFILE' },
                ]}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
