"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import StudentRegistration from './Student/StudentRegistrationstep1';
import ShopkeeperRegistration from './Shopkeeper/ShopkeeperRegistration';
import TrustBanner from './trust-banner';
const Hero = () => {
  // Removed unused currentSlide state
  const [showStudentModal, setShowStudentModal] = useState(false);
const [isShopkeeperModalOpen, setIsShopkeeperModalOpen] = useState(false);
  const products = [
    {
      id: 1,
      name: "Outdoor Patio Chair Cover",
      price: "$16.99",
      originalPrice: "$22.99",
      image: "/images/outdoor.png",
      colors: ["bg-gray-600", "bg-blue-600", "bg-green-600", "bg-red-600"]
    },
    {
      id: 2,
      name: "Outdoor Patio Chair Cover",
      price: "$16.99",
      originalPrice: "$22.99",
      image: "/images/outdoor.png",
      colors: ["bg-blue-600", "bg-gray-600", "bg-green-600", "bg-red-600"]
    },
    {
      id: 3,
      name: "Outdoor Patio Chair Cover",
      price: "$16.99",
      originalPrice: "$22.99",
      image: "/images/outdoor.png",
      colors: ["bg-green-600", "bg-blue-600", "bg-gray-600", "bg-red-600"]
    },
    {
      id: 4,
      name: "Outdoor Patio Chair Cover",
      price: "$16.99",
      originalPrice: "$22.99",
      image: "/images/outdoor.png",
      colors: ["bg-red-600", "bg-blue-600", "bg-green-600", "bg-gray-600"]
    }
  ];

  // Removed nextSlide and prevSlide since currentSlide is not used


  function prevSlide(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();

    console.log('Previous slide clicked');
  }

  function nextSlide(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();

    console.log('Next slide clicked');
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Modal */}
    {showStudentModal && (
  <div className="fixed inset-0 z-50 backdrop-blur-[2px] bg-transparent flex items-center justify-center p-4">
    <StudentRegistration 
      onClose={() => setShowStudentModal(false)} 
      onBack={() => setShowStudentModal(false)} 
    />
  </div>
)}

{isShopkeeperModalOpen && (
  <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4">
    <ShopkeeperRegistration onClose={() => setIsShopkeeperModalOpen(false)} />
  </div>
)}
  
      <TrustBanner/>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="flex min-h-screen">
          {/* Left Section - Shopkeeper */}
          <div className="flex-1 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 relative">
            {/* Background pattern/texture */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10 flex flex-col justify-center items-center h-full p-8 text-center text-white">
              {/* Shopkeeper Image */}
              
              <div className="relative mb-8">
                
                <div className="absolute w-[762px] h-[791px] top-[-50px] left-[-380px] overflow-hidden shadow-2xl">
                  <img 
                    src="/images/shop.png" 
                    alt="Shopkeeper in store" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Play Button */}
                
               <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4 ">

   
    </div>
              </div>
              
              Shopkeeper CTA
              <div className="space-y-4 z-10">
                  <img src="/images/play.png" alt="Play" className="w-20 h-20 mt-70 ml-23 " />
                <button  onClick={() => setShowStudentModal(true)} className="mt-50 w-[200px] h-[78px] rounded-[8px] bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition duration-200">
      Join as a Shopkeeper
    </button>
        
              </div>
            </div>
          </div>

          {/* Right Section - Student */}
          <div className="flex-1 bg-gradient-to-bl from-blue-400 via-blue-600 to-purple-700 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20L0 0h40v40H0z'/%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10 flex flex-col justify-center items-center h-full p-8 text-center text-white">
              {/* Student Image */}
              <div className="relative mb-8">
                <div className="absolute w-[762px] h-[791px] top-[-50px] left-[-380px] overflow-hidden shadow-2xl">
                  <img 
                    src="/images/student.png" 
                    alt="Student studying" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                 
                </div>
              </div>
              
              {/* Student CTA */}
              <div className="space-y-4 z-10">
                <img src="/images/play.png" alt="Play" className="w-20 h-20 mt-70 ml-36 " />
                 <button  onClick={() => setShowStudentModal(true)} className="mt-50 w-[300px] h-[78px] rounded-[8px] bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition duration-200">
      Join as a Student
    </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products Section */}
      <div className=" w-full h-full mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover this season&#39;s trending must-haves now!
          </h2>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8  rounded-lg p-4 px-6 w-360 h-100">
            <button 
              onClick={prevSlide}
              className="absolute left-14 z-10 top-35  p-2 rounded-full bg-[#003056] hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex-1 mx-2 my-6   ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-58 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <button className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-lg font-bold text-blue-600">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                      
                      {/* Color Options */}
                      <div className="flex space-x-2">
                        {product.colors.map((color, colorIndex) => (
                          <div 
                            key={colorIndex}
                            className={`w-4 h-4 rounded-full border-2 border-gray-300 ${color}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextSlide}
              className="absolute right-18 top-40 transform -translate-y-1/2 p-2 rounded-full bg-[#003056] hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="  w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
    
<div className="bg-gray-50 ">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
  </div>

  {/* Shopkeepers Frame */}
  <div className="w-[1327px] h-[619px] mx-auto mb-12 px-[22px] py-6 border border-[#CCC9C9] flex items-center gap-[118px]">
    <img src="/images/work1.png" alt="Shopkeeper" className="h-full object-contain max-w-[50%]" />
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">How does it works for shopkeepers?</h3>
      <p className="text-gray-600 mb-6 max-w-xl text-sm">
        Lorem ipsum dolor sit amet consectetur. A ultricies molestie cursus proin nulla nunc risus adipiscing vitae.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {["#FEF9C3", "#FECACA", "#BBF7D0", "#86EFAC", "#E9D5FF", "#BFDBFE"].map((color, i) => (
          <div key={i} className="rounded-lg p-4 w-full max-w-[200px]" style={{ backgroundColor: color }}>
            <div className="text-sm font-semibold text-white bg-slate-800 px-3 py-1 rounded-t-md w-fit mb-2">
              {`0${i + 1}`}
            </div>
            <p className="text-gray-800 text-sm">
              Lorem ipsum dolor sit amet consectetur. A ultricies molestie cursus.
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Students Frame */}
<div className="w-[1327px] h-[619px] mx-auto mb-12 px-[22px] py-6 border border-[#CCC9C9] flex items-center gap-[118px]">
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">How does it works for Students?</h3>
      <p className="text-gray-600 mb-6 max-w-xl text-sm">
        Lorem ipsum dolor sit amet consectetur. A ultricies molestie cursus proin nulla nunc risus adipiscing vitae.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {["#FEF9C3", "#FECACA", "#BBF7D0", "#86EFAC", "#E9D5FF", "#BFDBFE"].map((color, i) => (
          <div key={i} className="rounded-lg p-4 w-full max-w-[200px]" style={{ backgroundColor: color }}>
            <div className="text-sm font-semibold text-white bg-slate-800 px-3 py-1 rounded-t-md w-fit mb-2">
              {`0${i + 1}`}
            </div>
            <p className="text-gray-800 text-sm">
              Lorem ipsum dolor sit amet consectetur. A ultricies molestie cursus.
            </p>
          </div>
        ))}
      </div>
    </div>
    <img src="/images/work2.png" alt="Student" className="h-full object-contain max-w-[50%]" />
  </div>
</div>

    </div>
  );
};

export default Hero;