// import React, { useState } from 'react';
// import { ChevronDown, Filter, Download, MoreHorizontal, ChevronLeft, ChevronRight, Search } from 'lucide-react';

// export default function PromotionMarketingDashboard() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedStatus, setSelectedStatus] = useState('All Status');
//   const [selectedType, setSelectedType] = useState('All Types');
//   const [activeTab, setActiveTab] = useState('Discounts & Coupons');

//   const coupons = [
//     {
//       code: 'SUMMER20',
//       description: 'Summer Sale Discount',
//       type: 'Percentage',
//       value: '20%',
//       usage: '45/100',
//       date: '1 Jun - Jun 30',
//       status: 'Active'
//     },
//     {
//       code: 'FREESHIP',
//       description: 'Free Shipping Offer',
//       type: 'Free Shipping',
//       value: 'Rs. 0',
//       usage: '18',
//       date: '15 Jun - Jun 30',
//       status: 'New'
//     },
//     {
//       code: 'WELCOME10',
//       description: 'New Customer',
//       type: 'Fixed Amount',
//       value: 'Rs. 1000',
//       usage: '82/200',
//       date: '1 May - July 30',
//       status: 'Active'
//     },
//     {
//       code: 'WELCOME11',
//       description: 'New Customer',
//       type: 'Fixed Amount',
//       value: 'Rs. 500',
//       usage: '85/1000',
//       date: '1 May - July 30',
//       status: 'Inactive'
//     }
//   ];

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'Active':
//         return 'text-green-600 bg-green-50';
//       case 'New':
//         return 'text-yellow-600 bg-yellow-50';
//       case 'Inactive':
//         return 'text-orange-600 bg-orange-50';
//       default:
//         return 'text-gray-600 bg-gray-50';
//     }
//   };

//   const tabs = ['Discounts & Coupons', 'Flash Sales', 'Upsell/Cross-sell'];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//           <h1 className="text-2xl font-semibold text-gray-900">Promotion & Marketing Dashboard</h1>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
//             <span className="text-lg">+</span>
//             Create Campaign
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-lg shadow-sm border mb-6">
//           <div className="flex border-b">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
//                   activeTab === tab
//                     ? 'border-blue-600 text-blue-600 bg-blue-50'
//                     : 'border-transparent text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Stats Cards */}
//           <div className="p-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//               <div className="bg-white p-4 rounded-lg border">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-gray-600 text-sm">Active Coupons</span>
//                   <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <div className="w-4 h-4 bg-blue-500 rounded"></div>
//                   </div>
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
//                 <div className="text-green-600 text-sm">↗ 2 New This Week</div>
//               </div>

//               <div className="bg-white p-4 rounded-lg border">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-gray-600 text-sm">Coup. Redeemed</span>
//                   <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
//                     <div className="w-4 h-4 bg-green-500 rounded"></div>
//                   </div>
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900 mb-1">142</div>
//                 <div className="text-green-600 text-sm">↗ 13% From This Week</div>
//               </div>

//               <div className="bg-white p-4 rounded-lg border">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-gray-600 text-sm">Discount Revenue</span>
//                   <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
//                     <div className="w-4 h-4 bg-yellow-500 rounded"></div>
//                   </div>
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900 mb-1">₹ 24,000</div>
//                 <div className="text-green-600 text-sm">↗ 6% From Last Week</div>
//               </div>

//               <div className="bg-white p-4 rounded-lg border">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-gray-600 text-sm">Avg. Discount</span>
//                   <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
//                     <div className="w-4 h-4 bg-pink-500 rounded"></div>
//                   </div>
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900 mb-1">15 %</div>
//                 <div className="text-green-600 text-sm">↗ 5% From last Quarter</div>
//               </div>
//             </div>

//             {/* Filters */}
//             <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center mb-6">
//               {/* Search */}
//               <div className="relative flex-1 lg:max-w-xs">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   placeholder="Search Discounts..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Dropdowns */}
//               <div className="flex flex-wrap gap-3">
//                 <div className="relative">
//                   <select 
//                     value={selectedStatus}
//                     onChange={(e) => setSelectedStatus(e.target.value)}
//                     className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option>All Status</option>
//                     <option>Active</option>
//                     <option>New</option>
//                     <option>Inactive</option>
//                   </select>
//                   <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
//                 </div>

//                 <div className="relative">
//                   <select 
//                     value={selectedType}
//                     onChange={(e) => setSelectedType(e.target.value)}
//                     className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option>All Types</option>
//                     <option>Percentage</option>
//                     <option>Fixed Amount</option>
//                     <option>Free Shipping</option>
//                   </select>
//                   <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
//                 </div>

//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
//                   <Filter className="w-4 h-4" />
//                   Filter
//                 </button>

//                 <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
//                   <span className="text-sm">Bulk Generate</span>
//                 </button>

//                 <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
//                   <Download className="w-4 h-4" />
//                   Export
//                 </button>
//               </div>
//             </div>

//             {/* Coupons Table */}
//             <div className="border rounded-lg">
//               {/* Table Header */}
//               <div className="flex items-center justify-between p-4 border-b bg-gray-50">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <div className="w-4 h-4 bg-blue-500 rounded"></div>
//                   </div>
//                   <span className="font-medium text-gray-900">All Coupons</span>
//                 </div>
//                 <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//                   View All
//                 </button>
//               </div>

//               {/* Table */}
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead className="bg-gray-50 border-b">
//                     <tr>
//                       <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Code</th>
//                       <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Description</th>
//                       <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Type</th>
//                       <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Value</th>
//                       <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Usage</th>
//                       <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Date</th>
//                       <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Status</th>
//                       <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {coupons.map((coupon, index) => (
//                       <tr key={index} className="border-b hover:bg-gray-50">
//                         <td className="py-3 px-4 text-sm font-medium text-gray-900">{coupon.code}</td>
//                         <td className="py-3 px-4 text-sm text-gray-600">{coupon.description}</td>
//                         <td className="py-3 px-4 text-sm text-gray-900">{coupon.type}</td>
//                         <td className="py-3 px-4 text-sm text-gray-900">{coupon.value}</td>
//                         <td className="py-3 px-4 text-sm text-gray-900">{coupon.usage}</td>
//                         <td className="py-3 px-4 text-sm text-gray-600">{coupon.date}</td>
//                         <td className="py-3 px-4">
//                           <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(coupon.status)}`}>
//                             {coupon.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-4">
//                           <button className="text-gray-400 hover:text-gray-600">
//                             <MoreHorizontal className="w-4 h-4" />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Pagination */}
//               <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t bg-gray-50">
//                 <div className="text-sm text-gray-600 mb-2 sm:mb-0">
//                   Showing 4 of 20 Coupons
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50">
//                     <ChevronLeft className="w-4 h-4" />
//                   </button>
//                   <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded">1</button>
//                   <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-sm rounded">2</button>
//                   <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-sm rounded">3</button>
//                   <span className="px-2 text-gray-400">...</span>
//                   <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-sm rounded">5</button>
//                   <button className="p-2 text-gray-400 hover:text-gray-600">
//                     <ChevronRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

