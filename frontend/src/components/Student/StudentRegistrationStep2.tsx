'use client';

import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Step2Props {
  onBack: () => void;
  onClose: () => void;
  studentData: {
    fullName: string;
    email: string;
    mobile: string;
    school: string;
    grade: string;
  };
}

export default function StudentRegistrationStep2({ onBack, onClose, studentData }: Step2Props) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    parentName: '',
    parentMobile: '',
    homeAddress: '',
    receiveUpdates: false
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async () => {
    const { parentName, parentMobile, homeAddress } = formData;
    if (!parentName || !parentMobile || !homeAddress) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      name: studentData.fullName,
      class: studentData.grade,
      phone: studentData.mobile,
      email: studentData.email,
      schoolname: studentData.school,
      parentName: formData.parentName,
      parentPhone: formData.parentMobile,
      address: formData.homeAddress
    };

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/students/register', payload);
      if (response.data && response.data.student) {
        localStorage.setItem('fullName', JSON.stringify(response.data.student));
      }
      alert('Registration successful!');
      router.push('/student');
    } catch (error: unknown) {
      console.error(error);
      alert((error as any).response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 font-[poppins] w-300px h-200px">
      <div className="bg-white shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex">
        {/* Left Side - Image */}
        <div className="w-1/2 relative">
          <img
            src="/images/student.png"
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side - Form */}
        <div className="w-1/2 p-8 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <button onClick={onBack} className="flex items-center text-gray-400 hover:text-gray-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-sm">Back</span>
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mb-8 text-center">
            <h1 className="text-xl text-[#003056] mb-2">Student Registration</h1>
            <p className="text-[#222D37] text-sm">Complete your profile for exclusive offers and updates</p>
          </div>
          
          {/* Form */}
          <div className="space-y-4 flex-1">
            <input
              type="text"
              name="parentName"
              placeholder="Parent / Guardian Name *"
              value={formData.parentName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
            />
            
            <div className="flex">
              <div className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                <img src="/images/flag.png" className="h-4 w-4 mr-2" alt="India flag" />
                <span className="text-sm text-gray-700 font-medium">+91</span>
              </div>
              <input
                type="tel"
                name="parentMobile"
                placeholder="Parent / Guardian Mobile *"
                value={formData.parentMobile}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
              />
            </div>
            
            <textarea
              name="homeAddress"
              placeholder="Home Address *"
              value={formData.homeAddress}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm resize-none"
            />
            
            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                name="receiveUpdates"
                checked={formData.receiveUpdates}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700 leading-5">
                Receive offers and updates on SMS or WhatsApp.<br />
                You can unsubscribe anytime. *
              </label>
            </div>
            
            <div className="pt-6">
              <button
                type="button"
                className={`w-full ${loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} text-white py-3 px-4 rounded-lg font-medium text-sm transition-colors`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Register & Get Started'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}