"use client";
import React, { useState } from 'react';
import FooterBottomSection from './mainFooter';
import Image from 'next/image';

export default function DobbyFooter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#2C71DE] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/dobbylogo.png"
            alt="Dobby Logo"
            width={240}
            height={32}
            className="object-contain"
          />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {['Company', 'Support', 'Legal'].map((section, idx) => (
            <div key={idx}>
              <h3 className="text-[24px] mb-4 font-[poppins]">{section}</h3>
              <p className="text-[#C8D3DE] leading-relaxed font-[poppins] text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin.
              </p>
            </div>
          ))}
        </div>

        {/* Payment + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Payment Logos */}
          <div className="flex gap-4 ml-150 mt-30">
            <div className="w-[42px] h-[42px] rounded-lg overflow-hidden">
              <img
                src="/images/Security.png"
                alt="Security"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[42px] h-[42px] rounded-lg overflow-hidden">
              <img
                src="/images/Bhim.png"
                alt="Bhim"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* WhatsApp & Newsletter */}
          <div className="flex flex-col items-start lg:items-end gap-4 w-full lg:w-auto">
            <img
              src="/images/whatsapp-icon.png"
              className="w-[55px] h-[55px]"
              alt="WhatsApp"
            />

            <div className="w-full sm:w-[320px]">
              <span className="text-[20px] font-[poppins] text-[#FFFFFF] mb-2 block">Newsletter</span>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 pr-24 rounded-lg bg-white text-gray-800 placeholder-[#3333334D] focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-1 top-1 bottom-1 bg-blue-700 hover:bg-blue-800 px-4 py-1.5 rounded-md text-white font-medium text-sm"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <FooterBottomSection />
    </footer>
  );
}
