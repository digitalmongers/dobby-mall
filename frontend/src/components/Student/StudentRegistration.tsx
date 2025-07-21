"use client"

import { useState } from "react"
import { X, Chrome, Facebook, ShoppingCart, Apple } from 'lucide-react';  

interface StudentRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function StudentRegistrationModal({ onClose = () => {} }: StudentRegistrationModalProps) {
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    // Handle form submission
    console.log("Continue with:", email)
  }

  const handleSocialLogin = (provider: string) => {
    console.log("Login with:", provider)
  }

  return (
     <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4">


      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 relative">
          <img 
            src="/images/student.png"
            alt="Student in classroom"
            className="h-64 md:h-full w-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Header */}
          <div className="mb-6 mt-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Register as Student</h2>
            <p className="text-gray-600 text-sm">Track orders, save favourites, and unlock deals.</p>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Email or Phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full bg-blue-400 text-white py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors mb-6"
          >
            Continue
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or Continue With</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Chrome className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 font-medium">Google</span>
            </button>

            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Facebook</span>
            </button>
          </div>

          {/* Second Row Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => handleSocialLogin('Amazon')}
              className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Amazon</span>
            </button>

            <button
              onClick={() => handleSocialLogin('Apple')}
              className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Apple className="w-5 h-5 text-black" />
              <span className="text-gray-700 font-medium">Apple</span>
            </button>
          </div>

          {/* Business Link */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Shopping for a business? </span>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Join Cover<span className="bg-blue-600 text-white px-1 rounded text-xs">All</span>
            </a>
            <span className="text-gray-600 ml-1">Business</span>
            <br />
            <span className="text-gray-500 text-xs">for bulk discounts & exclusive benefits</span>
          </div>
        </div>
      </div>
    </div>
  );
}
