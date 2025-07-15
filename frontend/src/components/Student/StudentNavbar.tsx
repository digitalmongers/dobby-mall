"use client";
import React from 'react';
import { Bell, User } from 'lucide-react';

const StudentNavbar = () => {
  return (
    <div className="bg-[#F3F0F0] border-b border-[#FF737399] px-4 py-3">
      <div className="w-full max-w-screen-lg mx-auto flex items-center justify-end space-x-4">
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm text-gray-800 font-medium">Student Name</span>
        </div>
      </div>
    </div>
  );
};

export default StudentNavbar;
