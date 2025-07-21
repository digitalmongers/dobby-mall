import React, { useState } from 'react';

const ShoppingCart = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="bg-[#F1F6FE] p-6 mt-18">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Products added in your cart
        </h2>

        {/* Cart Items Container */}
        <div className="flex items-center justify-center gap-4 flex-wrap lg:flex-nowrap">
          
          {/* First Product */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full max-w-sm">
            <div className="flex items-center gap-4">
              <div className="w-30 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <img 
                  src="/images/patio-chair.png" 
                  alt="Patio Chair"
                  className="w-50 h-16 object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm mb-1">
                  Modern Patio Lounge Grey Chair
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-semibold text-lg">$51.60</span>
                  <span className="text-gray-400 text-sm line-through">$115</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plus Icon */}
          <div className="text-gray-400 text-3xl font-light">+</div>

          {/* Second Product */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full max-w-sm">
            <div className="flex items-center gap-4">
              <div className="w-30 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <img 
                  src="/images/patio-chair.png" 
                  alt="Patio Chair"
                  className="w-50 h-16 object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm mb-1">
                  Modern Patio Lounge Grey Chair
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-semibold text-lg">$51.60</span>
                  <span className="text-gray-400 text-sm line-through">$115</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plus Icon */}
          <div className="text-gray-400 text-3xl font-light">+</div>

          {/* Assurance Plus */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full max-w-sm">
            <div className="flex items-start gap-4">
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">Add this too</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20  rounded-lg flex items-center justify-center">
                <img 
                  src="/images/group.png" 
                  alt="Assurance Plus"
                  className="w-16 h-16 object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm mb-1">
                  3 Years Assurance Plus
                </h3>
                <div className="text-blue-600 font-semibold text-lg">$51.60</div>
              </div>
            </div>
          </div>

          {/* Equals Icon */}
          <div className="text-gray-400 text-3xl font-light">=</div>

          {/* Cart Summary */}
          <div className="bg-[#F1F6FE]  p-6   w-full h-full ">
            <div className="text-right mb-4">
              <div className="text-sm text-gray-500 mb-1">Added in Cart: Mar 22nd 2025</div>
              <div className="text-sm text-gray-600 mb-3">2 items ($153.98) + $51.60*</div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 mb-3">
                Proceed to Cart
              </button>
              
              <div className="flex items-center justify-end gap-2">
                <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                  Best Offer
                </span>
                <span className="text-green-600 font-semibold">15% OFF</span>
                <span className="text-gray-500 text-sm">Applied</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
