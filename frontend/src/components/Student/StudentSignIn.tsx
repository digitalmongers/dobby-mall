'use client';
import axios from 'axios'; 
import { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import StudentVerificationCode from './StudentVerificationCode'; 
import Alert from 'react-bootstrap/Alert';

export default function StudentSignIn({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [showVerification, setShowVerification] = useState(false);

 const handleContinue = async () => {
    if (email.trim() === '') {
       <Alert variant="danger">
          Please enter your email
        </Alert>
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/send-otp', { email });
      console.log(res.data.message); // optional log
      setShowVerification(true);
    } catch (error: any) {
      console.error(error);
      const msg = error?.response?.data?.message || 'Failed to send OTP';
      alert(msg);
    }
  };


  if (showVerification) {
    return <StudentVerificationCode email={email} onClose={onClose}/>;
  }

  return (
    <div className="absolute left-1/2 top-85 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex relative h-[650px]">
        
        {/* Left Side - Image Section */}
        <div className="flex-1 relative">
          <img
            src="/images/student.png"
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />

          {/* Overlay elements (optional visual decorations) */}
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
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-8"
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
