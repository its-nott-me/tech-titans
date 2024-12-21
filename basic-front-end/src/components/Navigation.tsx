import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, TreePine, Target, Users, User } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/garden', icon: TreePine, label: 'Garden' },
    { to: '/challenges', icon: Target, label: 'Challenges' },
    { to: '/community', icon: Users, label: 'Community' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between space-x-4">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;