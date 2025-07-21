import React from 'react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

export default function PromoBanner() {
  return (
    <div className="w-50px h-[50px] bg-[#302E2EDB] relative flex items-center justify-between px-6">
      {/* Left side - Free Shipping */}
      <div className="flex items-center">
        <div className="bg-[#2867D9] rounded-[4px] text-white text-[12px] px-3 py-1 font-medium">
          FREE SHIPPING
        </div>
        <span className="text-white text-[12px] ml-2">on all orders over $99.00</span>
      </div>

      {/* Center - Promotional offer with navigation */}
      <div className="flex items-center space-x-4">
        <button className="text-white/70 hover:text-white">
          <ChevronLeft size={16} />
        </button>
        
        <div className="text-white text-[12px] font-medium">
          22% Off + Free Gift. Use Code: HALLOWEEN
        </div>
        
        <button className="text-white/70 hover:text-white">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Right side - Contact and Settings */}
      <div className="flex items-center space-x-6">
        {/* Phone */}
        <div className="flex items-center space-x-1 text-white text-[12px]">
          <Phone size={14} />
          <span>9999999999</span>
        </div>

        {/* Currency Selector */}
        <div className="flex items-center space-x-1 text-white text-[12px]">
          <span>Austria-EUR</span>
          <ChevronRight size={12} className="rotate-90" />
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-1 text-white text-[12px]">
          <span>Select Language</span>
          <ChevronRight size={12} className="rotate-90" />
        </div>

        {/* Shopping Cart Icon */}
        <div className="flex items-center space-x-1 text-white text-[12px]">
          <div className="w-4 h-4 border border-white rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <ChevronRight size={12} className="rotate-90" />
        </div>
      </div>
    </div>
  );
}