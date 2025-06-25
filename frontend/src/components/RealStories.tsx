'use client';
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RealStories = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Video file paths
  const videos = [
    '/videos/HOMEPAGE_1.mp4',
    '/videos/story2.mp4',
    '/videos/HOMEPAGE_1.mp4',
    '/videos/story2.mp4',
    '/videos/HOMEPAGE_1.mp4',
  ];

  return (
    <div>
      <div className="bg-[#F5F9FF] py-16 px-6 w-full">
        {/* Real Stories Header */}
        <h2 className="text-center text-3xl font-bold text-[#1E3A8A] mb-8">
          Real products, real stories
        </h2>

        {/* Scrollable Video Cards */}
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute z-10 top-1/2 left-7 transform -translate-y-1/2 bg-[#2C71DE] shadow p-2 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-white " />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 scrollbar-hide px-4"
          >
            {videos.map((videoSrc, index) => (
              <div
                key={index}
                className="min-w-[266.88px] w-[266.88px] h-[433.61px]  w-48 h-72 rounded-2xl overflow-hidden shadow-lg bg-white flex-shrink-0 relative"
              >
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div style={{ fontFamily: 'Poppins, sans-serif',fontWeight: 500 }}   className="absolute top-3 left-10 w-[151px] h-4  bg-opacity-60 text-white text-xs px-2 py-1 rounded-full ">
                  Eugano F. Verified Buyer
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif',fontWeight: 500 }}   className="absolute top-2  bg-white text-black w-9 h-9 flex items-center justify-center rounded-full font-bold text-sm font-poppins ">
                  E
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute z-10 top-1/2 right-9 transform -translate-y-1/2 bg-[#2C71DE] shadow p-2 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-white " />
          </button>
        </div>
      </div>

      {/* Cover Max Section */}
      <div className="mt-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1">
          <p className="text-gray-700 text-sm">The classic collection by</p>
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
            Cover <span className="text-[#D77E4E]">max</span>
          </h2>
          <p className="text-gray-600 mb-4">
            When tough isn’t tough enough, you need to take your cover protection
            to the Cover Max. Tear and abrasion resistant polyester, it is
            waterproof and perfect for regions with high rainfall.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-6">
            <span>For moderate weather</span>
            <span>Wet conditions</span>
            <span>Home & commercial use</span>
          </div>
          <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2540a0] transition">
            Know more
          </button>

          {/* Dots */}
          <div className="mt-8 flex gap-2">
            <div className="w-3 h-3 bg-[#1E3A8A] rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="/images/wallet.png"
            alt="Cover Max"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Appliance Image */}
      <div className="flex-1 py-16 px-6">
        <img
          src="/images/appliance.png"
          alt="Cover Max"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default RealStories;
