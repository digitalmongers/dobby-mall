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
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-white text-black text-center py-2 px-4 font-bold text-[14px] leading-[100%] tracking-[0.02em] font-asap">
  <div className="flex items-center justify-center">
    <span className="mr-4">
      BY CONTINUING TO USE SITE YOU AGREE TO US USING COOKIES IN
      ACCORDANCE WITH OUR
    </span>
    <a href="#" className="underline mr-4 text-[#3F3FE0]">
      COOKIE POLICY.
    </a>
          <button className="bg-yellow-400 text-black px-3 py-1 rounded text-xs font-semibold">
            ACCEPT and CLOSE
          </button>
        </div>
      </div>

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
  <div className="absolute top-[15px] left-[26px] w-[113px] h-[19px] bg-[#2867D9] rounded-[4px] text-white text-[12px] flex items-center justify-center font-medium">
    Free Shipping
  </div>
</div>



      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gray-800 text-white px-3 py-1">
                DOBBY
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Chair Cover"
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-6">
              {/* Location */}
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>999909909</span>
                <span className="ml-2">Austria-EUR</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>

              {/* Language */}
              <div className="flex items-center text-sm">
                <span>Select Language</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>

              {/* Country Flag */}
              <div className="w-6 h-4 bg-blue-500 rounded"></div>

              {/* Order Tracking */}
              <button className="flex items-center text-sm">
                <span>📦 Order Tracking</span>
              </button>

              {/* Account */}
              <button className="flex items-center text-sm">
                <User className="h-4 w-4 mr-1" />
                <span>My Account</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {/* Wishlist */}
              <button className="flex items-center text-sm">
                <Heart className="h-4 w-4 mr-1" />
                <span>Wishlist</span>
              </button>

              {/* Cart */}
              <button className="flex items-center text-sm">
                <ShoppingCart className="h-4 w-4 mr-1" />
                <span>My Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-8 h-12">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Patio Furniture Covers
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cushion & Pillow covers
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Solar Shades
            </a>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 border-b-2 border-blue-600 pb-3"
            >
              Custom Covers
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Tarps & Curtains
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Marine Covers
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
            >
              Car Covers
              <span className="ml-1 bg-green-500 text-white text-xs px-1 rounded">
                NEW
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
