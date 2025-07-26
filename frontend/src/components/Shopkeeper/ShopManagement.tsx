'use client';
import React, { useState } from 'react';
import { Plus, Eye, Edit, LucideIcon } from 'lucide-react';
import {ChevronLeft, ChevronRight } from "lucide-react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

interface Shop {
  id: string;
  name: string;
  owner: string;
  dateCreated: string;
  status: string;
  statusColor: string;
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeText: string;
  icon: LucideIcon;
  bgColor: string;
}

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: 'outline' | 'solid';
  onClick?: () => void;
}

const ShopManagement = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("ShopManagement")
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const totalPages = 6;

    const statsCards = [
    {
      title: "Total Shops",
      value: "24",
      subtitle: "12% from Last Month",
      icon: <img src="/images/shop-1.png" className="h-6 w-6"/>,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      subtitleImg: <img src="/images/Arrow 3.png"/>,
    },
    {
      title: "Active Shops",
      value: "18",
      subtitle:"3% New This Month",
      icon: <img src="/images/shop -2.png" className="h-6 w-6"/>,
      color: "text-green-600",
      bgColor: "bg-green-50",
      subtitleImg:<img src="/images/Arrow 3.png"/>,
    },
    {
      title: "Pending Approvals",
      value: "4",
      subtitle: "2% Completed",
      icon: <img src="/images/Clock -2.png" className="h-6 w-6"/>,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      subtitleImg: <img src="/images/Arrow.png" className="w-3 h-3"/>
    },
    {
      title: "Shop Owners",
      value: "15",
      subtitle: "6% of last Quarter",
      icon: <img src="/images/Users.png" className="h-6 w-6"/>,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
  ]
  const shops: Shop[] = [
    {
      id: '#SHOP-1001',
      name: 'Fashion Haven',
      owner: 'Aman Singh',
      dateCreated: 'June-22-2025',
      status: 'Active',
      statusColor: "text-[#0FBE06] bg-[#EFFFF9]"
    },
    {
      id: '#SHOP-1002',
      name: 'Tech Gadgets',
      owner: 'Deepak Yadav',
      dateCreated: 'May-25-2025',
      status: 'Pending',
      statusColor: 'text-blue-600 bg-[#E9F3FF]'
    },
    {
      id: '#SHOP-1003',
      name: 'Home Essentials',
      owner: 'Sandeep Goutam',
      dateCreated: 'May-20-2025',
      status: 'Suspended',
      statusColor: 'text-[#DEA802] bg-[#FFF9DE]'
    },
    {
      id: '#SHOP-1004',
      name: 'Book World',
      owner: 'Deep Singh',
      dateCreated: 'May-20-2025',
      status: 'Closed',
      statusColor: 'text-[#FF0000] bg-[#FFF2F2]'
    }
  ];

  const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeText, icon: Icon, bgColor }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xs text-gray-500">{change} {changeText}</p>
      </div>
    </div>
  );

  const ActionButton: React.FC<ActionButtonProps> = ({ children, variant = 'outline', onClick }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-medium rounded-md ${
        variant === 'outline'
          ? 'border border-gray-300 text-gray-700 hover:bg-gray-50'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeItem={activeMenuItem}
        setActiveItem={setActiveMenuItem}
      />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-opacity-50 z-40 lg:hidden" onClick={toggleSidebar} />}

      {/* Main Content - Takes full width of remaining space */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar Component */}
        <Navbar toggleSidebar={toggleSidebar} />
      {/* Main Content*/}
      <div className="bg-white font-[poppins]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-xl font-semibold text-gray-900">Shop Management Dashboard</h1>
            <button className="inline-flex items-center px-4 py-2 bg-[#3801FF33] text-[#0000FF] text-xs font-medium rounded-sm hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Create New Shop
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-12xl px-2 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 ">
           {statsCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg border pt-3 pb-3 pr-5 pl-5 ">
        
            {/* Title and Icon on opposite sides */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-[17px] font-medium text-[#262525]">{card.title}</p>
              <div className={`w-10 h-10 ${card.bgColor} rounded-lg flex items-center justify-center`}>
                <span className="text-lg">{card.icon}</span>
              </div>
            </div>

            {/* Value and Subtitle with Image */}
            <div className="space-y-2">
              <p className="text-[28px] font-bold text-gray-900">{card.value}</p>
              <div className="flex items-center space-x-2">
                {card.subtitleImg }
                <p className="text-[13px] text-[#505050]">{card.subtitle}</p>
              </div>
              </div>
            </div>
            ))}
          </div>
        {/* Shops Table */}
        <div className="bg-gray-300 rounded-lg shadow-lg border">
          <div className="p-6  flex items-center justify-between">
            <h2 className="font-medium text-[#000000] flex items-center text-[22px]">Total Shops</h2>
            <button className="text-[#2F1DF7] text-[18px] hover:text-blue-700">View All</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border">
                <tr>
                      {["Shop ID", "Shop Name", "Owner", "Date Created", "Status","Actions"].map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-[15px] font-medium text-[#282727] uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
              </thead>
              <tbody className="bg-white">
                {shops.map((shop, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-[14px] font-medium text-[#282727]">
                      {shop.id}
                    </td>
                    <td className="px-6 py-4 text-[15px] text-[#282727]">
                      {shop.name}
                    </td>
                    <td className="px-6 py-4 text-[15px] text-[#282727]">
                      {shop.owner}
                    </td>
                    <td className="px-6 py-4 text-[15px] text-[#282727]">
                      {shop.dateCreated}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 font-small rounded-sm ${shop.statusColor} border text-[12px] font-bold`}>
                        {shop.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[15px] font-medium text-[#282727]">
                      <div className="flex space-x-2">
                        <ActionButton variant="outline">
                          <Eye className="w-3 h-3 mr-1 inline" />
                          View
                        </ActionButton>
                        <ActionButton variant="outline">
                          <Edit className="w-3 h-3 mr-1 inline" />
                          Edit
                        </ActionButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t bg-gray-50 flex justify-between items-center">
            <div className="flex items-center justify-between">
              <p className="text-[17px] text-[#282727B2] mt-2">
                Showing 4 of 245 shops
              </p>
              <div className="flex items-center space-x-2 ml-170">
                  <button className="p-1 rounded hover:bg-gray-200 active:bg-blue-600">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {[1, 2, 3, "...", 24].map((num, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-sm rounded cursor-pointer hover:bg-gray-200 ${
                        num === 1 ? "bg-blue-600 text-white" : "text-gray-700" 
                      }`}
                    >
                      {num}
                    </span>
                  ))}
                  <button className="p-1 rounded hover:bg-gray-200">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ShopManagement;

