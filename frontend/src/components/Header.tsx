// "use client";
// import React, { useState }  from 'react';
// import { Search  , ScanLine, Mic, ChevronDown, User, UserCheck, GraduationCap,X } from 'lucide-react';
// import PromoBanner from './PromoBanner';
// import StudentRegistration from './Student/StudentRegistration';
// import StudentSignIn from './Student/StudentSignIn';
 
// const Header = () => {
//  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
// const [showStudentModal, setShowStudentModal] = useState(false);
// const [isStudentSignInOpen, setIsStudentSignInOpen] = useState(false);
//   const handleMouseEnter = (dropdown: string) => {
//     setActiveDropdown(dropdown);
//   };

//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//   };

//   const handleOpenStudentModal = () => {
//   setShowStudentModal(true);
//   setActiveDropdown(null); // Close the dropdown when opening the modal
// };

// const handleStudentSignIn = () => {
//   setIsStudentSignInOpen(true);
//   setActiveDropdown(null); // Close the dropdown when opening the modal
// };

//   return (
//     <header className="w-full">
//  {showStudentModal && (
//       <div className="fixed inset-0 z-50 backdrop-blur-[2px] bg-transparent flex items-center justify-center p-4">
//         <StudentRegistration onClose={() => setShowStudentModal(false)} />
//       </div>
//     )}
//        {isStudentSignInOpen && (
//       <div className="fixed inset-0 z-50 backdrop-blur-[2px]w-full bg-transparent flex items-center justify-center p-4">
//         <div className=" rounded-lg shadow-xl w-full max-w-5xl">
//           <StudentSignIn onClose={() => setIsStudentSignInOpen(false)}/>
         
//         </div>
//       </div>
//     )}
 
  
//            {/* Promotional Banner */}
//        <div className="bg-red-600 text-black text-center py-2 font-asap font-bold text-[14px] leading-[100%] tracking-[0.02em]">
//    <div className="flex items-center justify-center">
//      <div className="flex items-center space-x-4">
//        <span className=" text-white px-2 py-1 rounded text-[14px] font-asap font-bold leading-[100%] tracking-[0.02em]">
//          Free Listing for first 100 Shopkeepers
//        </span>
//      </div>
//    </div>
//  </div>
//  <div className="w-[1520px] h-[50px] -mt-0.25 bg-[#302E2EDB] relative">
 
//      <PromoBanner/>
  
//  </div>
//       {/* Main Header */}
//       <div style={{backgroundColor: '#1a1f71'}} className="px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div style={{backgroundColor: '#666666'}} className="px-6 py-2 rounded">
//           <h1 className="text-white text-xl font-bold tracking-wider">DOBBY</h1>
//         </div>

     
//        {/* Search Bar */}
//         <div className="flex-1 max-w-2xl mx-8">
//           <div className="relative flex items-center bg-white rounded-md overflow-hidden">
//             <input
//               type="text"
//               placeholder="Search for Chair Cover"
//               className="flex-1 px-4 py-2.5 border-0 focus:outline-none text-gray-700 placeholder-gray-500 bg-white"
//             />
//             <button className="p-2.5 hover:bg-gray-50 border-r border-gray-300">
//                 <Search className="w-5 h-5 text-gray-600" />
//               </button>
//             <div className="flex items-center border-l border-gray-300">
              
