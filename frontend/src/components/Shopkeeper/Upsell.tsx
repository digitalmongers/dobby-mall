import React, { useState } from 'react';
import { ChevronDown, Filter, Plus, Edit, BarChart3 } from 'lucide-react';

const Upsell = () => {
  const [activeTab, setActiveTab] = useState('Upsell/Cross-sell');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = ['Discounts & Coupons', 'Flash Sale', 'Upsell/Cross-sell'];

  const statsCards = [
    {
      title: 'Active Rule',
      value: '8',
      subtitle: '↗ 4 New This Month',
      icon: '📋',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Conversion Rate',
      value: '18%',
      subtitle: '↗ 2 % From Last Month',
      icon: '📊',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Rev. Generated',
      value: '₹ 24,000',
      subtitle: '↗ 22% From Last Month',
      icon: '💰',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      title: 'Avg. Order Value',
      value: '₹ 3,930',
      subtitle: '↗ 18 % From Last Month',
      icon: '🛒',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  const rules = [
    {
      title: 'Frequently Bought Together',
      description: 'Shows complementary products on product pages',
      products: 'Products: 12 combinations',
      status: 'Active'
    },
    {
      title: 'Cart Threshold Offer',
      description: 'Offers special product when cart reaches Rs. 10,000',
      products: 'Target Product: Premium Headphones',
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Promotion & Marketing Dashboard
          </h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            Create Campaign
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-8 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 relative font-medium transition-colors ${
                activeTab === tab
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <div key={index} className={`${card.bgColor} p-6 rounded-xl border border-gray-200`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{card.icon}</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{card.value}</div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">{card.title}</div>
              <div className={`text-xs ${card.textColor} font-medium`}>{card.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Search and Filter Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Rules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                All Status
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            New Rule
          </button>
        </div>

        {/* Rules Content */}
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{rule.title}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {rule.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{rule.description}</p>
                  <p className="text-sm text-gray-500">{rule.products}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-1">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    View Stats
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upsell;