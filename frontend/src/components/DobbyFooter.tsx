"use client";
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
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
    <footer className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className=" inline-block px-6 py-3 mb-8">
          <Image
    src="/images/dobbylogo.png" // replace with your image path
    alt="Dobby Logo"
    width={240}
    height={32}
    className="object-contain"
  />
          </div>
          
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Company Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <p className="text-blue-100 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin.
              </p>
            </div>
            
            {/* Support Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <p className="text-blue-100 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin.
              </p>
            </div>
            
            {/* Legal Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <p className="text-blue-100 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin.
              </p>
            </div>
          </div>
          
          {/* Icons and Newsletter Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left side - Brand Images */}
           <div className="flex  gap-4 ml-198 mt-18">
        <div className="w-16 h-12 rounded-lg flex items-center justify-center">
      <img 
      src="/images/Security.png" 
      alt="PM Logo" 
      className="w-full h-full object-cover rounded-lg"
      />
    </div>
  <div className="w-16 h-12 rounded-lg flex items-center justify-center">
   <img 
     src="/images/Bhim.png" 
     alt="SLIM Logo" 
     className="w-full h-full object-cover rounded-lg"
   />
 </div>
</div>
            
            {/* Right side - WhatsApp and Newsletter */}
            <div className="flex flex-col items-end gap-4">
              {/* WhatsApp Icon */}
              <div className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-colors cursor-pointer">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path 
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" 
                    fill="currentColor"
                  />
                </svg>
              </div>
              
              {/* Newsletter Section */}
              <div className="flex items-center">
  <span className="text-lg font-medium -mt-22 relative left-24">Newsletter</span>
  <div className="relative">
    <input
      type="email"
      placeholder="Newsletter"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="px-4 py-2 pr-24 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 w-80"
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
      </div>
      
      {/* Bottom Section */}
      <div className="bg-white text-gray-600 py-8">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* About Column */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">About Covers and All</h4>
              <p className="text-sm mb-4">
                We provide high quality custom-made cover solutions with a wide range of UV-resistant fabrics for outdoor use. We offer water resistant covers in a variety of styles for year-round protection for virtually any item.
              </p>
            </div>
            
            {/* Company Information */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Company Information</h4>
              <ul className="text-sm space-y-1">
                <li>• Home</li>
                <li>• About Us</li>
                <li>• Services</li>
                <li>• FAQ</li>
                <li>• Product Offers</li>
                <li>• Blog</li>
                <li>• New To Members</li>
              </ul>
            </div>
            
            {/* Policies Column */}
            <div>
              <ul className="text-sm space-y-1">
                <li>• Our Policy</li>
                <li>• Commercial Terms</li>
                <li>• Art Service</li>
                <li>• Return Policy</li>
                <li>• Terms and Service</li>
                <li>• Call Now</li>
                <li>• COVID-19 Measures</li>
              </ul>
              <ul className="text-sm space-y-1 mt-4">
                <li>• Shipping Policy</li>
                <li>• Privacy Policy</li>
                <li>• Refund and Cancellation</li>
                <li>• Disclaimer</li>
                <li>• Governmental Shipping</li>
                <li>• Billing & Payments</li>
                <li>• Programs</li>
              </ul>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="mb-4 mt-10">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-900 " />
                  <span className="font-semibold text-gray-800">Location:</span>
                </div>
                <p className="text-sm text-blue-600">Suwanee, GA 30024, USA</p>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-gray-900" />
                  <span className="font-semibold text-gray-800">Reach us by Phone:</span>
                </div>
                <p className="text-sm">9999999999</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-gray-900" />
                  <span className="font-semibold text-gray-800">Email Us:</span>
                </div>
                <p className="text-sm text-blue-600">dobby@dobby.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}