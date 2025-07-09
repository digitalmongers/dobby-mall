'use client';

import { Check, X } from 'lucide-react';

export default function SuccessScreen({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-1/2 top-85 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex relative h-[650px]">

        {/* Left Side - Image */}
        <div className="flex-1 relative">
          <img
            src="/images/student.png"
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />
          {/* Optional overlays */}
          <div className="absolute bottom-20 left-8 w-16 h-20 bg-white/10 rounded-lg"></div>
          <div className="absolute bottom-32 right-12 w-12 h-16 bg-white/10 rounded-lg"></div>
          <div className="absolute top-24 left-12 w-20 h-3 bg-white/20 rounded-full"></div>
        </div>

        {/* Right Side - Success Content */}
        <div className="flex-1 p-8 flex flex-col items-center justify-center">
          <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg mb-6">
              <Check className="w-8 h-8 text-white" strokeWidth={3} />
            </div>

            <h1 className="text-2xl font-semibold text-gray-800 mb-3">Congratulations</h1>
            <p className="text-gray-600 text-base">Your account has been successfully created</p>
          </div>
        </div>
      </div>
    </div>
  );
}
