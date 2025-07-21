'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCategories from './ProductCategories'
import ShoppingCart from './ShoppingCart'

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
    <ShoppingCart/>


      {/* Product Categories Section with Swiper 3 */}
    <ProductCategories/>

      {/* Featured Products Section with Swiper 4 */}
      
    </div>
  )
}

export default Homepage


// 'use client'

// import { useState, useEffect } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import ProductCategories from './ProductCategories'
// import ShoppingCart from './ShoppingCart'

// const Homepage = () => {
//   const [heroSlide, setHeroSlide] = useState(0)
//   const [productSlide, setProductSlide] = useState(0)
//   const [categorySlide, setCategorySlide] = useState(0)
//   const [cartSlide, setCartSlide] = useState(0)

//   const heroSlides = [
//     {
//       title: "Uncover Offer",
//       subtitle: "Covering all shape and size",
//       buttonText: "Shop All Covers",
//       image: "/images/offer.png"
//     },
//     {
//       title: "Premium Quality",
//       subtitle: "Best materials for lasting protection",
//       buttonText: "Explore Now",
//       image: "/images/bliss.png"
//     },
//     {
//       title: "Custom Fit",
//       subtitle: "Perfect fit for every furniture",
//       buttonText: "Get Started",
//       image: "/images/convienience.png"
//     },
//     {
//       title: "Free Shipping",
//       subtitle: "On orders above $50",
//       buttonText: "Order Now",
//       image: "/images/happiness.png"
//     }
//   ]

//   const categories = [
//     { name: "Custom Covers", image: "🛋️", description: "Tailored to your furniture" },
//     { name: "Cushion Covers", image: "🪑", description: "Comfortable and stylish" },
//     { name: "Grill Covers", image: "🔥", description: "Weather resistant protection" },
//     { name: "Patio Furniture Covers", image: "🌿", description: "Outdoor furniture protection" },
//     { name: "Sofa Covers", image: "🛏️", description: "Living room essentials" },
//     { name: "Chair Covers", image: "💺", description: "Dining room protection" }
//   ]

//   const cartProducts = [
//     { name: "Perfect Patio Loveseat", price: "$31.60", image: "/images/GroupA.png", originalPrice: "$40.00" },
//     { name: "Perfect Patio Loveseat", price: "$31.60", image: "/images/GroupB.png", originalPrice: "$40.00" },
//     { name: "Custom Patio Set", price: "$51.80", image: "/images/GroupC.png", originalPrice: "$65.00" },
//     { name: "Custom Patio Set", price: "$51.80", image: "/images/GroupD.png", originalPrice: "$65.00" }
//   ]

//   const featuredProducts = [
//     { name: "Premium Outdoor Sofa", price: "$89.99", image: "/images/happiness.png", category: "Patio Furniture" },
//     { name: "Weather Shield Cover", price: "$45.99", image: "/images/bliss.png", category: "Protective Covers" },
//     { name: "Luxury Cushion Set", price: "$67.99", image: "/images/convienience.png", category: "Cushions" },
//     { name: "Grill Master Cover", price: "$34.99", image: "/images/offer.png", category: "Grill Covers" }
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHeroSlide(prev => (prev + 1) % heroSlides.length)
//       setProductSlide(prev => (prev + 1) % featuredProducts.length)
//       setCategorySlide(prev => (prev + 1) % Math.ceil(categories.length / 4))
//       setCartSlide(prev => (prev + 1) % cartProducts.length)
//     }, 4000)

//     return () => clearInterval(interval)
//   }, [])

//   type SliderType = 'hero' | 'product' | 'category' | 'cart'

//   const nextSlide = (type: SliderType) => {
//     switch (type) {
//       case 'hero':
//         setHeroSlide(prev => (prev + 1) % heroSlides.length)
//         break
//       case 'product':
//         setProductSlide(prev => (prev + 1) % featuredProducts.length)
//         break
//       case 'category':
//         setCategorySlide(prev => (prev + 1) % Math.ceil(categories.length / 4))
//         break
//       case 'cart':
//         setCartSlide(prev => (prev + 1) % cartProducts.length)
//         break
//     }
//   }

//   const prevSlide = (type: SliderType) => {
//     switch (type) {
//       case 'hero':
//         setHeroSlide(prev => prev === 0 ? heroSlides.length - 1 : prev - 1)
//         break
//       case 'product':
//         setProductSlide(prev => prev === 0 ? featuredProducts.length - 1 : prev - 1)
//         break
//       case 'category':
//         setCategorySlide(prev => prev === 0 ? Math.ceil(categories.length / 4) - 1 : prev - 1)
//         break
//       case 'cart':
//         setCartSlide(prev => prev === 0 ? cartProducts.length - 1 : prev - 1)
//         break
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section with Swiper 1 */}
//       <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-gray-800 to-gray-600 overflow-hidden">
//         <div className="mb-4">
//           {heroSlides[heroSlide].image.endsWith(".png") ? (
//             <img
//               src={heroSlides[heroSlide].image}
//               alt={heroSlides[heroSlide].title}
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//           ) : (
//             <div className="text-4xl sm:text-5xl md:text-6xl">{heroSlides[heroSlide].image}</div>
//           )}
//         </div>

//         {/* Hero Navigation */}
//         <button
//           onClick={() => prevSlide('hero')}
//           className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-1 sm:p-2 rounded-full"
//         >
//           <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
//         </button>
//         <button
//           onClick={() => nextSlide('hero')}
//           className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-1 sm:p-2 rounded-full"
//         >
//           <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
//         </button>

//         {/* Hero Dots */}
//         <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setHeroSlide(index)}
//               className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === heroSlide ? 'bg-white' : 'bg-white/50'}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Cart Products Section with Swiper 2 */}
//       <ShoppingCart />

//       {/* Product Categories Section with Swiper 3 */}
//       <ProductCategories />

//       {/* Featured Products Section with Swiper 4 */}
//     </div>
//   )
// }

// export default Homepage
