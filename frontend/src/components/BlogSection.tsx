'use client';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    image: '/images/blog1.png',
    date: 'Mar 20, 2025',
    title: '24 Heartwarming Memorial Day Activities to Bond with Family',
    text: "I’m very impressed with the quality of both workmanship & materials.",
  },
  {
    id: 2,
    image: '/images/blog2.png',
    date: 'Mar 20, 2025',
    title: '24 Heartwarming Memorial Day Activities to Bond with Family',
    text: "I’m very impressed with the quality of both workmanship & materials.",
  },
  {
    id: 3,
    image: '/images/blog3.png',
    date: 'Mar 20, 2025',
    title: '24 Heartwarming Memorial Day Activities to Bond with Family',
    text: "I’m very impressed with the quality of both workmanship & materials.",
  },
  {
    id: 4,
    image: '/images/blog4.png',
    date: 'Mar 20, 2025',
    title: '24 Heartwarming Memorial Day Activities to Bond with Family',
    text: "I’m very impressed with the quality of both workmanship & materials.",
  },
];

export default function BlogSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#003056] mb-10 font-[poppins]">
          Inspiration and news
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 sm:h-52 md:h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 text-left flex-1 flex flex-col">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-md font-semibold text-gray-800 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {post.text}
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View more →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="px-5 py-2 border border-[#2C71DE] text-[#2C71DE] rounded-md hover:bg-blue-50 text-sm font-[poppins] font-medium">
            View all blogs & news
          </button>
        </div>
      </div>
    </section>
  );
}
