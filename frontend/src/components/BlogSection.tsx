import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    image: '/images/blog1.png', // replace with your actual image paths
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
    <section className="px-4 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Inspiration and news</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.text}</p>
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
          <button className="px-5 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 text-sm font-medium">
            View all blogs & news
          </button>
        </div>
      </div>
    </section>
  );
}
