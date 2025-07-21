"use client";
import React, { useState } from 'react';

const AnalyticsReport = () => {
  const [activeTab, setActiveTab] = useState('Sales Reports');
  const [timeFilter, setTimeFilter] = useState('Today');
  const [newFilter, setNewFilter] = useState('New');
  const [dayFilter, setDayFilter] = useState('By Day');

  const salesData = [
    {
      product: 'Wireless Bluetooth Headphones',
      category: 'Electronics',
      unitsSold: 245,
      revenue: 'Rs. 98,000',
      salesPercent: '15%',
      stockLevel: '42 left'
    },
    {
      product: "Men's Casual T-Shirt",
      category: 'Clothing',
      unitsSold: 150,
      revenue: 'Rs. 24,000',
      salesPercent: '8%',
      stockLevel: '8 left'
    },
    {
      product: 'Stainless Steel Water Bottle',
      category: 'Home & Garden',
      unitsSold: 78,
      revenue: 'Rs. 10,500',
      salesPercent: '2%',
      stockLevel: 'Out of stock'
    }
  ];

  const inventoryData = [
    {
      productId: 'PROD-1001',
      product: 'Bluetooth Headphones',
      category: 'Electronics',
      currentStock: 35,
      reorderLevel: 10,
      lastSold: 'Today',
      stockLevel: 'Medium'
    },
    {
      productId: 'PROD-1002',
      product: "Men's Casual T-Shirt",
      category: 'Clothing',
      currentStock: 1,
      reorderLevel: 8,
      lastSold: 'Today',
      stockLevel: 'Low Stock'
    },
    {
      productId: 'PROD-1003',
      product: 'Stainless Steel Water Bottle',
      category: 'Home & Garden',
      currentStock: 0,
      reorderLevel: 5,
      lastSold: '2 Days ago',
      stockLevel: 'Out of stock'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Analytics & Reports Dashboard</h1>
          
          {/* Tabs */}
          <div className="flex space-x-6 mb-6">
            <button 
              className={`pb-2 border-b-2 font-medium ${activeTab === 'Sales Reports' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('Sales Reports')}
            >
              Sales Reports
            </button>
            <button 
              className={`pb-2 border-b-2 font-medium ${activeTab === 'Inventory Reports' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('Inventory Reports')}
            >
              Inventory Reports
            </button>
          </div>

          {/* Filters */}
          <div className="flex space-x-4 mb-6">
            <select 
              value={timeFilter} 
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last Week</option>
              <option>Last Month</option>
            </select>
            <span className="text-gray-500 text-sm flex items-center">to</span>
            <select 
              value={newFilter} 
              onChange={(e) => setNewFilter(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>New</option>
              <option>Old</option>
            </select>
            <button className="px-4 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Apply
            </button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {activeTab === 'Sales Reports' ? (
            <>
              {/* Total Sales */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 text-sm font-medium">Total Sales</h3>
                  <div className="w-3 h-3 bg-purple-200 rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900">₹ 24,5590</p>
                <p className="text-xs text-gray-500 mt-1">+2.1% from Last Month</p>
              </div>

              {/* Orders */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 text-sm font-medium">Orders</h3>
                  <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900">1202</p>
                <p className="text-xs text-gray-500 mt-1">+1.7% from Last Month</p>
              </div>

              {/* Avg. Order Value */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 text-sm font-medium">Avg. Order Value</h3>
                  <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900">₹ 24,000</p>
                <p className="text-xs text-gray-500 mt-1">+1.5% from Last Week</p>
              </div>

              {/* Conversion Rate */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 text-sm font-medium">Conversion Rate</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900">3.5 %</p>
                <p className="text-xs text-gray-500 mt-1">+1.2% from Last Quarter</p>
              </div>
            </>
          ) : (
            <>
              {/* Total Inventory Value */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 text-sm font-medium">Total Inventory Value</h3>
                  <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900">₹ 24,5590</p>
                <p className="text-xs text-gray-500 mt-1">+2.1% from Last Month</p>
              </div>

              {/* Products in Stock */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 text-sm font-medium">Products in Stock</h3>
                  <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900">1202</p>
                <p className="text-xs text-gray-500 mt-1">+1.7% from Last Month</p>
              </div>

              {/* Low Stock Items */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 text-sm font-medium">Low Stock Items</h3>
                  <div className="w-3 h-3 bg-yellow-200 rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900">40</p>
                <p className="text-xs text-gray-500 mt-1">+1.5% from Last Week</p>
              </div>

              {/* Out of Stock */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-gray-600 text-sm font-medium">Out of Stock</h3>
                  <div className="w-3 h-3 bg-red-200 rounded-full"></div>
                </div>
                <p className="text-2xl font-bold text-gray-900">18</p>
                <p className="text-xs text-gray-500 mt-1">+2.5% from Last Week</p>
              </div>
            </>
          )}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {activeTab === 'Sales Reports' ? (
            <>
              {/* Sales Over Time */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Sales Over Time</h3>
                  <div className="flex items-center space-x-2">
                    <select 
                      value={dayFilter} 
                      onChange={(e) => setDayFilter(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>By Day</option>
                      <option>By Week</option>
                      <option>By Month</option>
                    </select>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                      + New Rule
                    </button>
                  </div>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <p className="text-gray-400 text-sm">[Sales Trend Chart Would Appear Here]</p>
                </div>
              </div>

              {/* Sales by Category */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Sales by Category</h3>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                    + New Rule
                  </button>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <p className="text-gray-400 text-sm">[Category Sales Breakdown Chart Would Appear Here]</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Inventory Turnover */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Inventory Turnover</h3>
                  <div className="flex items-center space-x-2">
                    <select 
                      className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>By Category</option>
                      <option>By Product</option>
                      <option>By Brand</option>
                    </select>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                      Export
                    </button>
                  </div>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <p className="text-gray-400 text-sm">[Inventory Turnover Chart Would Appear Here]</p>
                </div>
              </div>

              {/* Stock Movement Report */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Stock Movement Report</h3>
                  <div className="flex items-center space-x-2">
                    <select className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Last 7 Day</option>
                      <option>Last 30 Days</option>
                      <option>Last 90 Days</option>
                    </select>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
                      Export
                    </button>
                  </div>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <p className="text-gray-400 text-sm">[Stock Movement Chart Would Appear Here]</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Top Selling Products Table */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Top Selling Products</h3>
              <button className="text-blue-600 text-sm hover:text-blue-800">View All</button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units Sold</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% of Sales</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Level</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {salesData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.unitsSold}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.revenue}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.salesPercent}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.stockLevel === 'Out of stock' 
                          ? 'bg-red-100 text-red-800' 
                          : item.stockLevel === '8 left'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.stockLevel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="px-6 py-3 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Showing 1 of 20 Coupons</p>
              <div className="flex items-center space-x-1">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 text-gray-500 hover:text-gray-700 text-sm">2</button>
                <button className="px-3 py-1 text-gray-500 hover:text-gray-700 text-sm">3</button>
                <span className="text-gray-500 text-sm">...</span>
                <button className="px-3 py-1 text-gray-500 hover:text-gray-700 text-sm">7</button>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReport;