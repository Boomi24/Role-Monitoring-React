import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BarChart3,
  Users,
  Settings,
  ShieldCheck,
  BookOpen,
  GitBranch,
  Box,
  UserCircle
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { path: '/', name: 'Dashboard', icon: BarChart3 },
  { path: '/assignments', name: 'Role Assignments (AGR_USERS)', icon: Users },
  { path: '/definitions', name: 'Role Definitions (AGR_DEFINE)', icon: ShieldCheck },
  { path: '/hierarchy', name: 'Menu Hierarchy (AGR_TEXTS)', icon: GitBranch },
  { path: '/auth-data', name: 'Auth Data (AGR_1251)', icon: BookOpen },
  { path: '/org-elements', name: 'Org Elements (AGR_1252)', icon: Box },
  { path: '/profiles', name: 'Profile Texts (AGR_PROF)', icon: Settings },
  { path: '/users', name: 'User Masters (UST04)', icon: UserCircle },
];

const Sidebar = () => {
  return (
    <aside className="sidebar glass-card">
      <div className="sidebar-header">
        <div className="logo-container">
          <ShieldCheck size={32} color="var(--primary)" />
          <span style={{ color: 'var(--primary)', fontWeight: '800' }}>SAP ROLE MONITOR</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="avatar">JD</div>
          <div className="det">
            <p className="name">John Doe</p>
            <p className="role">SAP Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
