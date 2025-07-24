'use client';

import React, { useState } from 'react';

import {
  Search,
  ScanLine,
  Mic,
  ChevronDown,
} from 'lucide-react';

import PromoBanner from './PromoBanner';
import StudentRegistration from './Student/StudentRegistrationstep1';
import StudentSignIn from './Student/StudentSignIn';
import ShopkeeperRegistration from './Shopkeeper/ShopkeeperRegistration';

const Header = () => {
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [isStudentSignInOpen, setIsStudentSignInOpen] = useState(false);
  const [isShopkeeperModalOpen, setIsShopkeeperModalOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleOpenStudentModal = () => {
    setShowStudentModal(true);
    setOpenDropdown(null);
  };

  const handleStudentSignIn = () => {
    setIsStudentSignInOpen(true);
    setOpenDropdown(null);
  };

  const handleShopkeeperRegister = () => {
    setIsShopkeeperModalOpen(true);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full">
      {/* Modals */}
      {showStudentModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-[2px] bg-transparent flex items-center justify-center p-4">
          <StudentRegistration
            onClose={() => setShowStudentModal(false)}
            onBack={() => setShowStudentModal(false)}
          />
        </div>
      )}

      {isStudentSignInOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-[2px] w-full bg-transparent flex items-center justify-center p-4">
          <div className="rounded-lg shadow-xl w-full max-w-5xl">
            <StudentSignIn onClose={() => setIsStudentSignInOpen(false)} />
          </div>
        </div>
      )}

      {isShopkeeperModalOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4">
          <ShopkeeperRegistration onClose={() => setIsShopkeeperModalOpen(false)} />
        </div>
      )}

      {/* Promo Banner */}
      <div className="bg-red-600 text-black text-center py-2 font-asap font-bold text-[14px]">
        <span className="text-white">Free Listing for first 100 Shopkeepers</span>
      </div>

      <div className="w-[1500px] h-[50px] -mt-0.25 bg-[#302E2EDB] relative">
        <PromoBanner />
      </div>

      {/* Main Header */}
      <div className="bg-[#1a1f71] px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="bg-[#666666] px-6 py-2 rounded">
          <h1 className="text-white text-xl font-bold tracking-wider">DOBBY</h1>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search for Chair Cover"
              className="flex-1 px-4 py-2.5 text-gray-700 placeholder-gray-500"
            />
            <button className="p-2.5 hover:bg-gray-50 border-r border-gray-300">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center border-l border-gray-300">
              <button className="p-2.5 hover:bg-gray-50 border-r border-gray-300">
                <ScanLine className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2.5 hover:bg-gray-50">
                <Mic className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Dropdowns */}
        <div className="flex items-center space-x-4 mx-8">
          {[
            {
              label: 'User',
              items: [
                { text: 'Sign up', icon:<img src="/images/register.svg" className='w-4 h-4'/>, action: () => {} },
                { text: 'Sign in',icon:<img src="/images/sign-in.svg" className='w-4 h-4'/>, action: () => {} }
              ]
            },
            {
              label: 'Shopkeeper',
              items: [
                { text: 'Register Now',icon: <img src="/images/register.svg" className='w-4 h-4' />, action: handleShopkeeperRegister },
                { text: 'Sign in',icon : <img src="/images/sign-in.svg" className='w-4 h-4'/>, action: handleShopkeeperRegister }
              ]
            },
            {
              label: 'Student',
              items: [
                { text: 'Register Now', icon :<img src="/images/register.svg"  className='w-4 h-4'/>, action: handleOpenStudentModal },
                { text: 'Sign in',icon: <img src="/images/sign-in.svg" className='w-4 h-4'/>, action: handleStudentSignIn }
              ]
            }
          ].map((dropdown) => (
            <div
              key={dropdown.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(dropdown.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="flex items-center space-x-1 px-4 py-2 rounded-sm text-[#39FF14] font-medium border border-[#39FF14]"
                style={{ backgroundColor: '#1a1f71' }}
              >
                <span className="text-base">{dropdown.label}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {openDropdown === dropdown.label && (
                <div className="absolute top-full mt-1 left-0 w-40 h-25 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    
                   {dropdown.items.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        onClick={item.action}
                        className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        <span>{item.text}</span>
                        <span>{item.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[#f1f5f9] px-4 py-3 border-b border-gray-300">
        <nav className="flex justify-center gap-[60px]">
          {[
            'Patio Furniture Covers',
            'Cushion & Pillow covers',
            'Solar Shades',
            'Custom Covers',
            'Tarps & Curtains',
            'Marine Covers',
            'Car Covers'
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-gray-700 font-medium py-2 border-b-2 ${
                item === 'Custom Covers'
                  ? 'text-blue-600 border-blue-600'
                  : 'border-transparent hover:text-blue-600 hover:border-blue-600 transition-colors'
              } relative`}
            >
              {item}
              {item === 'Car Covers' && (
                <span className="absolute -top-1 -right-10 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold bg-green-500">
                  New
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
