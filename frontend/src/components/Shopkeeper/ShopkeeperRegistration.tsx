"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function ShopkeeperRegistration({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("")

  const handleContinue = () => {
    console.log("Continue with:", email)
  }

  interface SocialLoginProviderProps {
    provider: "Google" | "Facebook" | "Amazon" | "Apple" | string
  }

  const handleSocialLogin = (provider: SocialLoginProviderProps["provider"]): void => {
    console.log("Login with:", provider)
  }

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 font-[poppins] w-300px h-200px">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl h-120 overflow-hidden flex flex-col md:flex-row ">
        {/* Left Side - Image */}
        <div className="md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Outdoor patio with blue sofa and umbrella"
            className="h-64 md:h-full w-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Header */}
          <div className="mb-6 mt-4">
            <h2 className="text-xl text-[#003056] mb-2 font-semibold text-center">Register as Shopkeeper</h2>
            <p className="text-[#222D37] ml-2 text-s">Track orders, save favourites, and unlock deals.</p>
          </div>

          {/* Email Input */}
          <div className="mb-6 h-44px w-300px"  style={{ height: "44px", width: "344px" }}>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Email or Phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ml-5"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full bg-blue-400 text-white py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors mb-6 ml-5" style={{height: "44px" , width : "344px" }}>
            Continue
          </button>

          {/* Divider */}
          <div className="relative mb-6 ml-5" style={{ height: "15px", width: "344px"}}>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or Continue With</span>
            </div>
          </div>

          {/* Social Login Buttons - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            
            <button
              onClick={() => handleSocialLogin("Google")}
              className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 hover:bg-gray-50 transition-colors ml-5" style={{ height:"40px",width:"168px"}}>
              
              <img src='/images/google-logo.png' className="w-20px h-20px" />
              <span className="text-gray-700 font-medium">Google</span>
            </button>

            <button
              onClick={() => handleSocialLogin("Facebook")}
              className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 hover:bg-gray-50 transition-colors ml-1" style={{height:"40px",width:"168px"}}
            >
              <img src="/images/Facebook_Logo.png" className="w-20px h-20px" />
              <span className="text-gray-700 font-medium">Facebook</span>
            </button>

            <button
              onClick={() => handleSocialLogin("Amazon")}
              className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 hover:bg-gray-50 transition-colors ml-5" style={{height: "40px",width:"168px"}}
            >
              <img src="/images/Amazon_icon 1.png" className="w-20px h-20px" />
              <span className="text-gray-700 font-medium">Amazon</span>
            </button>

            <button
              onClick={() => handleSocialLogin("Apple")}
              className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 hover:bg-gray-50 transition-colors ml-1" style={{height : "40px",width: "168px"}}
            >
              <img src="/images/747 1.png" className="w-20px h-20px"/>
              <span className="text-gray-700 font-medium">Apple</span>
            </button>
          </div>
         
        </div>
      </div>
    </div>
  )
}