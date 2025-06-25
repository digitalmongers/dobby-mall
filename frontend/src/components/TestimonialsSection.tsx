// // components/TestimonialsSection.tsx
// import Image from 'next/image';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Sam',
//     title: 'CEO',
//     text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl...',
//     image: '/images/test1.png',
//   },
//   {
//     id: 2,
//     name: 'Sam',
//     title: 'CEO',
//     text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl...',
//     image: '/images/test2.png',
//   },
//   {
//     id: 3,
//     name: 'Sam',
//     title: 'CEO',
//     text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl...',
//     image: '/images/test3.png',
//   },
//   {
//     id: 4,
//     name: 'Sam',
//     title: 'CEO',
//     text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl...',
//     image: '/images/test4.png',
//   },
// ];

// const logos = [
//   '/images/pepsi.png',
//   '/images/nike.png',
//   '/images/lg.png',
//   '/images/chicken.png',
//   '/images/oz.png',
//   '/images/burger.png',
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="px-4 py-14 bg-white text-center">
//       <h2 className="text-2xl font-semibold mb-10">Testimonials</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {testimonials.map((t) => (
//           <div key={t.id} className="bg-white p-6 border rounded-lg shadow-sm">
//             <Image
//               src={t.image}
//               alt={t.name}
//               width={80}
//               height={80}
//               className="rounded-full mx-auto mb-4"
//             />
//             <h3 className="text-md font-semibold">{t.name}</h3>
//             <p className="text-sm text-gray-500 mb-4">{t.title}</p>
//             <p className="text-sm text-gray-600">{t.text}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-16">
//         <h3 className="text-xl font-semibold mb-6">Trusted by</h3>
//         <div className="flex flex-wrap justify-center items-center gap-6">
//           {logos.map((logo, idx) => (
//             <div key={idx} className="h-29 w-50 relative">
//               <Image src={logo} alt={`Logo ${idx}`} layout="fill" objectFit="contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
 const testimonials = [
  {
    id: 1,
    name: 'Sam',
    title: 'CEO',
    text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl...',
    image: '/images/test1.png',
  },
  {
    id: 2,
    name: 'Sam',
    title: 'CEO',
    text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl...',
    image: '/images/test2.png',
  },
  {
    id: 3,
    name: 'Sam',
    title: 'CEO',
    text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl...',
    image: '/images/test3.png',
  },
  {
    id: 4,
    name: 'Sam',
    title: 'CEO',
    text: 'Lorem ipsum dolor sit amet consectetur. Sed in pellentesque vel enim in venenatis eleifend nisl...',
    image: '/images/test4.png',
  },
];

const logos = [
  '/images/pepsi.png',
  '/images/nike.png',
  '/images/lg.png',
  '/images/chicken.png',
  '/images/oz.png',
  '/images/burger.png',
];

  return (
    <section className="px-4 py-14 bg-white text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Testimonials
      </h2>
      
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="relative ">
            {/* Profile Image - Positioned above the card */}
           
              <div className="absolute -top-14 left-12 w-28 h-28  rounded-full overflow-hidden border-4 border-white shadow-lg">
                 <div className="flex justify-center mb-4 ">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Card Content */}
            <div className="bg-white rounded-lg p-6 pt-8 mx-6 shadow-sm border border-gray-300 w-84 h-96 ">
              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="font-semibold text-gray-900 text-lg -mt-6 ml-20 ">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm -mt-1 ml-20 ">{testimonial.title}</p>
                <p className="text-sm text-gray-600 ">{testimonial.text}</p>
              </div>
              
              {/* Content */}
          
            </div>
          </div>
        ))}
      </div>
         <div className="mt-16">
         <h3 className="text-xl font-semibold mb-6">Trusted by</h3>
         <div className="flex flex-wrap justify-center items-center gap-6">
           {logos.map((logo, idx) => (
             <div key={idx} className="h-29 w-50 relative">
               <Image src={logo} alt={`Logo ${idx}`} layout="fill" objectFit="contain" />
             </div>
           ))}
         </div>
       </div> 
    </section>
  );
};

export default TestimonialsSection;