import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Home, FileText, User, Briefcase, Award, Code, Settings } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/builder', label: 'Builder', icon: FileText },
    { path: '/templates', label: 'Templates', icon: Award },
    { path: '/examples', label: 'Examples', icon: Code },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
              <Brain className="h-8 w-8" />
              <span>AI Resume Builder</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/builder"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Start Building
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;