//               <button className="p-2.5 hover:bg-gray-50 border-r border-gray-300">
//                 <ScanLine className="w-5 h-5 text-gray-600" />
//               </button>
//               <button className="p-2.5 hover:bg-gray-50">
//                 <Mic className="w-5 h-5 text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* User Controls */}
//         <div className="flex items-center space-x-2 mx-8 ">
//           {/* User Dropdown */}
//           <div className="relative" onMouseEnter={() => handleMouseEnter('user')} onMouseLeave={handleMouseLeave}>
//           <button className="flex items-center space-x-1 px-4 py-2 rounded-sm text-[#39FF14] font-medium hover:opacity-90 transition-opacity border border-[#39FF14]" style={{backgroundColor: '#1a1f71'}}>
//             <span className="text-base">User</span>
//             <ChevronDown className="w-3 h-3" />
//           </button>
//            {activeDropdown === 'user' && (
//               <div className="absolute top-full mt-1 left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                 <div className="py-2">
//                   <div className="flex items-center px-4 py-2 text-gray-700 border-b border-gray-100">
//                     <User className="w-4 h-4 mr-2" />
//                     <span className="font-medium">User</span>
//                     <ChevronDown className="w-4 h-4 ml-auto text-green-600" />
//                   </div>
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Sign up</a>
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Sign in</a>
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Shopkeeper Dropdown */}
//            <div className="relative" onMouseEnter={() => handleMouseEnter('shopkeeper')} onMouseLeave={handleMouseLeave}>
//           <button className="flex items-center space-x-1 px-4 py-2 rounded-sm text-[#39FF14] font-medium hover:opacity-90 transition-opacity border border-[#39FF14]" style={{backgroundColor: '#1a1f71'}} >
//             <span className="text-base">Shopkeeper</span>
//             <ChevronDown className="w-3 h-3" />
//           </button>
//           {activeDropdown === 'shopkeeper' && (
//               <div className="absolute top-full mt-1 left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                 <div className="py-2">
//                   <div className="flex items-center px-4 py-2 text-gray-700 border-b border-gray-100">
//                     <UserCheck className="w-4 h-4 mr-2" />
//                     <span className="font-medium">Shopkeeper</span>
//                     <ChevronDown className="w-4 h-4 ml-auto text-green-600" />
//                   </div>
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Register Now</a>
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Sign in</a>
//                 </div>
//               </div>
//             )}
//           </div>

//          {/* Student Dropdown */}
//           <div className="relative" onMouseEnter={() => handleMouseEnter('student')} onMouseLeave={handleMouseLeave}>
//              <button className="flex items-center space-x-1 px-4 py-2 rounded-sm text-[#39FF14] font-medium hover:opacity-90 transition-opacity border border-[#39FF14]" style={{backgroundColor: '#1a1f71'}} >
//               <span className="text-base">Student</span>
//               <ChevronDown className="w-3 h-3" />
//             </button>
//             {activeDropdown === 'student' && (
//               <div className="absolute top-full mt-1 -left-10 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                 <div className="py-2">
//                   <div className="flex items-center px-4 py-2 text-gray-700 border-b border-gray-100">
//                     <GraduationCap className="w-4 h-4 mr-2" />
//                     <span className="font-medium">Student</span>
//                     <ChevronDown className="w-4 h-4 ml-auto text-green-600" />
//                   </div>
//                   <a href="#" onClick={handleOpenStudentModal} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Register Now</a>
//                   <a href="#" onClick={handleStudentSignIn}  className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Sign in</a>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
     

//       {/* Navigation Menu */}
//       <div style={{backgroundColor: '#f1f5f9'}} className="px-4 py-3 border-b border-gray-300">
//         <nav className="flex items-center space-x-8 gap-[70px]">
//           <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors">
//             Patio Furniture Covers
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors">
//             Cushion & Pillow covers
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors">
//             Solar Shades
//           </a>
//           <a href="#" className="font-medium py-2 border-b-2" style={{color: '#2563eb', borderColor: '#2563eb'}}>
//             Custom Covers
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors">
//             Tarps & Curtains
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors">
//             Marine Covers
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors relative">
//             Car Covers
//             <span className="absolute -top-1 -right-2 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold" style={{backgroundColor: '#22c55e'}}>
//               New
//             </span>
//           </a>
//         </nav>
//       </div>
//    </header>
//   );
// };

// export default Header;

"use client";
import React, { useState }  from 'react';
import { Search, ScanLine, Mic, ChevronDown, User, UserCheck, GraduationCap, X, Menu } from 'lucide-react';
import PromoBanner from './PromoBanner';
import StudentRegistration from './Student/StudentRegistration';
import StudentSignIn from './Student/StudentSignIn';
 
