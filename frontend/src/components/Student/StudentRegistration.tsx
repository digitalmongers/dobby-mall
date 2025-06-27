import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';

export default function StudentRegistration({ onClose }: { onClose: () => void }){
 const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    school: '',
    grade: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex">
        {/* Left side - Image */}
        <div className="flex-1 relative">
          <img 
            src="/images/student.png" 
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Form */}
        <div className="flex-1 p-8 relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm">Back</span>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Student Registration</h1>
            <p className="text-gray-600 text-sm">Complete your profile to get your affiliate link.</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex">
              <div className="flex items-center px-3 py-3 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50">
                <div className="w-6 h-4 mr-2">
                  <div className="w-full h-full bg-orange-500 relative">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-orange-500"></div>
                    <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
                    <div className="absolute top-2/3 left-0 w-full h-1/3 bg-green-600"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 border border-blue-800 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-600">+91</span>
                <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                value={formData.mobile}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* School Name */}
            <div>
              <input
                type="text"
                name="school"
                placeholder="School Name *"
                value={formData.school}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Grade */}
            <div>
              <select
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-400 appearance-none bg-white"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.75rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="" disabled>Class / Grade (6 - 12) *</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                className="w-full bg-blue-200 text-gray-500 py-3 px-4 rounded-lg font-medium transition-colors hover:bg-blue-300"
                onClick={() => console.log('Form submitted:', formData)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}