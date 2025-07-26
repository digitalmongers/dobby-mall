'use client'
import React, { useState } from 'react'
import {
  Plus,
  Search, Filter, Upload, RefreshCw, MoreHorizontal
} from 'lucide-react'
import {ChevronLeft, ChevronRight } from "lucide-react"
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Marketing = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Product Management")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const [activeTab, setActiveTab] = useState<string>('All Products');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedStatus, setSelectedStatus] = useState<string>('All Status');
  
  const stats = [
    {
      title: 'Active Coupons',
      value: '8',
      subtitle: '2% New This Week',
      icon: <img src="/images/Gift.png" className="h-5 w-5"/>,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
    {
      title: 'Coupon Redeemed',
      value: '₹ 4,892,450',
      subtitle: '3% New This Month',
      icon: <img src="/images/Two Tickets.png" className="h-6 w-6"/>,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
    {
      title: 'Discount Revenue',
      value: '₹ 24,000',
      subtitle: '8% From Last Week',
      icon: <img src="/images/Get Revenue.png" className="h-6 w-6"/>,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
    {
      title: 'Avg. Discount',
      value: '15%',
      subtitle: '6% From last Quarter',
      icon: <img src="/images/Bonds.png" className="h-6 w-6"/>,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    }
  ];

  const products = [
    {
      id: 'SUMMER20',
      desc: 'Summer Sale Discount',
      type: 'Pecentage',
      value: '20%',
      Usage: "45/100",
      date: "1 Jun - Jun 30",
      status: 'Active',
      statusColor: 'text-[#0FBE06] bg-[#EFFFF9]'
    },
    {
      id: 'FREESHIP',
      desc: 'Free Shipping Offer',
      type: 'Free Shipping',
      value: 'RS.0',
      Usage: 18,
      date: "15 Jun - Jun 30",
      status: 'New',
      statusColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'WELCOME10',
      desc: 'New Customer',
      type: 'Fixed Amount',
      value: 'RS.1,000',
      Usage: "82/200",
      date: "1 May - July 30",
      status: 'Active',
      statusColor: 'text-[#0FBE06] bg-[#EFFFF9]'
    },
    {
      id: 'WELCOME11',
      desc: 'New Customer',
      type: 'Fixed Amount',
      value: 'RS.500',
      Usage: "85/1000",
      date: "1 May - July 30",
      status: 'Inactive',
      statusColor: 'text-[#FF0000] bg-[#FFF2F2]'
    }
  ];

  const tabs = ['Discounts & Coupons', 'Flash Sales', 'Upsell/Cross-sell '];


  const Select = ({ value, onChange, options }: any) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((option: string) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 border rounded-top">
      {/* Sidebar */}
      <Sidebar
        activeItem={activeMenuItem}
        setActiveItem={setActiveMenuItem}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Page content */}
        <main className="p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold text-gray-900">Promotions & Marketing Dashboard</h1>
            <button className="inline-flex items-center px-4 py-2 bg-[#3801FF33] text-[#0000FF] text-xs font-medium rounded-sm hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4 mr-2" />
                Create Campaign
            </button>
          </div>

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
         
          {/*Stats Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {stats.map((stats, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border pt-3 pb-3 pr-5 pl-5">
            {/* Title and Icon on opposite sides */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-[17px] font-medium text-[#262525]">{stats.title}</p>
              <div className={`w-10 h-10 ${stats.bgColor} rounded-lg flex items-center justify-center`}>
                <span className="text-lg">{stats.icon}</span>
              </div>
            </div>

            {/* Value and Subtitle with Image */}
            <div className="space-y-2">
              <p className="text-[28px] font-bold text-gray-900">{stats.value}</p>
              <div className="flex items-center space-x-2">
                {stats.subtitleImg }
                <p className="text-[13px] text-[#505050]">{stats.subtitle}</p>
              </div>
              </div>
            </div>
            ))}
          </div>


          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search Discounts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <Select
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={['All Status', 'Active', 'Scheduled', 'Expired']}
              />
              <Select
                value={selectedStatus}
                onChange={setSelectedStatus}
                options={['All Types', 'Percentage', 'Fixed Amount', 'Free Shipping']}
              />
              <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50 flex items-center">
                <Filter className="w-4 h-4 mr-2" /> Filter
              </button>
              <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
                <Upload className="w-4 h-4 mr-2" /> Bulk Import
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <RefreshCw className="h-4 w-4" />
                Refresh
               </button>
            </div>
          </div>

          {/* Products Table */}
          <div className="rounded-lg shadow-lg border">
            <div className="p-6  flex items-center justify-between bg-gray-300 border rounded-t-lg">
              <div className="flex items-center ">
                <img src="/images/Gift.png" className='mr-1 w-5 h-5'/>
                <h2 className="font-medium text-[#000000] flex items-center text-[22px]">All Coupons</h2>
              </div>
              <button className="text-[#2F1DF7] text-[18px] hover:text-blue-700">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border">
                  <tr>
                    {['Code', 'Description', 'Type', 'Value','Usage', 'Date', 'Satus', 'Actions'].map((header) => (
                      <th key={header} className="px-6 py-3 text-left text-[15px] font-medium text-[#282727] uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white ">
                  {products.map((product, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-[14px] font-medium text-[#282727]">{product.id}</td>
                      <td className="px-6 py-4 text-[15px] text-[#282727]">{product.desc}</td>
                      <td className="px-6 py-4 text-[15px] text-[#282727]">{product.type}</td>
                      <td className="px-6 py-4 text-[15px] text-[#282727]">{product.value}</td>
                      <td className="px-6 py-4 text-[15px] text-[#282727]">{product.Usage}</td>
                      <td className="px-6 py-4 text-[15px] text-[#282727]">{product.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 font-small rounded-sm ${product.statusColor}border-1 text-[12px] font-bold`}>{product.status}</span>
                      </td>
                      <td className="px-6 py-4 text-[15px] font-medium text-[#282727]">
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
                <p className="text-sm text-gray-700">Showing 4 of 198 shops</p>
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
        </main>
      </div>
    </div>
  )
}

export default Marketing
