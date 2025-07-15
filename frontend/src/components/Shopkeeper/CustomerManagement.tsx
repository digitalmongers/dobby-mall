import React, { useState } from 'react';
import { Users, UserPlus, UserCheck, TrendingUp, Search, Filter, Download, RefreshCw, Eye, MoreHorizontal, Plus } from 'lucide-react';

export default function CustomerManagement() {
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
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '#CUST-1002',
      name: 'Sato Hanako',
      email: 'sato@gmail.com',
      totalSpent: 'RS. 1,390',
      orders: 2,
      status: 'New',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: '#CUST-1003',
      name: 'Tanaka Ryota',
      email: 'tanaka@gmail.com',
      totalSpent: 'RS. 4,990',
      orders: 3,
      status: 'Active',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '#CUST-1004',
      name: 'Watanabe Aiko',
      email: 'aiko@gmail.com',
      totalSpent: 'RS. 990',
      orders: 1,
      status: 'Inactive',
      statusColor: 'bg-red-100 text-red-800'
    }
  ];

  const stats = [
    {
      title: 'Total Customers',
      value: '2,248',
      change: '12% From Last Month',
      icon: Users,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'New Customers',
      value: '250',
      change: '3% New This Month',
      icon: UserPlus,
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Customers',
      value: '1,895',
      change: '2% Completed',
      icon: UserCheck,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Avg. Order Value',
      value: '₹ 4,890',
      change: '6% From last Quarter',
      icon: TrendingUp,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Customer Management Dashboard
            </h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Plus className="h-4 w-4" />
              Add Customer
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-lg p-6 border border-gray-200`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-2 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
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
              <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <h2 className="text-lg font-semibold text-gray-900">All Customers</h2>
              </div>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                <Eye className="h-4 w-4" />
                View All
              </button>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Spent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((customer, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {customer.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {customer.totalSpent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {customer.orders}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${customer.statusColor}`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="h-5 w-5" />
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
          <div className="px-4 sm:px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">4</span> of <span className="font-medium">198</span> Customers
              </p>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
                  disabled={currentPage === 1}
                >
                  ‹
                </button>
                <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">1</button>
                <button 
                  onClick={() => setCurrentPage(2)}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
                >
                  2
                </button>
                <button 
                  onClick={() => setCurrentPage(3)}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
                >
                  3
                </button>
                <span className="px-2 text-sm text-gray-500">...</span>
                <button 
                  onClick={() => setCurrentPage(50)}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
                >
                  50
                </button>
                <button 
                  onClick={() => setCurrentPage(Math.min(50, currentPage + 1))}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
                  disabled={currentPage === 50}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}