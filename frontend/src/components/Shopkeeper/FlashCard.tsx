import React, { useState } from 'react';
import { ChevronDown, Filter, Plus, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const FlashCard = () => {
  const [activeTab, setActiveTab] = useState('Flash Sales');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = ['Discounts & Coupons', 'Flash Sales', 'Upsell/Cross-sell'];

  const statsCards = [
    {
      title: 'Active Flash Sales',
      value: '8',
      subtitle: '1 New Today',
      icon: '⚡',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Items Sold',
      value: '142',
      subtitle: '+ 43 Today',
      icon: '●',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Rev. Generated',
      value: '₹ 24,000',
      subtitle: '↑ 8% From Last Week',
      icon: '💰',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      title: 'Avg. Discount',
      value: '30 %',
      subtitle: 'No Change',
      icon: '🏷️',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
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
                placeholder="Search Discounts"
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
            New Flash Sale
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="text-center text-gray-500 text-lg">
            Flash sales content would be displayed here
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;