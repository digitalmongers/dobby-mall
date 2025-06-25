import React from 'react';

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Custom Covers",
      image: "/images/product1.png"
    },
    {
      id: 2,
      title: "Cushion Covers",
      image: "/images/product2.png"
    },
    {
      id: 3,
      title: "Grill Covers",
      image: "/images/product3.png"
    },
    {
      id: 4,
      title: "Patio Furniture Covers",
      image: "/images/product4.png"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-semibold text-blue-900 mb-12 tracking-tight">
          Explore Our Best-Selling Product Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Blue gradient bar at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              </div>

              {/* Category Title */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;