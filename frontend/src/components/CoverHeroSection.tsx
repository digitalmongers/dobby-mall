"use client";
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CoverHeroSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

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
    },
    {
      id: 5,
      name: "Outdoor Patio Chair Cover",
      price: "$16.99",
      originalPrice: "$22.99",
      image: "/images/outdoor.png",
      colors: ["bg-gray-600", "bg-blue-600", "bg-green-600", "bg-red-600"]
    }
  ];

  const scrollAmount = 300;

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white top-2">
      {/* Hero Section with Video */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/HOMEPAGE_1.mp4"
        ></video>

        <div className="absolute inset-0 bg-opacity-30 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            We&apos;ve got you covered, no matter what!
          </h1>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Shop Custom Covers now
          </button>
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-white font-medium">
            <div>Snug fit</div>
            <div>Multiple fabric options</div>
            <div>Weatherproof</div>
          </div>
        </div>
      </div>

      {/* Car Cover Section */}
      <div className="w-full bg-[#F5F9FF] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="/images/car.png"
              alt="Car Cover"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="flex-1 text-left">
            <p className="text-gray-600 text-sm mb-2">
              Happiness is your car looking as great as you left it.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
              Uncovering happiness
            </h2>
            <p className="text-gray-700 font-medium">Car Covers</p>
            <div className="mt-6 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#1E3A8A]"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <div className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover this season&apos;s trending must-haves now!
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#003056] rounded-full hover:bg-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto no-scrollbar flex gap-6 scroll-smooth py-2"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[260px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
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
                  <div className="flex space-x-2">
                    {product.colors.map((color, index) => (
                      <div key={index} className={`w-4 h-4 rounded-full border-2 border-gray-300 ${color}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#003056] rounded-full hover:bg-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverHeroSection;
