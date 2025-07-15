import React, { useState } from 'react';
import { ShoppingCart, DollarSign, Clock, TrendingUp, Search, Filter, Download, RefreshCw, Eye, MoreHorizontal } from 'lucide-react';

export default function OrderManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('Last 30 Days');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [channelFilter, setChannelFilter] = useState('All Channels');
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      id: '#ORD-1001',
      customer: 'Yamada Taro',
      date: '20-06-2025',
      total: 'RS. 1,990',
      items: 1,
      status: 'Processing',
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: '#ORD-1002',
      customer: 'Sato Hanako',
      date: '19-06-2025',
      total: 'RS. 1,390',
      items: 2,
      status: 'Shipped',
      statusColor: 'bg-purple-100 text-purple-800'
    },
    {
      id: '#ORD-1003',
      customer: 'Tanaka Ryota',
      date: '18-06-2025',
      total: 'RS. 4,990',
      items: 3,
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '#ORD-1004',
      customer: 'Watanabe Aiko',
      date: '17-06-2025',
      total: 'RS. 990',
      items: 1,
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-800'
    }
  ];

  const stats = [
    {
      title: 'Total Orders',
      value: '1,248',
      change: '12% From Last Month',
      icon: ShoppingCart,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Revenue',
      value: '₹ 4,892,450',
      change: '3% New This Month',
      icon: DollarSign,
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Pending Orders',
      value: '48',
      change: '2% Completed',
      icon: Clock,
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Order Management Dashboard
          </h1>
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
                  placeholder="Search Orders..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
              >
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Last 3 Months</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Status</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Completed</option>
                <option>Pending</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={channelFilter}
                onChange={(e) => setChannelFilter(e.target.value)}
              >
                <option>All Channels</option>
                <option>Online</option>
                <option>In-Store</option>
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

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-blue-500" />
                <h2 className="text-lg font-semibold text-gray-900">All Orders</h2>
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
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Items
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
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.items}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${order.statusColor}`}>
                        {order.status}
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
            {orders.map((order, index) => (
              <div key={index} className="p-4 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{order.date}</span>
                  <span className="font-medium text-gray-900">{order.total}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">{order.items} items</span>
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
                Showing <span className="font-medium">4</span> of <span className="font-medium">198</span> Orders
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