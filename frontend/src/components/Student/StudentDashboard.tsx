"use client";
import React, { useState } from 'react';
import { 
  Bell, 
  User, 
  TrendingUp, 
  IndianRupee, 
  Clock, 
  Download, 
  Share2, 
  Copy, 
  Play,
  Eye,
  MoreHorizontal
} from 'lucide-react';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('Introduction to the program');

  const shopData = [
    {
      name: 'Sharma Electronics',
      location: 'Delhi, India',
      date: 'June, 22 2025',
      status: 'Active',
      earnings: '₹ 1,000'
    },
    {
      name: 'Gupta Mobile Store',
      location: 'Delhi, India',
      date: 'May, 25 2025',
      status: 'Active',
      earnings: '₹ 1,000'
    },
    {
      name: 'Singh Gadgets',
      location: 'Mumbai, India',
      date: 'May, 20 2025',
      status: 'Pending',
      earnings: '₹ 1,000'
    }
  ];

  const recentEarnings = [
    {
      name: 'Sharma Electronics',
      amount: '₹1,000',
      date: 'Shop activated on June 22, 2025',
      status: 'Completed'
    },
    {
      name: 'Gupta Mobile Store',
      amount: '₹1,000',
      date: 'Shop activated on May 25, 2025',
      status: 'Completed'
    },
    {
      name: 'Singh Gadgets',
      amount: '₹1,000',
      date: 'Shop activated on May 20, 2025',
      status: 'Pending'
    }
  ];

  const onboardingSteps = [
    { name: 'Introduction to the program', completed: true },
    { name: 'How to approach shop owners', completed: true },
    { name: 'Benefits of the platform', completed: true },
    { name: 'Advanced strategies for success', completed: false }
  ];

  return (
    <div className="min-h-screen bg-[#F3F0F0]">
      {/* Header */}
    

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Student Earnings Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Shops Activated */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Shops Activated</h3>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gray-900">24</span>
              <span className="text-sm text-green-600 font-medium">+12 %</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">From Last Month</p>
          </div>

          {/* Total Earnings */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Earnings</h3>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <IndianRupee className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gray-900">₹ 24,000</span>
              <span className="text-sm text-green-600 font-medium">+18 %</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">From Last Month</p>
          </div>

          {/* Pending Payouts */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Pending Payouts</h3>
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gray-900">₹ 7,000</span>
              <span className="text-sm text-gray-500">● 7 Shops</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Expected on 30 June</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Affiliate Link Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Your Affiliate Link</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                ⚡ Generate New Link
              </button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 font-mono">
                  https://shopactivate.in/ref/rahul-kumar-23
                </span>
                <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">QR Code</p>
                  <p className="text-xs text-gray-500">Scan to share your link</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Link Performance</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Click</p>
                  <p className="text-xl font-bold text-gray-900">456</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Registrations</p>
                  <p className="text-xl font-bold text-gray-900">23</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Conversion</p>
                  <p className="text-xl font-bold text-gray-900">20.6%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Training Resources */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Resources</h3>
            
            <div className="bg-gray-100 rounded-lg p-8 mb-6 flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-900">Onboarding Guide</h4>
                <span className="text-sm text-gray-500">75%</span>
              </div>
              
              <div className="space-y-3 mb-4">
                {onboardingSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${step.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                      {step.completed && <div className="w-2 h-2 bg-white rounded-full m-1"></div>}
                    </div>
                    <span className={`text-sm ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.name}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200">
                → Continue Training
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Shop Management */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Shop Management</h3>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="text-left py-3 font-medium">SHOP NAME</th>
                    <th className="text-left py-3 font-medium">LOCATION</th>
                    <th className="text-left py-3 font-medium">DATE</th>
                    <th className="text-left py-3 font-medium">STATUS</th>
                    <th className="text-left py-3 font-medium">EARNINGS</th>
                  </tr>
                </thead>
                <tbody>
                  {shopData.map((shop, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-4 font-medium text-gray-900">{shop.name}</td>
                      <td className="py-4 text-gray-600">{shop.location}</td>
                      <td className="py-4 text-gray-600">{shop.date}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          shop.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {shop.status}
                        </span>
                      </td>
                      <td className="py-4 font-medium text-gray-900">{shop.earnings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Earnings */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Earnings</h3>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
            </div>

            <div className="space-y-4">
              {recentEarnings.map((earning, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      earning.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{earning.name}</p>
                      <p className="text-sm text-gray-500">{earning.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{earning.amount}</p>
                    <p className={`text-xs ${
                      earning.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {earning.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;