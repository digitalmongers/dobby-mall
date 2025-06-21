// // // components/FooterSection.tsx
// // import Image from 'next/image';

// // export default function FooterSection() {
// //   return (
// //     <div className="bg-white text-gray-800">
// //       {/* Upcoming Events Section */}
// //       <section className="relative bg-white py-12">
// //         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center">
// //           <div className="space-y-4">
// //             <h2 className="text-xl font-semibold">Upcoming Events</h2>
// //             <p className="text-sm max-w-md">
// //               Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin
// //             </p>
// //             <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
// //               Partner with us
// //             </button>
// //           </div>
// //           <div className="hidden md:flex justify-end">
// //             <Image src="/images/kid.png" alt="Event" width={200} height={200} className="object-contain" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Blue Footer */}
// //       <footer className="bg-[#2474E5] text-white pt-10">
// //         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
// //           <div>
// //             <div className="bg-gray-800 text-white font-bold text-lg inline-block px-4 py-1 mb-4">DOBBY</div>
// //           </div>
// //           <div>
// //             <h3 className="font-semibold mb-2">Company</h3>
// //             <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin</p>
// //           </div>
// //           <div>
// //             <h3 className="font-semibold mb-2">Support</h3>
// //             <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin</p>
// //           </div>
// //           <div>
// //             <h3 className="font-semibold mb-2">Legal</h3>
// //             <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin</p>
// //           </div>
// //         </div>

// //         {/* Newsletter & WhatsApp */}
// //         <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-center">
// //           <div className="flex items-center gap-2">
// //             <Image src="/images/ssl-icon.png" alt="SSL" width={30} height={30} />
// //             <Image src="/images/payment-icon.png" alt="Payments" width={40} height={30} />
// //           </div>

// //           <div className="flex items-center mt-6 md:mt-0">
// //             <span className="mr-4 font-semibold text-white">Newsletter</span>
// //             <input
// //               type="text"
// //               placeholder="Newsletter"
// //               className="px-3 py-2 rounded-l text-sm outline-none"
// //             />
// //             <button className="bg-white text-blue-600 px-4 py-2 rounded-r text-sm font-semibold">Subscribe</button>
// //             <div className="ml-4">
// //               <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={35} height={35} />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Footer */}
// //         <div className="bg-white text-gray-700 mt-10 pt-8 pb-12 px-4 border-t">
// //           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
// //             <div>
// //               <h4 className="font-semibold mb-2">About Covers and All</h4>
// //               <p>We provide high quality custom-made cover solutions...</p>
// //             </div>
// //             <div>
// //               <h4 className="font-semibold mb-2">Company Information</h4>
// //               <ul className="space-y-1">
// //                 <li>About Us</li>
// //                 <li>Commercial Sales</li>
// //                 <li>Shipping Policy</li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h4 className="font-semibold mb-2">Contact</h4>
// //               <p><strong>Location:</strong> Suwanee, GA 30024, USA</p>
// //               <p><strong>Phone:</strong> 9999999999</p>
// //               <p><strong>Email:</strong> <a href="mailto:dobby@dobby.com" className="text-blue-500">dobby@dobby.com</a></p>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// import Image from 'next/image';

// export default function FooterSection() {
//   return (
//     <div className="bg-white text-gray-800">

//       {/* Upcoming Events */}
//       <section className="bg-white py-12">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
//           {/* Left Image */}
//           <div className="flex justify-center">
//             <Image
//               src="/images/book.png" // Update with your left image
//               alt="Left"
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>

//           {/* Center Content */}
//           <div className="text-center space-y-4">
//             <h2 className="text-xl font-semibold">Upcoming Events</h2>
//             <p className="text-sm max-w-md mx-auto">
//               Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin
//             </p>
//             <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
//               Partner with us
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center">
//             <Image
//               src="/images/boy.png" // Update with your right image
//               alt="Right"
//               width={200}
//               height={200}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#2474E5] text-white pt-10">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <div className="bg-gray-800 text-white font-bold text-lg inline-block px-4 py-1 mb-4">DOBBY</div>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Company</h3>
//             <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin</p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Support</h3>
//             <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin</p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Legal</h3>
//             <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin</p>
//           </div>
//         </div>

//         {/* Newsletter + WhatsApp */}
//         <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center gap-2">
//             <Image src="/images/ssl-icon.png" alt="SSL" width={30} height={30} />
//             <Image src="/images/payment-icon.png" alt="Payments" width={40} height={30} />
//           </div>

