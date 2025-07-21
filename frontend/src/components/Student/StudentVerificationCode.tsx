'use client';

import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { ArrowLeft, X, Check } from 'lucide-react';
import SuccessScreen from './SuccessScreen';
import { useRouter } from 'next/navigation';
import axios from 'axios';
export default function StudentVerificationCode({
  email,
  onClose,
}: {
  email: string;
  onClose: () => void;
}) {
  const [codes, setCodes] = useState<string[]>(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState<number>(61);
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);
const router = useRouter();

const handleContinue = async () => {
  const fullOtp = codes.join('');
  if (fullOtp.length !== 6) {
    alert('Please enter all 6 digits of the code.');
    return;
  }

  try {
    const res = await axios.post('http://localhost:5000/api/auth/verify-otp', {
      email,
      otp: fullOtp,
    });

    const { token } = res.data;
    localStorage.setItem('token', token);

    // 1. Show success screen
    setShowSuccess(true);

    // 2. Redirect after 2 seconds
    setTimeout(() => {
      router.push('/student');
    }, 2000);
  } catch (error) {
    console.error(error);
    alert('Invalid or expired OTP. Please try again.');
  }
};

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };



  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showSuccess) {
    return <SuccessScreen onClose={onClose} />;
  }

  return (
    <div className="absolute left-1/2 top-85 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex relative h-[650px]">

        {/* Left Side */}
        <div className="flex-1 relative">
          <img
            src="/images/student.png"
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 left-8 w-16 h-20 bg-white/10 rounded-lg"></div>
          <div className="absolute bottom-32 right-12 w-12 h-16 bg-white/10 rounded-lg"></div>
          <div className="absolute top-24 left-12 w-20 h-3 bg-white/20 rounded-full"></div>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="text-sm">Back</span>
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                Enter your code to sign in
              </h1>
              <p className="text-gray-600 text-sm mb-2">
                We&#39;ve sent a 6-digit code to <span className="font-medium">{email}</span>.
              </p>
              <p className="text-gray-600 text-sm">Enter it below to complete your registration.</p>
            </div>

            <div className="flex justify-between gap-3 mb-6">
              {codes.map((code, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={code}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(index, e.target.value)
                  }
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                    handleKeyDown(index, e)
                  }
                  className="w-12 h-12 border-2 border-blue-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              ))}
            </div>

            <div className="text-center mb-6">
              <span className="text-green-600 text-sm">
                Request a new code in {formatTime(countdown)} seconds
              </span>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-white" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                By agreeing, you&#39;ll get our latest offers, updates, and ideas via SMS, WhatsApp, or Email.
              </p>
            </div>

            <button
              onClick={handleContinue}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-8"
            >
              Continue
            </button>

            <div className="flex items-center mb-8">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">Or Continue With</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <div className="text-center space-y-3">
              <div className="text-sm">
                <span className="text-gray-600">Register as Student? </span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Sign up</button>
              </div>
              <div className="text-sm">
                <span className="text-gray-600">Join as Shopkeeper? </span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Sign in</button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-gray-400">
              Read our{' '}
              <button className="text-blue-600 hover:text-blue-700">terms & conditions</button>{' '}
              and{' '}
              <button className="text-blue-600 hover:text-blue-700">privacy policy</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