const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [isStudentSignInOpen, setIsStudentSignInOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMouseEnter = (dropdown: string) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleOpenStudentModal = () => {
    setShowStudentModal(true);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleStudentSignIn = () => {
    setIsStudentSignInOpen(true);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full min-w-0">
      {/* Modals */}
      {showStudentModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-[2px] bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-5xl">
            <StudentRegistration onClose={() => setShowStudentModal(false)} />
          </div>
        </div>
      )}
      {isStudentSignInOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-[2px] bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="rounded-lg shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-5xl">
            <StudentSignIn onClose={() => setIsStudentSignInOpen(false)}/>
          </div>
        </div>
      )}
 
      {/* Promotional Banner */}
      <div className="bg-red-600 text-white text-center py-1 sm:py-2 px-2">
        <div className="text-xs sm:text-sm md:text-base font-bold">
          Free Listing for first 100 Shopkeepers
        </div>
      </div>
      
      {/* PromoBanner Container */}
      <div className="w-full h-8 sm:h-12 bg-[#302E2EDB] relative overflow-hidden">
        <PromoBanner/>
      </div>

      {/* Main Header */}
      <div className="bg-[#1a1f71] px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <div className="bg-[#666666] px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded flex-shrink-0">
            <h1 className="text-white text-base sm:text-xl font-bold tracking-wider">DOBBY</h1>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm xl:max-w-2xl mx-2 lg:mx-4">
            <div className="relative flex items-center bg-white rounded-md overflow-hidden w-full">
              <input
                type="text"
                placeholder="Search for Chair Cover"
                className="flex-1 px-2 lg:px-4 py-2 lg:py-2.5 border-0 focus:outline-none text-gray-700 placeholder-gray-500 bg-white text-sm"
              />
              <div className="flex items-center border-l border-gray-300">
                <button className="p-1.5 lg:p-2.5 hover:bg-gray-50 border-r border-gray-300">
                  <Search className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                </button>
                <button className="p-1.5 lg:p-2.5 hover:bg-gray-50 border-r border-gray-300">
                  <ScanLine className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                </button>
                <button className="p-1.5 lg:p-2.5 hover:bg-gray-50">
                  <Mic className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-1 sm:gap-2 md:hidden">
            <button 
              onClick={toggleSearch}
              className="p-2 text-[#39FF14] hover:opacity-90 border border-[#39FF14] rounded"
            >
              <Search className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-[#39FF14] hover:opacity-90 border border-[#39FF14] rounded"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* Desktop User Controls */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 flex-shrink-0">
            {/* User Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-1 px-2 lg:px-3 py-1.5 lg:py-2 rounded-sm text-[#39FF14] font-medium hover:opacity-90 transition-opacity border border-[#39FF14] bg-[#1a1f71] text-xs lg:text-sm"
                onMouseEnter={() => handleMouseEnter('user')}
                onClick={() => handleDropdownClick('user')}
              >
                <span>User</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === 'user' && (
                <div className="absolute top-full mt-1 left-0 w-40 lg:w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50" onMouseLeave={handleMouseLeave}>
                  <div className="py-2">
                    <div className="flex items-center px-3 lg:px-4 py-2 text-gray-700 border-b border-gray-100">
                      <User className="w-4 h-4 mr-2" />
                      <span className="font-medium text-sm">User</span>
                    </div>
                    <a href="#" className="block px-3 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign up</a>
                    <a href="#" className="block px-3 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign in</a>
                  </div>
                </div>
              )}
            </div>

            {/* Shopkeeper Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-1 px-2 lg:px-3 py-1.5 lg:py-2 rounded-sm text-[#39FF14] font-medium hover:opacity-90 transition-opacity border border-[#39FF14] bg-[#1a1f71] text-xs lg:text-sm"
                onMouseEnter={() => handleMouseEnter('shopkeeper')}
                onClick={() => handleDropdownClick('shopkeeper')}
              >
                <span>Shopkeeper</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === 'shopkeeper' && (
                <div className="absolute top-full mt-1 left-0 w-40 lg:w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50" onMouseLeave={handleMouseLeave}>
                  <div className="py-2">
                    <div className="flex items-center px-3 lg:px-4 py-2 text-gray-700 border-b border-gray-100">
                      <UserCheck className="w-4 h-4 mr-2" />
                      <span className="font-medium text-sm">Shopkeeper</span>
                    </div>
                    <a href="#" className="block px-3 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Register Now</a>
                    <a href="#" className="block px-3 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign in</a>
                  </div>
                </div>
              )}
            </div>

            {/* Student Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-1 px-2 lg:px-3 py-1.5 lg:py-2 rounded-sm text-[#39FF14] font-medium hover:opacity-90 transition-opacity border border-[#39FF14] bg-[#1a1f71] text-xs lg:text-sm"
                onMouseEnter={() => handleMouseEnter('student')}
                onClick={() => handleDropdownClick('student')}
              >
                <span>Student</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === 'student' && (
                <div className="absolute top-full mt-1 right-0 w-40 lg:w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50" onMouseLeave={handleMouseLeave}>
                  <div className="py-2">
                    <div className="flex items-center px-3 lg:px-4 py-2 text-gray-700 border-b border-gray-100">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span className="font-medium text-sm">Student</span>
                    </div>
                    <a href="#" onClick={handleOpenStudentModal} className="block px-3 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Register Now</a>
                    <a href="#" onClick={handleStudentSignIn} className="block px-3 lg:px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign in</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-3">
          <div className="relative flex items-center bg-white rounded-md overflow-hidden border border-gray-300">
            <input
              type="text"
              placeholder="Search for Chair Cover"
              className="flex-1 px-3 py-2 border-0 focus:outline-none text-gray-700 placeholder-gray-500 bg-white text-sm"
            />
            <div className="flex items-center border-l border-gray-300">
              <button className="p-2 hover:bg-gray-50 border-r border-gray-300">
                <Search className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-50 border-r border-gray-300">
                <ScanLine className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-50">
                <Mic className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {/* User Section */}
            <div className="py-2 border-b border-gray-100">
              <div className="flex items-center px-2 py-2 text-gray-700 font-medium">
                <User className="w-4 h-4 mr-2" />
                <span>User</span>
              </div>
              <a href="#" className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50">Sign up</a>
              <a href="#" className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50">Sign in</a>
            </div>

            {/* Shopkeeper Section */}
            <div className="py-2 border-b border-gray-100">
              <div className="flex items-center px-2 py-2 text-gray-700 font-medium">
                <UserCheck className="w-4 h-4 mr-2" />
                <span>Shopkeeper</span>
              </div>
              <a href="#" className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50">Register Now</a>
              <a href="#" className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50">Sign in</a>
            </div>

            {/* Student Section */}
            <div className="py-2">
              <div className="flex items-center px-2 py-2 text-gray-700 font-medium">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span>Student</span>
              </div>
              <a href="#" onClick={handleOpenStudentModal} className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50">Register Now</a>
              <a href="#" onClick={handleStudentSignIn} className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50">Sign in</a>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <div className="bg-[#f1f5f9] px-2 sm:px-4 py-2 sm:py-3 border-b border-gray-300">
        <nav className="overflow-x-auto">
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 xl:space-x-8 min-w-max pb-1">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors whitespace-nowrap text-xs sm:text-sm lg:text-base">
              Patio Furniture Covers
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors whitespace-nowrap text-xs sm:text-sm lg:text-base">
              Cushion & Pillow covers
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors whitespace-nowrap text-xs sm:text-sm lg:text-base">
              Solar Shades
            </a>
            <a href="#" className="font-medium py-2 border-b-2 text-blue-600 border-blue-600 whitespace-nowrap text-xs sm:text-sm lg:text-base">
              Custom Covers
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors whitespace-nowrap text-xs sm:text-sm lg:text-base">
              Tarps & Curtains
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors whitespace-nowrap text-xs sm:text-sm lg:text-base">
              Marine Covers
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2 border-b-2 border-transparent hover:border-blue-600 transition-colors relative whitespace-nowrap text-xs sm:text-sm lg:text-base">
              Car Covers
              <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold">
                New
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;