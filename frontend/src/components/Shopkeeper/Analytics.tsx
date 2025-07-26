'use client'
import React, { useState } from 'react'
import {
  Plus, ChevronLeft, ChevronRight
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Analytics = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Product Management")
   const router = useRouter()
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const [activeTab, setActiveTab] = useState<string>('All Products');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedStatus, setSelectedStatus] = useState<string>('All Status');
  
  const stats = [
    {
      title: 'Total Sales',
      value: '₹ 24,5590',
      subtitle: '22% From Last Month',
      icon: <img src="/images/Total Sales.png" className="h-6 w-6"/>,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
    {
      title: 'Orders',
      value: '1202',
      subtitle: '13% From Last Month',
      icon: <img src="/images/Order Completed.png" className="h-6 w-6"/>,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
    {
      title: 'Avg. Order Value',
      value: '₹ 24,000',
      subtitle: '8% From Last Week',
      icon: <img src="/images/Get Revenue.png" className="h-6 w-6"/>,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
    {
      title: 'Conversion Rate',
      value: '3.5%',
      subtitle: '6% From last Quarter',
      icon: <img src="/images/Sample Rate.png" className="h-7 w-7"/>,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      subtitleImg: <img src="/images/Arrow 3.png"/>
    }
  ];

  const products = [
    {
      desc: 'Wireless Bluetooth Headphones',
      type: 'Electronics',
      value: '98',
      revenue: "RS.1,14,000",
      sales: "29%",
      status: '45 Left',
      statusColor: 'text-[#0FBE06] bg-[#EFFFF9]'
    },
    {
      desc: "Men's Casual T-Shirt",
      type: 'Clothing',
      value: '100',
      revenue: "RS.24,000",
      sales: "5%",
      status: '8 Left',
      statusColor: 'text-[#DEA802] bg-[#FFF9DE]'
    },
    {
      desc: 'Stainless Steel Water Bottle',
      type: 'Home & Garden',
      value: '76',
      revenue: "RS.90,500",
      sales: "2%",
      status: 'Out Of Stock',
      statusColor: 'text-[#FF0000] bg-[#FFF2F2]'
    }
  ];

  const tabs =[    
    { label: 'Sales Reports', href: '/shopkeeper/Analytics' },
    { label: 'Inventory Reports', href: '/shopkeeper/Analytics/Inventory' }
  ];


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
            <h1 className="text-xl font-semibold text-gray-900">Analytics & Reports Dashboard</h1>
            
          </div>

          {/* Tabs */}
           <div className="border-b border-gray-200 mb-8">
           <nav className="-mb-px flex space-x-8">
           {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <button
              key={tab.label}
              onClick={() => router.push(tab.href)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                isActive
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
          <div className="flex items-center space-x-4 mb-6 flex-wrap">
            <Select
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days','This Month','Last Month','Custom Range']}
            />
            <p >to</p>
            <Select
                value={selectedStatus}
                onChange={setSelectedStatus}
                options={['Now','Specific Date']}
            />
            <button className="inline-flex items-center px-4 py-2 bg-[#3801FF33] text-[#0000FF] text-xs font-medium rounded-lg hover:bg-blue-200 transition-colors">
              Apply
            </button>
            </div>
          {/*Stats Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 mt-5">
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

         {/* Sales Over Time */}
        <div className="bg-white rounded p-4 mb-6 shadow">
            <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Sales Over Time</h3>
            <div className="flex items-center space-x-2">
                <Select
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                        options={['By Day','By Week','By Month']}
                    />
                <button className="inline-flex items-center px-4 py-2 bg-[#3801FF33] text-[#0000FF] text-xs font-medium rounded-sm hover:bg-blue-200 transition-colors">
                <Plus className="w-4 h-4 mr-2" />
                New Rule
                </button>
            </div>
            </div>
            <div className="h-40 flex items-center justify-center text-sm text-gray-400 border border-dashed rounded bg-[#EFEEEE]">
            [Sales Trend Chart Would Appear Here]
            </div>
        </div>

        {/* Sales by Category */}
        <div className="bg-white rounded p-4 shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Sales by Category</h3>
            <button className="inline-flex items-center px-4 py-2 bg-[#3801FF33] text-[#0000FF] text-xs font-medium rounded-sm hover:bg-blue-200 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Rule
            </button>
          </div>
            <div className="h-40 flex items-center justify-center text-sm text-gray-400 border border-dashed rounded bg-[#EFEEEE]">
            [Category Sales Breakdown Chart Would Appear Here]
            </div>
        </div>
                

          {/* Products Table */}
          <div className="rounded-lg shadow-lg border mt-8">
            <div className="p-6  flex items-center justify-between bg-gray-300 border rounded-t-lg">
              <div className="flex items-center ">
                <h2 className="font-medium text-[#000000] flex items-center text-[22px]">Top Selling Products</h2>
              </div>
              <button className="text-[#2F1DF7] text-[18px] hover:text-blue-700">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border">
                  <tr>
                    {['Product', 'Category', 'Units Sold', 'Revenue','% of Sales', 'Stock Level'].map((header) => (
                      <th key={header} className="px-6 py-3 text-left text-[15px] font-medium text-[#282727] uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white ">
                  {products.map((product, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-[14px] font-medium text-[#282727]">{product.desc}</td>
                      <td className="px-6 py-4 text-[15px] text-[#282727]">{product.type}</td>
                      <td className="px-6 py-4 text-[15px] text-[#282727]">{product.value}</td>
                      <td className="px-6 py-4 text-[15px] text-[#282727]">{product.revenue}</td>
                      <td className="px-6 py-4 text-[15px] text-[#282727]">{product.sales}</td>

                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 font-small rounded-sm ${product.statusColor}border-1 text-[12px] font-bold`}>{product.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-700">Showing 3 of 20 Coupons</p>
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

export default Analytics
