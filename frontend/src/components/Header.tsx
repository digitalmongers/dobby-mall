"use client";
import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  MapPin,
  ChevronDown,
  Menu,
  Mic
} from "lucide-react";
import PromoBanner from "./PromoBanner";




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navigationItems = [
    { name: 'Patio Furniture Covers', href: '#' },
    { name: 'Cushion & Pillow covers', href: '#' },
    { name: 'Solar Shades', href: '#' },
    { name: 'Custom Covers', href: '#' },
    { name: 'Tarps & Curtains', href: '#' },
    { name: 'Marine Covers', href: '#' },
    { name: 'Car Covers', href: '#', badge: 'New' }
  ];


  return (
    <header className="w-full">
      {/* Top Banner */}
     

      {/* Promotional Banner */}
      <div className="bg-red-600 text-black text-center py-2 font-asap font-bold text-[14px] leading-[100%] tracking-[0.02em]">
  <div className="flex items-center justify-center">
    <div className="flex items-center space-x-4">
      <span className=" text-white px-2 py-1 rounded text-[14px] font-asap font-bold leading-[100%] tracking-[0.02em]">
        Free Listing for first 100 Shopkeepers
      </span>
    </div>
  </div>
</div>
<div className="w-[1520px] h-[50px] -mt-0.25 bg-[#302E2EDB] relative">
 
    <PromoBanner/>
  
</div>



      {/* Main Header */}
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="bg-gray-700 text-white px-4 py-2 font-bold text-lg tracking-wide">
              DOBBY
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for Chair Cover"
                className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <Mic className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-6">
            {/* Order Tracking */}
            <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
              <div className="w-4 h-4 mr-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">Order Tracking</span>
            </div>

            {/* My Account */}
            <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
              <User className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">My Account</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Wishlist */}
            <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Wishlist</span>
            </div>

            {/* My Cart */}
            <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
              <ShoppingCart className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">My Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-[70px] overflow-x-auto py-4">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center whitespace-nowrap text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
              >
                {item.name}
                {item.badge && (
                  <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>



    </header>
  );
};

export default Header;
