// 'use client';
// import React, { useState } from 'react';
// import { ArrowLeft, X } from 'lucide-react';
// import StudentRegistrationStep2 from './StudentRegistrationStep2';

// export default function StudentRegistration({ onClose }: { onClose: () => void }) {
//   const [step, setStep] = useState(1);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     mobile: '',
//     school: '',
//     grade: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');

//   return (
//     <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
//       {step === 1 ? (
//         <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex">
//           {/* Left side - Image */}
//           <div className="flex-1 relative">
//             <img
//               src="/images/student.png"
//               alt="Students in classroom"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right side - Form */}
//           <div className="flex-1 p-8 relative">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-8">
//               <button className="flex items-center text-gray-600 hover:text-gray-800">
//                 <ArrowLeft className="w-5 h-5 mr-2" />
//                 <span className="text-sm">Back</span>
//               </button>
//               <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Title */}
//             <div className="mb-8">
//               <h1 className="text-2xl font-semibold text-gray-900 mb-2">Student Registration</h1>
//               <p className="text-gray-600 text-sm">Complete your profile to get your affiliate link.</p>
//             </div>

//             {/* Form */}
//             <div className="space-y-6">
//               {/* Full Name */}
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name *"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//               />

//               {/* Email */}
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address *"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//               />

//               {/* Mobile Number */}
//               <div className="flex">
//                 <div className="flex items-center px-3 py-3 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50">
//                   <div className="w-6 h-4 mr-2 relative">
//                     <div className="absolute top-0 w-full h-1/3 bg-orange-500" />
//                     <div className="absolute top-1/3 w-full h-1/3 bg-white" />
//                     <div className="absolute top-2/3 w-full h-1/3 bg-green-600" />
//                   </div>
//                   <span className="text-sm text-gray-600">+91</span>
//                 </div>
//                 <input
//                   type="tel"
//                   name="mobile"
//                   placeholder="Mobile Number *"
//                   value={formData.mobile}
//                   onChange={handleInputChange}
//                   className="flex-1 px-4 py-3 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                 />
//               </div>

//               {/* School Name */}
//               <input
//                 type="text"
//                 name="school"
//                 placeholder="School Name *"
//                 value={formData.school}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//               />

//               {/* Grade */}
//               <select
//                 name="grade"
//                 value={formData.grade}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
//               >
//                 <option value="" disabled>
//                   Class / Grade (6 - 12) *
//                 </option>
//                 {[6, 7, 8, 9, 10, 11, 12].map((cls) => (
//                   <option key={cls} value={cls}>
//                     Class {cls}
//                   </option>
//                 ))}
//               </select>

//               {/* Next Button */}
//               <div className="pt-4">
//                 <button
//                   type="button"
//                   className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
//                     allFieldsFilled
//                       ? 'bg-blue-600 text-white hover:bg-blue-700'
//                       : 'bg-blue-200 text-gray-500 cursor-not-allowed'
//                   }`}
//                   onClick={() => {
//                     if (allFieldsFilled) {
//                       setStep(2);
//                     } else {
//                       alert('Please fill all fields');
//                     }
//                   }}
//                   disabled={!allFieldsFilled}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <StudentRegistrationStep2 onBack={() => setStep(1)} onClose={onClose} />
//       )}
//     </div>
//   );
// }


'use client';
import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import StudentRegistrationStep2 from './StudentRegistrationStep2';

export default function StudentRegistration({ onClose }: { onClose: () => void }) {
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
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      {step === 1 ? (
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
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
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
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />

              <div className="flex">
                <div className="flex items-center px-3 py-3 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50">
                  <div className="w-6 h-4 mr-2 relative">
                    <div className="absolute top-0 w-full h-1/3 bg-orange-500" />
                    <div className="absolute top-1/3 w-full h-1/3 bg-white" />
                    <div className="absolute top-2/3 w-full h-1/3 bg-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">+91</span>
                </div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number *"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>

              <input
                type="text"
                name="school"
                placeholder="School Name *"
                value={formData.school}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />

              <select
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
              >
                <option value="" disabled>
                  Class / Grade (6 - 12) *
                </option>
                {[6, 7, 8, 9, 10, 11, 12].map((cls) => (
                  <option key={cls} value={cls}>
                    Class {cls}
                  </option>
                ))}
              </select>

              <div className="pt-4">
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
