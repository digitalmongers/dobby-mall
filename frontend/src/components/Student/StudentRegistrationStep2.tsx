import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';

export default function StudentRegistrationStep2() {
  const [formData, setFormData] = useState({
    parentName: '',
    parentMobile: '',
    homeAddress: '',
    receiveUpdates: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">
        {/* Left side - Image */}
        <div className="flex-1 relative">
          <img 
            src="/images/student.png" 
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Form */}
        <div className="flex-1 p-8 relative bg-white">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button className="flex items-center text-gray-400 hover:text-gray-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-sm">Back</span>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Student Registration</h1>
            <p className="text-gray-600 text-sm">Complete your profile for exclusive offers and updates</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Parent/Guardian Name */}
            <div>
              <input
                type="text"
                name="parentName"
                placeholder="Parent / Guardian Name *"
                value={formData.parentName}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-sm"
              />
            </div>

            {/* Parent/Guardian Mobile */}
            <div className="flex">
              <div className="flex items-center px-3 py-4 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50">
                <div className="w-5 h-3 mr-2">
                  <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-orange-500"></div>
                    <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
                    <div className="absolute top-2/3 left-0 w-full h-1/3 bg-green-600"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-3 h-3 border border-blue-900 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-700 font-medium">+91</span>
                <svg className="w-3 h-3 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <input
                type="tel"
                name="parentMobile"
                placeholder="Parent / Guardian Mobile *"
                value={formData.parentMobile}
                onChange={handleInputChange}
                className="flex-1 px-4 py-4 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-sm"
              />
            </div>

            {/* Home Address */}
            <div>
              <textarea
                name="homeAddress"
                placeholder="Home Address"
                value={formData.homeAddress}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-sm resize-none"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                name="receiveUpdates"
                checked={formData.receiveUpdates}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label className="text-sm text-gray-700 leading-5">
                Receive offers and updates on SMS or WhatsApp.
                <br />
                You can unsubscribe anytime. *
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                className="w-full bg-blue-200 text-gray-500 py-4 px-4 rounded-lg font-medium text-sm transition-colors hover:bg-blue-300"
                onClick={() => console.log('Registration completed:', formData)}
              >
                Register & Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}