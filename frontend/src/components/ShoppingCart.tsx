import React, { useState } from 'react';

const ShoppingCart = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="bg-[#F1F6FE] p-6 mt-10 font-[Poppins]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-[20px] text-[#003056] mb-6 tracking-tight">
          Products added in your cart
        </h1>

        {/* Cart Items Container */}
        <div className="flex items-center justify-evenly gap-2 flex-wrap lg:flex-nowrap">

          {/* First Product */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 w-full max-w-[260px]" style={{ height: "144px", width: "328px"}}>
            <div className="flex items-center gap-3">
              <div className="w-24 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src="/images/patio-chair.png"
                  alt="Patio Chair"
                  className="w-full h-16 object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[#003056] text-xs mb-1 text-lg text-[12px]">
                  Modern Patio Lounge Grey Chair
                </h3>
                <div className="text-blue-600 text-sm font-bold leading-tight">
                  $51.60 <span className="text-gray-400 text-xs line-through">$115</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plus Icon */}
          <div className="text-gray-400 text-3xl font-light">
            <img src="/images/Plus Math.png" className='h-6 w-6' />
          </div>

          {/* Second Product */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 w-full max-w-[260px]" style={{ height: "144px", width: "328px"}}>
            <div className="flex items-center gap-3">
              <div className="w-24 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src="/images/patio-chair.png"
                  alt="Patio Chair"
                  className="w-full h-16 object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[#003056] text-xs mb-1">
                  Modern Patio Lounge Grey Chair
                </h3>
                <div className="text-blue-600 text-sm font-bold leading-tight">
                  $51.60 <span className="text-gray-400 text-xs line-through">$115</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plus Icon */}
          <div className="text-gray-400 text-3xl font-light">
            <img src="/images/Plus Math.png" className='h-6 w-6' />
          </div>

          {/* Assurance Plus */}
          <div
  className="bg-white rounded-xl p-4 shadow-xl border border-2 w-full max-w-[400px]"
  style={{ height: "144px", width: "400px" }}
>
  <div className="flex h-full">
    {/* Image on the left */}
    <div className="w-20 h-20 mr-4 flex items-center justify-center">
      <img
        src="/images/group.png"
        alt="Assurance Plus"
        className="w-full h-full object-contain rounded"
      />
    </div>

    {/* Text and checkbox on the right */}
    <div className="flex-1 flex flex-col justify-between">
      {/* Top row: Checkbox on top-right */}
      <div className="flex justify-between items-start mb-1">
        <span className="text-[10px] text-[#003056] ml-25">Add this too</span>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="w-3.5 h-3.5 text-[#2867D9] border-gray-300 rounded focus:[#2867D9]"
        />
      </div>

      {/* Main content */}
      <div className="space-y-1 ml-5">
        <h3 className="text-[#003056] text-xs">3 Years</h3>
        <h3 className="text-[#003056] text-xs">Assurance Plus</h3>
      </div>

      {/* Pricing */}
      <div className="mt-2 ml-5">
        <div className="text-[#2867D9] font-semibold text-sm leading-tight text-[12px]">$51.60</div>
      </div>
    </div>
  </div>
</div>


          {/* Equals Icon */}
          <div className="text-gray-400 text-3xl font-light">
            <img src="/images/Equal Sign.png" style={{width: "30px", height: "35px"}} />
          </div>

          {/* Cart Summary */}
          <div className="bg-[#F1F6FE] p-4 w-full max-w-[220px] mt-2 text-right">
            <div className="mb-2 ">
              <div className="text-xs text-[#003056] mb-1">
                Added in Cart: Mar 22nd 2025
              </div>
              <div className="text-xs text-[#003056] mb-3">
                2 items ($153.98) + $51.60*
              </div>

              <button
                className="bg-[#0075FF] hover:bg-blue-700 text-white text-sm font-medium rounded-md mb-3 w-[160px] h-[35px] flex items-center justify-center"
              >
                Proceed to Cart
              </button>

              <div className="flex items-center justify-end gap-2">
                <span
                  className="bg-[#83B72B] text-white text-[10px] px-2 py-0.5 rounded text-center"
                  style={{ minWidth: "80px", height: "20px" }}
                >
                  Best Offer
                </span>
                <span className="text-[#003056] text-xs font-bold">
                  15% OFF Applied
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;


// "use client"

// import { useState } from "react"

// const ShoppingCart = () => {
//   const [isChecked, setIsChecked] = useState(true)

//   return (
//     <div className=" p-4 font-[Poppins]">
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//         <h1 className="text-center text-xl text-[#003056] mb-4 font-medium">Products added in your cart</h1>

//         {/* Horizontal Cart Layout */}
//         <div className="bg-white rounded-lg p-4 shadow-sm">
//           <div className="flex items-center justify-between gap-4 overflow-x-auto">
//             {/* First Product */}
//             <div className="flex items-center gap-3 min-w-[200px]">
//               <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <img
//                   src="/images/patio-chair.png"
//                   alt="Patio Chair"
//                   className="w-14 h-14 object-cover rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-800 text-sm mb-1">Modern Patio Lounge Grey Chair</h3>
//                 <div className="flex items-center gap-2">
//                   <span className="text-blue-600 font-semibold text-lg">$51.60</span>
//                   <span className="text-gray-400 text-sm line-through">$115</span>
//                 </div>
//               </div>
//             </div>

//             {/* Plus Icon */}
//             <div className="text-gray-400 text-2xl font-light flex-shrink-0">+</div>

//             {/* Second Product */}
//             <div className="flex items-center gap-3 min-w-[200px]">
//               <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <img
//                   src="/images/patio-chair.png"
//                   alt="Patio Chair"
//                   className="w-14 h-14 object-cover rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="font-medium text-gray-800 text-sm mb-1">Modern Patio Lounge Grey Chair</h3>
//                 <div className="flex items-center gap-2">
//                   <span className="text-blue-600 font-semibold text-lg">$51.60</span>
//                   <span className="text-gray-400 text-sm line-through">$115</span>
//                 </div>
//               </div>
//             </div>

//             {/* Plus Icon */}
//             <div className="text-gray-400 text-2xl font-light flex-shrink-0">+</div>

//             {/* Assurance Plus */}
//             <div className="min-w-[200px]">
//               <div className="flex items-center gap-2 mb-2">
//                 <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={(e) => setIsChecked(e.target.checked)}
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <span className="text-sm text-gray-600">Add this too</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <div className="w-8 h-8 rounded-full flex items-center justify-center">
//                     <img src='/images/group.png' />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-800 text-sm mb-1">3 Years Assurance Plus</h3>
//                   <div className="text-blue-600 font-semibold text-lg">$51.60</div>
//                 </div>
//               </div>
//             </div>

//             {/* Equals Icon */}
//             <div className="text-gray-400 text-2xl font-light flex-shrink-0">=</div>

//             {/* Cart Summary */}
//             <div className="min-w-[250px] text-right">
//               <div className="text-sm text-gray-500 mb-1">Added in Cart: Mar 22nd 2025</div>
//               <div className="text-sm text-gray-600 mb-3">2 items ($103.20) + $51.60*</div>

//               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 mb-3 text-sm">
//                 Proceed to Cart
//               </button>

//               <div className="flex items-center justify-end gap-2">
//                 <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">Best Offer</span>
//                 <span className="text-green-600 font-semibold text-sm">15% OFF</span>
//                 <span className="text-gray-500 text-xs">Applied</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ShoppingCart
