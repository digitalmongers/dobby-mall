"use client";
import React, { useState } from 'react';
import { Plus, Check, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Studentshop () {
  const [currentPage, setCurrentPage] = useState(1);
  
  const shops = [
    {
      name: "Sharma Electronics",
      location: "Delhi, India",
      date: "June-22-2025",
      status: "Active",
      earnings: "₹1000"
    },
    {
      name: "Gupta Mobile Store",
      location: "Delhi, India", 
      date: "May-25-2025",
      status: "Active",
      earnings: "₹1000"
    },
    {
      name: "Singh Gadgets",
      location: "Mumbai, India",
      date: "May-20-2025", 
      status: "Pending",
      earnings: "₹1000"
    },
    {
      name: "Singh Gadgets",
      location: "Mumbai, India",
      date: "May-20-2025",
      status: "Inactive", 
      earnings: "₹1000"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'text-green-500';
      case 'Pending': return 'text-yellow-500';
      case 'Inactive': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBg = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-50';
      case 'Pending': return 'bg-yellow-50';
      case 'Inactive': return 'bg-red-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Shops Management</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus size={16} />
            Add New Shop
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Shops */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">Total Shops</span>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">245</div>
            <div className="text-sm text-gray-500">From Last Month</div>
          </div>

          {/* Active Shops */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">Active Shops</span>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Check size={16} className="text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">198</div>
            <div className="text-sm text-gray-500">80% of total shops</div>
          </div>

          {/* Pending Shops */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">Pending Shops</span>
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock size={16} className="text-yellow-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">32</div>
            <div className="text-sm text-gray-500">13% of total shops</div>
          </div>

          {/* Inactive Shops */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">Inactive Shops</span>
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <X size={16} className="text-red-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">15</div>
            <div className="text-sm text-gray-500">6% of total shops</div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Shop Management</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    SHOP NAME
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    LOCATION
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    DATE
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    STATUS
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    EARNINGS
                  </th>
                </tr>
              </thead>
              <tbody>
                {shops.map((shop, index) => (
                  <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{shop.name}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-gray-600">{shop.location}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-gray-600">{shop.date}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusBg(shop.status)} ${getStatusColor(shop.status)}`}>
                        {shop.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{shop.earnings}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing 4 of 245 shops
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={16} className="text-gray-600" />
                </button>
                
                <div className="flex space-x-1">
                  {[1, 2, 3, '...', 24].map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === 'number' && setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        page === currentPage 
                          ? 'bg-blue-500 text-white' 
                          : page === '...' 
                            ? 'text-gray-400 cursor-default' 
                            : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      disabled={page === '...'}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={() => setCurrentPage(Math.min(24, currentPage + 1))}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  disabled={currentPage === 24}
                >
                  <ChevronRight size={16} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}