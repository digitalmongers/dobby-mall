import React, { useState } from 'react';
import { Download, Wallet, Clock, IndianRupee, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

export default function StudentPayouts() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const paymentHistory = [
    {
      shopName: "Sharma Electronics",
      location: "Delhi, India",
      date: "June-22-2025",
      status: "Completed",
      amount: "₹1000"
    },
    {
      shopName: "Gupta Mobile Store",
      location: "Delhi, India", 
      date: "May-25-2025",
      status: "Completed",
      amount: "₹1000"
    },
    {
      shopName: "Singh Gadgets",
      location: "Mumbai, India",
      date: "May-20-2025", 
      status: "Completed",
      amount: "₹1000"
    },
    {
      shopName: "Singh Gadgets",
      location: "Mumbai, India",
      date: "May-20-2025",
      status: "Completed", 
      amount: "₹1000"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Payouts Details</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Download size={16} />
            Download Statement
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Available Balance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">Available Balance</span>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Wallet size={16} className="text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">₹ 6,000</div>
            <div className="text-sm text-gray-500">Ready for payout</div>
          </div>

          {/* Next Payout Amount */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">Next Payout Amount</span>
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock size={16} className="text-yellow-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">₹ 4,000</div>
            <div className="text-sm text-gray-500">Scheduled for Jun 30</div>
          </div>

          {/* Total Earnings */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm font-medium">Total Earnings</span>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <IndianRupee size={16} className="text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">₹ 14,000</div>
            <div className="text-sm text-gray-500">Expected on 30 June</div>
          </div>
        </div>

        {/* Payment History Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Payment History</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
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
                    Amount
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{payment.shopName}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-gray-600">{payment.location}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-gray-600">{payment.date}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-500">
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{payment.amount}</div>
                    </td>
                    <td className="py-4 px-6">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <FileText size={16} className="text-gray-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing 4 of 24 shops
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