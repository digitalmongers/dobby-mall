'use client';
import React, { useState } from 'react';
import { 
  Search, 
  LayoutDashboard, 
  Store, 
  DollarSign, 
  Link, 
  GraduationCap, 
  CreditCard, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

const StudentSidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' },
    { name: 'Shops', icon: Store, color: 'text-gray-700' },
    { name: 'Earnings', icon: DollarSign, color: 'text-gray-700' },
    { name: 'Affiliate Links', icon: Link, color: 'text-gray-700' },
    { name: 'Training', icon: GraduationCap, color: 'text-gray-700' },
    { name: 'Payouts', icon: CreditCard, color: 'text-gray-700' },
    { name: 'Settings', icon: Settings, color: 'text-gray-700' },
    { name: 'Help & Support', icon: HelpCircle, color: 'text-gray-700' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col  ">
      {/* Header */}
      <div className="p-4 -mt-1 border-b border-[#FF737399]">
        <div className="bg-gray-800 text-white text-center py-2 px-4 rounded font-semibold text-sm tracking-wide">
          DOBBY
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search menu"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;
          
          return (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex items-center px-3 py-3 mb-1 rounded-md text-left text-sm font-medium transition-colors duration-150 hover:bg-gray-50 ${
                isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <Icon 
                className={`w-5 h-5 mr-3 ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`} 
              />
              <span className={isActive ? 'text-blue-600' : 'text-gray-700'}>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StudentSidebar;