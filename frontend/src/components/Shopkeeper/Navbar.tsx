"use client"

import { Bell, User, Menu } from "lucide-react"

interface NavbarProps {
  toggleSidebar: () => void
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
        <button onClick={toggleSidebar} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center text-sm font-bold">
            D
          </div>
          <span className="font-bold text-gray-900">DOBBY</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
          </div>
          <User className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex bg-white shadow-sm border-b px-6 py-4 items-center justify-between h-[60px]">
        <div className="flex items-center space-x-4 ml-220">
          <div className="relative ml-30">
            <img src="/images/bell-icon.png" className="h-[25px] w-[25px]"/>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap ml-5">
            <img src="/images/Profile.png" className="w-[30px] h-[30px] object-cover rounded-full" alt="Profile" />
            <span className="font-medium text-[#000000] font-[poppins]">Shop Owner</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
