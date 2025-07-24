'use client';
import React, { useState } from 'react';
import {  X } from 'lucide-react';
import StudentRegistrationStep2 from './StudentRegistrationStep2';

interface Step1Props {
  onBack: () => void;
  onClose: () => void;
}

export default function StudentRegistrationStep1({ onClose }: Step1Props) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    school: '',
    grade: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 font-[poppins] w-300px h-200px">
      {step === 1 ? (
        <div className="bg-white rounded-2xl shadow-2xl w-[825px] h-[520px] overflow-hidden flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="md:w-1/2 relative">
            <img
              src="/images/student.png"
              alt="Students in classroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Form */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col relative">
            {/* Header */}
              <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-6 h-6" />
              </button>

            {/* Title */}
            <div className="mb-6 mt-4">
              <h1 className="text-xl text-[#003056] mb-2 font-[poppins]  font-md text-center">Student Registration </h1>
              <p className="text-[#222D37] font-[poppins]  text-[12px] ml-10">Complete your profile to get your affiliate link.</p>
            </div>

            {/* Form */}
            <div className="mb-10 ml-5 h-[40px] w-[275px] mt-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-[14px]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-[14px]"
              />

              <div className="flex">
                <div className="flex items-center px-3 py-3 border rounded-l-lg rounded- border-gray-300 bg-gray-50 mt-2">
                  <div className="w-6 h-6 relative">
                    <img src="/images/flag.png" className='mt-2'/>
                  </div>
                  <span className="text-sm text-gray-600 text-[14px]">+91</span>
                </div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="  Mobile Number *"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="mt-2 flex-1 py-3 border rounded-r-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-[14px]"
                />
              </div>

              <input
                type="text"
                name="school"
                placeholder="School Name *"
                value={formData.school}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 mt-2 text-[14px]"
              />

              <select
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 mt-2 text-[14px]"
              >
                <option value="" disabled className='text-[#A6B0BB'>
                  Class / Grade (6 - 12) *
                </option>
                {[6, 7, 8, 9, 10, 11, 12].map((cls) => (
                  <option key={cls} value={cls}>
                    Class {cls}
                  </option>
                ))}
              </select>

              <div className="mt-8">
                <button
                  type="button"
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    allFieldsFilled
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-200 text-gray-500 cursor-not-allowed'
                  }`}
                  onClick={() => setStep(2)}
                  disabled={!allFieldsFilled}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <StudentRegistrationStep2 onBack={() => setStep(1)} onClose={onClose} studentData={formData} />
      )}
      
    </div>
  );
}
// "use client"

// import { useState } from "react"
// import { X } from "lucide-react"

// export default function ShopkeeperRegistration({ onClose }: { onClose: () => void }) {
//   const [email, setEmail] = useState("")

//   const handleContinue = () => {
//     console.log("Continue with:", email)
//   }

//   interface SocialLoginProviderProps {
//     provider: "Google" | "Facebook" | "Amazon" | "Apple" | string
//   }

//   const handleSocialLogin = (provider: SocialLoginProviderProps["provider"]): void => {
//     console.log("Login with:", provider)
//   }

//   return (
//     <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 font-[poppins] w-300px h-200px">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-4xl h-120 overflow-hidden flex flex-col md:flex-row ">
//         {/* Left Side - Image */}
//         <div className="md:w-1/2 relative">
//           <img
//             src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//             alt="Outdoor patio with blue sofa and umbrella"
//             className="h-64 md:h-full w-full object-cover"
//           />
//         </div>

//         {/* Right Side - Form */}
//         <div className="md:w-1/2 p-6 md:p-8 flex flex-col relative">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="h-6 w-6" />
//           </button>

//           {/* Header */}
//           <div className="mb-6 mt-4">
//             <h2 className="text-xl text-[#003056] mb-2 font-semibold text-center">Register as Shopkeeper</h2>
//             <p className="text-[#222D37] ml-2 text-s">Track orders, save favourites, and unlock deals.</p>
//           </div>

//           {/* Email Input */}
//           <div className="mb-6 h-44px w-300px"  style={{ height: "44px", width: "344px" }}>
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Enter Email or Phone"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ml-5"
//               />
//             </div>
//           </div>

//           {/* Continue Button */}
//           <button
//             onClick={handleContinue}
//             className="w-full bg-blue-400 text-white py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors mb-6 ml-5" style={{height: "44px" , width : "344px" }}>
//             Continue
//           </button>

//           {/* Divider */}
//           <div className="relative mb-6 ml-5" style={{ height: "15px", width: "344px"}}>
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-4 bg-white text-gray-500">Or Continue With</span>
//             </div>
//           </div>

//           {/* Social Login Buttons - 2x2 Grid */}
//           <div className="grid grid-cols-2 gap-3 mb-6">
            
//             <button
//               onClick={() => handleSocialLogin("Google")}
//               className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 hover:bg-gray-50 transition-colors ml-5" style={{ height:"40px",width:"168px"}}>
              
//               <img src='/images/google-logo.png' className="w-20px h-20px" />
//               <span className="text-gray-700 font-medium">Google</span>
//             </button>

//             <button
//               onClick={() => handleSocialLogin("Facebook")}
//               className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 hover:bg-gray-50 transition-colors ml-1" style={{height:"40px",width:"168px"}}
//             >
//               <img src="/images/Facebook_Logo.png" className="w-20px h-20px" />
//               <span className="text-gray-700 font-medium">Facebook</span>
//             </button>

//             <button
//               onClick={() => handleSocialLogin("Amazon")}
//               className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 hover:bg-gray-50 transition-colors ml-5" style={{height: "40px",width:"168px"}}
//             >
//               <img src="/images/Amazon_icon 1.png" className="w-20px h-20px" />
//               <span className="text-gray-700 font-medium">Amazon</span>
//             </button>

//             <button
//               onClick={() => handleSocialLogin("Apple")}
//               className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 hover:bg-gray-50 transition-colors ml-1" style={{height : "40px",width: "168px"}}
//             >
//               <img src="/images/747 1.png" className="w-20px h-20px"/>
//               <span className="text-gray-700 font-medium">Apple</span>
//             </button>
//           </div>
         
//         </div>
//       </div>
//     </div>
//   )
// }