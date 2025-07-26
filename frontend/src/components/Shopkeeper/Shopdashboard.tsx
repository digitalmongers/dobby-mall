"use client"

import { useState } from "react"
import {ChevronLeft, ChevronRight } from "lucide-react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const Shopdashboard = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const statsCards = [
    {
      title: "Total Sales",
      value: "₹ 24,000",
      subtitle: "12% from Last Month",
      icon: <img src="/images/rs-icon.png" className="h-8 w-8"/>,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      subtitleImg: <img src="/images/Arrow 3.png"/>,
    },
    {
      title: "Active Products",
      value: "198",
      subtitle:"10 Low Stock",
      icon: <img src="/images/Open Box.png" className="h-8 w-8"/>,
      color: "text-green-600",
      bgColor: "bg-green-50",
      subtitleImg: <img src="/images/Box Important.png" className="w-4 h-4"/>,
    },
    {
      title: "Pending Orders",
      value: "32",
      subtitle: "5 to ship",
      icon: <img src="/images/Clock -2.png" className="h-8 w-8"/>,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      subtitleImg: <img src="/images/Clock.png" className="w-4 h-4"/>
    },
    {
      title: "New Customers",
      value: "15",
      subtitle: "6% of total shops",
      icon: <img src="/images/Users.png" className="h-8 w-8"/>,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      subtitleImg: <img src="/images/Arrow 3.png"/>
    },
  ]

const actionButtons = [
  {
    icon: () => <img src="/images/Add.png" alt="Add" className="w-10 h-10"/>,
    label: "Add Product",
    color: "bg-white",
  },
  {
    icon: () => <img src="/images/New Ticket.png" alt="Discount" className="w-10 h-10"/>,
    label: "Create Discount",
    color: "bg-white",
  },
  {
    icon: () => <img src="/images/Import.png" alt="Discount" className="w-10 h-10" />,
    label: "Bulk Import",
    color: "bg-white",
  },
  {
    icon: () => <img src="/images/Slice.png" alt="Bulk" className="w-10 h-10"/>,
    label: "View Reports",
    color: "bg-white",
  },
];

  const recentOrders = [
    {
      orderId: "#ORD-10025",
      customer: "Aman Singh",
      date: "June-22-2025",
      status: "Completed",
      earnings: "₹ 990",
      statusColor: "text-[#0FBE06] bg-[#EFFFF9]",
    },
    {
      orderId: "#ORD-10026",
      customer: "Deepak Yadav",
      date: "May-28-2025",
      status: "Processing",
      earnings: "₹ 1,098",
      statusColor: "text-blue-600 bg-[#E9F3FF]",
    },
    {
      orderId: "#ORD-10027",
      customer: "Sandeep Gautam",
      date: "May-20-2025",
      status: "Shipped",
      earnings: "₹ 1,299",
      statusColor: "text-[#DEA802] bg-[#FFF9DE]",
    },
    {
      orderId: "#ORD-10028",
      customer: "Deep Singh",
      date: "May-20-2025",
      status: "Cancelled",
      earnings: "₹ 2,098",
      statusColor: "text-[#FF0000] bg-[#FFF2F2]",
    },
  ]

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

      {/* Main Content  */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar Component */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Dashboard Content - Scrollable */}
        <div className="flex-1 overflow-auto ml-2 mr-2">
          <div className="p-4 lg:p-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-5">Shopkeeper Dashboard</h1>

            {/* Stats Cards */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
           {statsCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg border pt-3 pb-3 pr-5 pl-5">
        
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

           {/* Action Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {actionButtons.map((button, index) => {
                const IconComponent = button.icon
                return (
                  <button
                    key={index}
                    className={`${button.color} text-white rounded-lg p-4 hover:opacity-90 transition-opacity border shadow-lg w-[280px] h-[130px]`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <IconComponent/>
                      <span className="text-[20px] font-medium text-[#505050]">{button.label}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Recent Orders Table */}
            <div className="bg-gray-300 rounded-lg border shadow-lg ">
              <div className="p-6  flex items-center justify-between">
                <h2 className="font-medium text-[#000000] flex items-center text-[22px]">
                  <img src="/images/Rollback.png" className="mr-2"/>
                  Recent Orders
                </h2>
                <button className="text-[#2F1DF7] text-[18px] hover:text-blue-700">View All</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border">
                    <tr>
                      {["Order ID", "Customer", "Date", "Status", "Earnings"].map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-[15px] font-medium text-[#282727] uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white ">
                    {recentOrders.map((order, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-[14px] font-medium text-[#282727]">{order.orderId}</td>
                        <td className="px-6 py-4 text-[15px] text-[#282727]">{order.customer}</td>
                        <td className="px-6 py-4 text-[15px] text-[#282727]">{order.date}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-2 py-1 font-small rounded-sm ${order.statusColor} border text-[12px] font-bold`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[15px] font-medium text-[#282727] ">{order.earnings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t bg-gray-50 flex justify-between items-center">
                <p className="text-[17px] text-[#282727B2] mt-2">Showing 4 of 245 orders</p>
                <div className="flex items-center space-x-2">
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
  )
}

export default Shopdashboard
