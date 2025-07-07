// import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
// import { ArrowLeft, X, Check } from 'lucide-react';

// export default function VerificationCode() {
//   const [codes, setCodes] = useState<string[]>(['', '', '', '', '', '']);
//   const [countdown, setCountdown] = useState<number>(61);
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

//   useEffect(() => {
//     if (countdown > 0) {
//       const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [countdown]);

//   const handleInputChange = (index: number, value: string) => {
//     if (value.length <= 1) {
//       const newCodes = [...codes];
//       newCodes[index] = value;
//       setCodes(newCodes);

//       // Auto focus next input
//       if (value && index < 5) {
//         inputRefs.current[index + 1]?.focus();
//       }
//     }
//   };

//   const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Backspace' && !codes[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const formatTime = (seconds: number): string => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl h-[680px] flex relative">
        
//         {/* Left Side - Image Section */}
//         <div className="flex-1 relative">
//           <div className="absolute inset-0">
//             <img 
//               src="/images/student.png" 
//               alt="Students in classroom"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Right Side - Form Section */}
//         <div className="flex-1 p-8 flex flex-col">
          
//           {/* Header */}
//           <div className="flex justify-between items-center mb-8">
//             <button className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
//               <ArrowLeft className="w-5 h-5 mr-2" />
//               <span className="text-sm">Back</span>
//             </button>
//             <button className="text-gray-400 hover:text-gray-600 transition-colors">
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Form Content */}
//           <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
            
//             {/* Title */}
//             <div className="text-center mb-8">
//               <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Enter your code to sign In
//               </h1>
//               <p className="text-gray-600 text-sm mb-2">
//                 We've sent a 6-digit code to <span className="font-medium">Alex007@gmail.com</span>.
//               </p>
//               <p className="text-gray-600 text-sm">
//                 Enter it below to complete your registration.
//               </p>
//             </div>

//             {/* Verification Code Inputs */}
//             <div className="flex justify-between gap-3 mb-6">
//               {codes.map((code, index) => (
//                 <input
//                   key={index}
//                   ref={(el) => {
//                     inputRefs.current[index] = el;
//                   }}
//                   type="text"
//                   maxLength={1}
//                   value={code}
//                   onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, e.target.value)}
//                   onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
//                   className="w-12 h-12 border-2 border-blue-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                 />
//               ))}
//             </div>

//             {/* Resend Code */}
//             <div className="text-center mb-6">
//               <span className="text-green-600 text-sm">
//                 Request a new code in {formatTime(countdown)} seconds
//               </span>
//             </div>

//             {/* Agreement Checkbox */}
//             <div className="flex items-start gap-3 mb-6">
//               <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center mt-0.5">
//                 <Check className="w-3 h-3 text-white" />
//               </div>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 By agreeing, you'll get our latest offers, updates, and ideas via SMS, WhatsApp, or Email. Opt out anytime.
//               </p>
//             </div>

//             {/* Continue Button */}
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-8">
//               Continue
//             </button>

//             {/* Divider */}
//             <div className="flex items-center mb-8">
//               <div className="flex-1 border-t border-gray-200"></div>
//               <span className="px-4 text-sm text-gray-500">Or Continue With</span>
//               <div className="flex-1 border-t border-gray-200"></div>
//             </div>

//             {/* Bottom Links */}
//             <div className="text-center space-y-3">
//               <div className="text-sm">
//                 <span className="text-gray-600">Register as Student? </span>
//                 <button className="text-blue-600 hover:text-blue-700 font-medium">
//                   Sign up
//                 </button>
//               </div>
//               <div className="text-sm">
//                 <span className="text-gray-600">Join as Shopkeeper? </span>
//                 <button className="text-blue-600 hover:text-blue-700 font-medium">
//                   Sign in
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="text-center mt-8">
//             <p className="text-xs text-gray-400">
//               Read our{' '}
//               <button className="text-blue-600 hover:text-blue-700">
//                 terms & conditions
//               </button>
//               {' '}and{' '}
//               <button className="text-blue-600 hover:text-blue-700">
//                 privacy policy
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { ArrowLeft, X, Check } from 'lucide-react';

export default function VerificationCode({ email }: { email: string }) {
  const [codes, setCodes] = useState<string[]>(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState<number>(61);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl h-[680px] flex relative">
        
        {/* Left Side */}
        <div className="flex-1 relative">
          <div className="absolute inset-0">
            <img 
              src="/images/student.png" 
              alt="Students in classroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side */}
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

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
            
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                Enter your code to sign in
              </h1>
              <p className="text-gray-600 text-sm mb-2">
                We've sent a 6-digit code to <span className="font-medium">{email}</span>.
              </p>
              <p className="text-gray-600 text-sm">
                Enter it below to complete your registration.
              </p>
            </div>

            <div className="flex justify-between gap-3 mb-6">
              {codes.map((code, index) => (
                <input
                  key={index}
                  ref={(el) => inputRefs.current[index] = el}
                  type="text"
                  maxLength={1}
                  value={code}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
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
                By agreeing, you'll get our latest offers, updates, and ideas via SMS, WhatsApp, or Email. Opt out anytime.
              </p>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-8">
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
