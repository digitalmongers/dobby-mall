import React, { useState } from 'react';
import { Plus, Package, Activity, AlertTriangle, XCircle, Search, Filter, Upload, RefreshCw, MoreHorizontal } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'Active' | 'Low Stock' | 'Out of Stock' | 'Draft';
  statusColor: string;
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeText: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
}

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState<string>('All Products');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedStatus, setSelectedStatus] = useState<string>('All Status');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 50;

  const products: Product[] = [
    {
      id: '#PROD-1001',
      name: 'Wireless Bluetooth Headphones',
      category: 'Electronics',
      price: 'Rs. 1,990',
      stock: 48,
      status: 'Active',
      statusColor: 'text-green-500'
    },
    {
      id: '#PROD-1002',
      name: "Men's Casual T-Shirts",
      category: 'Clothing',
      price: 'Rs. 1,390',
      stock: 8,
      status: 'Low Stock',
      statusColor: 'text-yellow-500'
    },
    {
      id: '#PROD-1003',
      name: 'Stainless Steel Water Bottle',
      category: 'Home & Garden',
      price: 'Rs. 4,990',
      stock: 0,
      status: 'Out of Stock',
      statusColor: 'text-red-500'
    },
    {
      id: '#PROD-1004',
      name: 'Organic Cotton Bed Sheets',
      category: 'Home & Garden',
      price: 'Rs. 990',
      stock: 22,
      status: 'Draft',
      statusColor: 'text-gray-500'
    }
  ];

  const tabs = ['All Products', 'Categories', 'Inventory', 'Pricing Rules'];

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

  const ActionButton: React.FC<ActionButtonProps> = ({ children, variant = 'outline', onClick, className = '' }) => {
    const baseClasses = 'px-4 py-2 text-sm font-medium rounded-md transition-colors';
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-green-600 text-white hover:bg-green-700',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    };

    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  const Select: React.FC<{ value: string; onChange: (value: string) => void; options: string[] }> = ({ value, onChange, options }) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const Pagination = () => (
    <div className="flex items-center justify-center space-x-2 mt-6">
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        className="p-2 text-gray-400 hover:text-gray-600"
        disabled={currentPage === 1}
      >
        ‹
      </button>
      {[1, 2, 3, '...', 50].map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && setCurrentPage(page)}
          className={`px-3 py-1 rounded-md text-sm ${
            page === currentPage
              ? 'bg-blue-600 text-white'
              : page === '...'
              ? 'text-gray-400 cursor-default'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        className="p-2 text-gray-400 hover:text-gray-600"
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold text-gray-900">Product Management Dashboard</h1>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Add New Product
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Products"
            value="24"
            change="+12%"
            changeText="From Last Month"
            icon={Package}
            bgColor="bg-blue-500"
          />
          <StatCard
            title="Active Products"
            value="18"
            change="+3%"
            changeText="New This Month"
            icon={Activity}
            bgColor="bg-green-500"
          />
          <StatCard
            title="Low Stock"
            value="4"
            change="+2%"
            changeText="Completed"
            icon={AlertTriangle}
            bgColor="bg-yellow-500"
          />
          <StatCard
            title="Out of Stock"
            value="15"
            change="+6%"
            changeText="From last Quarter"
            icon={XCircle}
            bgColor="bg-red-500"
          />
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search Products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <Select
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={['All Categories', 'Electronics', 'Clothing', 'Home & Garden']}
            />
            <Select
              value={selectedStatus}
              onChange={setSelectedStatus}
              options={['All Status', 'Active', 'Low Stock', 'Out of Stock', 'Draft']}
            />
            <ActionButton variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </ActionButton>
            <ActionButton variant="secondary">
              <Upload className="w-4 h-4 mr-2" />
              Bulk Import
            </ActionButton>
            <ActionButton variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </ActionButton>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <Package className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">All Products</h2>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
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
                {products.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.stock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${product.statusColor}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">
                Showing 4 of 198 shops
              </p>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;