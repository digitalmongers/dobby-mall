'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ShoppingCart, Plus } from 'lucide-react'

const Homepage = () => {
  // State for different swipers
  const [heroSlide, setHeroSlide] = useState(0)
  const [productSlide, setProductSlide] = useState(0)
  const [categorySlide, setCategorySlide] = useState(0)
  const [cartSlide, setCartSlide] = useState(0)

  // Hero slides data
  const heroSlides = [
    {
      title: "Uncover Offer",
      subtitle: "Covering all shape and size",
      buttonText: "Shop All Covers",
      image: "/images/offer.png"
    },
    {
      title: "Premium Quality",
      subtitle: "Best materials for lasting protection",
      buttonText: "Explore Now",
      image: "/images/bliss.png"
    },
    {
      title: "Custom Fit",
      subtitle: "Perfect fit for every furniture",
      buttonText: "Get Started",
      image: "/images/convienience.png"
    },
    {
      title: "Free Shipping",
      subtitle: "On orders above $50",
      buttonText: "Order Now",
      image: "/images/happiness.png"
    }
  ]

  // Product categories data
  const categories = [
    {
      name: "Custom Covers",
      image: "🛋️",
      description: "Tailored to your furniture"
    },
    {
      name: "Cushion Covers",
      image: "🪑",
      description: "Comfortable and stylish"
    },
    {
      name: "Grill Covers",
      image: "🔥",
      description: "Weather resistant protection"
    },
    {
      name: "Patio Furniture Covers",
      image: "🌿",
      description: "Outdoor furniture protection"
    },
    {
      name: "Sofa Covers",
      image: "🛏️",
      description: "Living room essentials"
    },
    {
      name: "Chair Covers",
      image: "💺",
      description: "Dining room protection"
    }
  ]

  // Cart products data
  const cartProducts = [
    {
      name: "Perfect Patio Loveseat",
      price: "$31.60",
      image: "/images/GroupA.png",
      originalPrice: "$40.00"
    },
    {
      name: "Perfect Patio Loveseat",
      price: "$31.60",
      image: "/images/GroupB.png",
      originalPrice: "$40.00"
    },
    {
      name: "Custom Patio Set",
      price: "$51.80",
      image: "/images/GroupC.png",
      originalPrice: "$65.00"
    },
    {
      name: "Custom Patio Set",
      price: "$51.80",
      image: "/images/GroupD.png",
      originalPrice: "$65.00"
    }
  ]

  // Featured products data
  const featuredProducts = [
    {
      name: "Premium Outdoor Sofa",
      price: "$89.99",
      image: "/images/happiness.png",
      category: "Patio Furniture"
    },
    {
      name: "Weather Shield Cover",
      price: "$45.99",
      image: "/images/bliss.png",
      category: "Protective Covers"
    },
    {
      name: "Luxury Cushion Set",
      price: "$67.99",
      image: "/images/convienience.png",
      category: "Cushions"
    },
    {
      name: "Grill Master Cover",
      price: "$34.99",
      image: "/images/offer.png",
      category: "Grill Covers"
    }
  ]

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % heroSlides.length)
      setProductSlide(prev => (prev + 1) % featuredProducts.length)
      setCategorySlide(prev => (prev + 1) % Math.ceil(categories.length / 4))
      setCartSlide(prev => (prev + 1) % cartProducts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  type SliderType = 'hero' | 'product' | 'category' | 'cart'

  const nextSlide = (type: SliderType) => {
    switch(type) {
      case 'hero':
        setHeroSlide(prev => (prev + 1) % heroSlides.length)
        break
      case 'product':
        setProductSlide(prev => (prev + 1) % featuredProducts.length)
        break
      case 'category':
        setCategorySlide(prev => (prev + 1) % Math.ceil(categories.length / 4))
        break
      case 'cart':
        setCartSlide(prev => (prev + 1) % cartProducts.length)
        break
    }
  }

  const prevSlide = (type: SliderType) => {
    switch(type) {
      case 'hero':
        setHeroSlide(prev => prev === 0 ? heroSlides.length - 1 : prev - 1)
        break
      case 'product':
        setProductSlide(prev => prev === 0 ? featuredProducts.length - 1 : prev - 1)
        break
      case 'category':
        setCategorySlide(prev => prev === 0 ? Math.ceil(categories.length / 4) - 1 : prev - 1)
        break
      case 'cart':
        setCartSlide(prev => prev === 0 ? cartProducts.length - 1 : prev - 1)
        break
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Swiper 1 */}
     <div className="relative h-[600px] bg-gradient-to-r from-gray-800 to-gray-600 overflow-hidden">
  <div className="mb-4">
    {heroSlides[heroSlide].image.endsWith(".png") ? (
      <img
        src={heroSlides[heroSlide].image}
        alt={heroSlides[heroSlide].title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    ) : (
      <div className="text-6xl">{heroSlides[heroSlide].image}</div>
    )}
  </div>

  {/* Hero Navigation */}
  <button 
    onClick={() => prevSlide('hero')}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full"
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>
  <button 
    onClick={() => nextSlide('hero')}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full"
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </button>

  {/* Hero Dots */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {heroSlides.map((_, index) => (
      <button
        key={index}
        onClick={() => setHeroSlide(index)}
        className={`w-3 h-3 rounded-full ${
          index === heroSlide ? 'bg-white' : 'bg-white/50'
        }`}
      />
    ))}
  </div>
</div>


      {/* Cart Products Section with Swiper 2 */}
      <div className="py-8 px-4"  style={{
    backgroundColor: '#F1F6FE',
    width: '1440px',
    height: '2^9px',
    marginTop: '92px',
  }}>
        <h2 className="text-2xl font-bold text-center mb-6">Products added in your cart</h2>
        <div className="relative max-w-4xl mx-auto">
         <div className="flex items-center justify-center space-x-4">
  {cartProducts.slice(0, 3).map((product, index, arr) => (
    <div key={index} className="flex items-center space-x-4">
      <div className="bg-gray-50 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.name}
          className="h-32 mx-auto object-contain mb-2"
        />
      </div>

      {/* Only show the Plus icon if it's not the last item */}
      {index < arr.length - 1 && (
        <Plus className="w-6 h-6 text-gray-400" />
      )}
    </div>
  ))}

  {/* Equal sign and final result box */}
  <span className="text-2xl font-bold">=</span>
  <div className=" p-4 w-48 text-center ">
   
     <img
    src="/images/GroupD.png"
    alt="Summary"
    className="mx-auto h-24 object-contain"
  />
  </div>
</div>

          
          {/* Cart Navigation */}
          <button 
            onClick={() => prevSlide('cart')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => nextSlide('cart')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Categories Section with Swiper 3 */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Best-Selling Product Categories</h2>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {categories.slice(categorySlide * 4, (categorySlide * 4) + 4).map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="text-6xl">{category.image}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                  <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
                    View Products
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Categories Navigation */}
          <button 
            onClick={() => prevSlide('category')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => nextSlide('category')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Featured Products Section with Swiper 4 */}
      
    </div>
  )
}

export default Homepage