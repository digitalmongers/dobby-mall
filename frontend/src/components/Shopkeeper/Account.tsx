'use client'
import React, { useState } from 'react';
import { Users, Search, Filter, Download, RefreshCw, MoreHorizontal, Plus , ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

export default function CustomerManagement() {
  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const [searchTerm, setSearchTerm] = useState('');
  const [groupFilter, setGroupFilter] = useState('All Groups');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [locationFilter, setLocationFilter] = useState('All Location');
  const [currentPage, setCurrentPage] = useState(1);

  const customers = [
    {
      id: '#CUST-1001',
      name: 'Yamada Taro',
      email: 'yamada@gmail.com',
      totalSpent: 'RS. 1,990',
      orders: 1,
      status: 'Active',
      statusColor: 'text-[#0FBE06] bg-[#EFFFF9]'
    },
    {
      id: '#CUST-1002',
      name: 'Sato Hanako',
      email: 'sato@gmail.com',
      totalSpent: 'RS. 1,390',
      orders: 2,
      status: 'New',
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: '#CUST-1003',
      name: 'Tanaka Ryota',
      email: 'tanaka@gmail.com',
      totalSpent: 'RS. 4,990',
      orders: 3,
      status: 'Active',
      statusColor: 'text-[#0FBE06] bg-[#EFFFF9]'
    },
    {
      id: '#CUST-1004',
      name: 'Watanabe Aiko',
      email: 'aiko@gmail.com',
      totalSpent: 'RS. 990',
      orders: 1,
      status: 'Inactive',
      statusColor: 'text-[#FF0000] bg-[#FFF2F2]'
    }
  ];

 const stats = [
    {
      title: 'Total Customers',
      value: '2,248',
      subtitle: '12% From Last Month',
      icon: <img src="/images/Management-2.png" className="h-6 w-6"/>,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
    {
      title: 'New Customers',
      value: '250',
      subtitle: '3% New This Month',
      icon: <img src="/images/User Account.png" className="h-6 w-6"/>,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
    {
      title: 'Active Customers',
      value: '1,895',
      subtitle: '2% Completed',
      icon: <img src="/images/Batch Assign.png" className="h-6 w-6"/>,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
    {
      title: 'Avg. Order Value',
      value: '₹ 4,890',
      subtitle: '6% From last Quarter',
      icon: <img src="/images/Bonds.png" className="h-6 w-6"/>,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex border">
      {/* Sidebar */}
            <Sidebar
              isOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              activeItem={activeMenuItem}
              setActiveItem={setActiveMenuItem}
            />
      
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && <div className="fixed inset-0 bg-opacity-50 z-40 lg:hidden" onClick={toggleSidebar} />}
      
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar Component */}
        <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex items-center justify-between mb-6 mt-6 ml-8 mr-8">
            <h1 className="text-xl font-semibold text-gray-900 mb-3">
              Customer Management Dashboard
            </h1>
            <button className="inline-flex items-center px-4 py-2 bg-[#3801FF33] text-[#0000FF] text-xs font-medium rounded-sm hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Add Customer
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 ml-8 mr-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border pt-3 pb-3 pr-5 pl-5">
              {/* Title and Icon on opposite sides */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-[17px] font-medium text-[#262525]">{stat.title}</p>
                  <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <span className="text-lg">{stat.icon}</span>
                </div>
              </div>
              {/* Value and Subtitle with Image */}
              <div className="space-y-2">
                <p className="text-[28px] font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center space-x-2">
                {stat.subtitleImg }
                <p className="text-[13px] text-[#505050]">{stat.subtitle}</p>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 ml-8 mr-8 p-4">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <div className="relative flex-1 sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Customers..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={groupFilter}
                onChange={(e) => setGroupFilter(e.target.value)}
              >
                <option>All Groups</option>
                <option>VIP</option>
                <option>Regular</option>
                <option>Premium</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Status</option>
                <option>Active</option>
                <option>New</option>
                <option>Inactive</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option>All Location</option>
                <option>Tokyo</option>
                <option>Osaka</option>
                <option>Kyoto</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                <Download className="h-4 w-4" />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Customers Table */}
        <div className="rounded-lg border shadow-lg ml-8 mr-8">
          <div className="p-6  flex items-center justify-between bg-gray-300 border rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <h2 className="font-medium text-[#000000] flex items-center text-[22px]">All Customers</h2>
              </div>
              <button className="flex items-center gap-2 text-[#2F1DF7] hover:text-blue-700 transition-colors text-[18px] ml-220">
                View All
              </button>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border">
                <tr>
                    {['Customer ID', 'Name', 'Email', 'Total Spent', 'Orders', 'Status', 'Actions'].map((header) => (
                      <th key={header} className="px-6 py-3 text-left text-[15px] font-medium text-[#282727] uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
              </thead>
              <tbody className="bg-white">
                {customers.map((customer, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-[14px] font-medium text-[#282727]">
                      {customer.id}
                    </td>
                    <td className="px-6 py-4 text-[14px] font-medium text-[#282727]">
                      {customer.name}
                    </td>
                    <td className="px-6 py-4 text-[14px] font-medium text-[#282727]">
                      {customer.email}
                    </td>
                    <td className="px-6 py-4 text-[14px] font-medium text-[#282727]">
                      {customer.totalSpent}
                    </td>
                    <td className="px-6 py-4 text-[14px] font-medium text-[#282727]">
                      {customer.orders}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 font-small rounded-sm ${customer.statusColor} border-1 text-[12px] font-bold`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[14px] font-medium text-[#282727]">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            {customers.map((customer, index) => (
              <div key={index} className="p-4 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-gray-900">{customer.id}</p>
                    <p className="text-sm text-gray-600">{customer.name}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${customer.statusColor}`}>
                    {customer.status}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>{customer.email}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{customer.totalSpent}</span>
                    <span>{customer.orders} orders</span>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">
                Showing 4 of 198 Customers
              </p>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="p-1 rounded hover:bg-gray-200 active:bg-blue-600"
                  disabled={currentPage === 1}
                >
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
  );
}