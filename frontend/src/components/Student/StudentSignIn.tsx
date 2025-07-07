
'use client';

import { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import StudentVerificationCode from './StudentVerificationCode'; // Make sure this path is correct

export default function StudentSignIn() {
  const [email, setEmail] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleContinue = () => {
    if (email.trim() !== '') {
      setShowVerification(true);
    } else {
      alert('Please enter your email or phone');
    }
  };

  if (showVerification) {
    return <StudentVerificationCode email={email} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl h-[600px] flex relative">

        {/* Left Side - Image Section */}
        <div className="flex-1 relative">
          <div className="absolute inset-0">
            <img
              src="/images/student.png"
              alt="Students in classroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay elements */}
          <div className="absolute bottom-20 left-8 w-16 h-20 bg-white/10 rounded-lg"></div>
          <div className="absolute bottom-32 right-12 w-12 h-16 bg-white/10 rounded-lg"></div>
          <div className="absolute top-24 left-12 w-20 h-3 bg-white/20 rounded-full"></div>
        </div>

        {/* Right Side - Form Section */}
        <div className="flex-1 p-8 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm">Back</span>
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form Content */}
          <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                Sign in as Student
              </h1>
              <p className="text-gray-600 text-sm">
                Complete your profile to get your affiliate link.
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter Email or Phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="w-full bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium py-3 px-6 rounded-lg transition-colors mb-8"
            >
              Continue
            </button>

            {/* Divider */}
            <div className="flex items-center mb-8">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">Or Continue With</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Bottom Links */}
            <div className="text-center space-y-3">
              <div className="text-sm">
                <span className="text-gray-600">Register as Student? </span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign up
                </button>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">Join as Shopkeeper? </span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign in
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-xs text-gray-400">
              Read our{' '}
              <button className="text-blue-600 hover:text-blue-700">
                terms & conditions
              </button>
              {' '}and{' '}
              <button className="text-blue-600 hover:text-blue-700">
                privacy policy
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