//           <div className="flex items-center mt-6 md:mt-0">
//             <span className="mr-4 font-semibold text-white">Newsletter</span>
//             <input
//               type="text"
//               placeholder="Newsletter"
//               className="px-3 py-2 rounded-l text-sm outline-none"
//             />
//             <button className="bg-white text-blue-600 px-4 py-2 rounded-r text-sm font-semibold">Subscribe</button>
//             <div className="ml-4">
//               <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={35} height={35} />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="bg-white text-gray-700 mt-10 pt-8 pb-12 px-4 border-t">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
//             <div>
//               <h4 className="font-semibold mb-2">About Covers and All</h4>
//               <p>We provide high quality custom-made cover solutions with a wide range of UV-resistant fabrics for outdoor use...</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2">Company Information</h4>
//               <ul className="space-y-1">
//                 <li>About Us</li>
//                 <li>Commercial Sales</li>
//                 <li>Shipping Policy</li>
//                 <li>Privacy Policy</li>
//                 <li>COVID-19 Measures</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2">Contact</h4>
//               <p><strong>Location:</strong> Suwanee, GA 30024, USA</p>
//               <p><strong>Phone:</strong> 9999999999</p>
//               <p><strong>Email:</strong> <a href="mailto:dobby@dobby.com" className="text-blue-500">dobby@dobby.com</a></p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// components/EventsAndFooter.tsx
// import Image from 'next/image';

// export default function EventsAndFooter() {
//   return (
//     <div className="bg-white text-gray-800">

//       {/* Upcoming Events with Full Background */}
//       <section className="relative bg-white">
//         <div className="relative w-full h-[350px] md:h-[400px]">
//           {/* Background Image */}
//           <Image
//             src="/images/book.png" // make sure this exists in /public/images
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             className="z-0"
//           />

//           {/* Overlay Content */}
//           <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-center z-10">
//             {/* Boy Image */}
//             <div className="mb-6 md:mb-0 md:mr-6">
//               <Image
//                 src="/images/boy.png" // make sure this exists in /public/images
//                 alt="Kid"
//                 width={180}
//                 height={180}
//                 className="object-contain"
//               />
//             </div>

//             {/* Text and Button */}
//             <div className="bg-white/80 p-6 rounded shadow max-w-md">
//               <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
//               <p className="text-sm text-gray-700 mb-4">
//                 Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin
//               </p>
//               <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
//                 Partner with us
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#2474E5] text-white pt-10">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <div className="bg-gray-800 text-white font-bold text-lg inline-block px-4 py-1 mb-4">DOBBY</div>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Company</h3>
//             <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin</p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Support</h3>
//             <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin</p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Legal</h3>
//             <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin</p>
//           </div>
//         </div>

//         {/* Newsletter + WhatsApp */}
//         <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center gap-2">
//             <Image src="/images/ssl-icon.png" alt="SSL" width={30} height={30} />
//             <Image src="/images/payment-icon.png" alt="Payments" width={40} height={30} />
//           </div>

//           <div className="flex items-center mt-6 md:mt-0">
//             <span className="mr-4 font-semibold text-white">Newsletter</span>
//             <input
//               type="text"
//               placeholder="Newsletter"
//               className="px-3 py-2 rounded-l text-sm outline-none"
//             />
//             <button className="bg-white text-blue-600 px-4 py-2 rounded-r text-sm font-semibold">Subscribe</button>
//             <div className="ml-4">
//               <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={35} height={35} />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="bg-white text-gray-700 mt-10 pt-8 pb-12 px-4 border-t">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
//             <div>
//               <h4 className="font-semibold mb-2">About Covers and All</h4>
//               <p>We provide high quality custom-made cover solutions with a wide range of UV-resistant fabrics for outdoor use...</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2">Company Information</h4>
//               <ul className="space-y-1">
//                 <li>About Us</li>
//                 <li>Commercial Sales</li>
//                 <li>Shipping Policy</li>
//                 <li>Privacy Policy</li>
//                 <li>COVID-19 Measures</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2">Contact</h4>
//               <p><strong>Location:</strong> Suwanee, GA 30024, USA</p>
//               <p><strong>Phone:</strong> 9999999999</p>
//               <p><strong>Email:</strong> <a href="mailto:dobby@dobby.com" className="text-blue-500">dobby@dobby.com</a></p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



// components/EventsAndFooter.tsx
import Image from 'next/image';

export default function EventsAndFooter() {
  return (
    <div className="bg-white text-gray-800">

      {/* 📚 Upcoming Events with Layered Images */}
      <section className="relative w-full h-[400px]">
        {/* Full Background - Book Image */}
        <Image
          src="/images/book.png"
          alt="Background Book"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Center Text & Button */}
        <div className="absolute inset-0 z-20 flex items-center justify-center ">
          <div className="bg-[#D9D9D9] p-6 rounded shadow text-center max-w-md">
            <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
            <p className="text-sm text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl. Tortor mi proin
            </p>
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
              Partner with us
            </button>
          </div>
        </div>

        {/* Right Overlay Book Image */}
        <div className="absolute w-[340px]  h-[400px] bottom-0 left-295 z-10">
          <Image
            src="/images/book.png"
            alt="Overlay Book"
            layout="fill"
            className=" scale-x-[-1]"
          />
        </div>

        {/* Boy Image on Top of Right Book */}
        <div className="absolute bottom-0 right-16 h-[380px] left-230  z-20">
          <Image
            src="/images/boy.png"
            alt="Boy"
           layout="fill"
            className="object-contain"
          />
        </div>
      </section>

      {/* 👣 Footer Below — Reuse previous footer or insert yours here */}
      {/* You can reuse the footer code from previous responses here below this section */}
    </div>
  );
}

