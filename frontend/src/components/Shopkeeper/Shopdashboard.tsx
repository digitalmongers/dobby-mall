'use client'

import { useState } from 'react'
import { 
  Bell, 
  User, 
  Home, 
  Store, 
  Package, 
  ShoppingCart, 
  Users, 
  Megaphone, 
  BarChart3, 
  Settings, 
  Plus, 
  Search, 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  HelpCircle, 
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from 'lucide-react'

const Shopdashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Store, label: 'Shop Management' },
    { icon: Package, label: 'Product Management' },
    { icon: ShoppingCart, label: 'Order Management' },
    { icon: Users, label: 'Customer Management' },
    { icon: Megaphone, label: 'Promotions & Marketing' },
    { icon: BarChart3, label: 'Analytics & Report' },
    { icon: Settings, label: 'Settings' },
    { icon: Plus, label: 'Additional Features' },
    { icon: User, label: 'User Account' },
    { icon: CreditCard, label: 'Abandoned Cart & Recovery' },
    { icon: Search, label: 'Search & Navigation' },
    { icon: CreditCard, label: 'Shipping Cart & Checkout' },
    { icon: TrendingUp, label: 'On-page SEO' },
    { icon: HelpCircle, label: 'Contact Support' },
    { icon: Bell, label: 'Notification' },
    { icon: Search, label: 'Search & Navigation' },
    { icon: Shield, label: 'Trust Builder' },
    { icon: Store, label: 'Marketplace' },
    { icon: Shield, label: 'Technical & Security Essentials' },
    { icon: Package, label: 'Integrations' }
  ]

  const statsCards = [
    {
      title: 'Total Sales',
      value: '₹ 24,000',
      subtitle: '↑ 2% from Last Month',
      icon: '₹',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Active Products',
      value: '198',
      subtitle: '● 10 Low Stock',
      icon: '📦',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Pending Orders',
      value: '32',
      subtitle: '● 0 to ship',
      icon: '📋',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'New Customers',
      value: '15',
      subtitle: '↑ 8% of total shops',
      icon: '👥',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ]

  const actionButtons = [
    { icon: Plus, label: 'Add Product', color: 'bg-blue-600' },
    { icon: Megaphone, label: 'Create Discount', color: 'bg-blue-600' },
    { icon: Package, label: 'Bulk Import', color: 'bg-blue-600' },
    { icon: BarChart3, label: 'View Reports', color: 'bg-blue-600' }
  ]

  const recentOrders = [
    {
      orderId: '#ORD-10025',
      customer: 'Aman Singh',
      date: 'June-22-2025',
      status: 'Completed',
      earnings: '₹ 990',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      orderId: '#ORD-10026',
      customer: 'Deepak Yadav',
      date: 'May-28-2025',
      status: 'Processing',
      earnings: '₹ 1,098',
      statusColor: 'text-blue-600 bg-blue-50'
    },
    {
      orderId: '#ORD-10027',
      customer: 'Sandeep Gautam',
      date: 'May-20-2025',
      status: 'Shipped',
      earnings: '₹ 1,299',
      statusColor: 'text-yellow-600 bg-yellow-50'
    },
    {
      orderId: '#ORD-10028',
      customer: 'Deep Singh',
      date: 'May-20-2025',
      status: 'Cancelled',
      earnings: '₹ 2,098',
      statusColor: 'text-red-600 bg-red-50'
    }
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
        <button onClick={toggleSidebar} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center text-sm font-bold">
            D
          </div>
          <span className="font-bold text-gray-900">DOBBY</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
          <User className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        {/* Sidebar Header */}
        <div className="h-16 bg-white border-b flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center text-sm font-bold">
              D
            </div>
            <span className="font-bold text-gray-900">DOBBY</span>
          </div>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="h-full overflow-y-auto pb-20">
          <nav className="mt-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveMenuItem(item.label)
                    setIsSidebarOpen(false)
                  }}
                  className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                    item.active ? 'bg-blue-50 border-r-2 border-blue-600 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  <span className="text-sm">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleSidebar}></div>
      )}

      {/* Main Content */}
      <div className="lg:ml-64 ">
        {/* Top Header */}
        <div className="hidden lg:flex bg-white shadow-sm border-b px-6 py-4 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center text-sm font-bold">
              D
            </div>
            <span className="font-bold text-gray-900">DOBBY</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-6 h-6 text-gray-600" />
              <span className="text-sm text-gray-700">Shop Owner</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 lg:p-6">
          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopkeeper Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {statsCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 ${card.bgColor} rounded-lg flex items-center justify-center`}>
                    <span className="text-lg">{card.icon}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {actionButtons.map((button, index) => {
              const IconComponent = button.icon
              return (
                <button
                  key={index}
                  className={`${button.color} text-white rounded-lg p-4 hover:opacity-90 transition-opacity`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <IconComponent className="w-6 h-6" />
                    <span className="text-sm font-medium">{button.label}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Recent Orders
                </h2>
                <button className="text-blue-600 text-sm hover:text-blue-700">View All</button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Earnings
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.orderId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.earnings}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-4 border-t bg-gray-50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700">Showing 4 of 245 orders</p>
                <div className="flex items-center space-x-2">
                  <button className="p-1 rounded hover:bg-gray-200">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded">1</span>
                  <span className="px-3 py-1 text-sm text-gray-700">2</span>
                  <span className="px-3 py-1 text-sm text-gray-700">3</span>
                  <span className="px-3 py-1 text-sm text-gray-700">...</span>
                  <span className="px-3 py-1 text-sm text-gray-700">24</span>
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
  )
}

export default Shopdashboard