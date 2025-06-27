import BlogSection from "@/components/BlogSection";
import CoverHeroSection from "@/components/CoverHeroSection";
import DobbyFooter from "@/components/DobbyFooter";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Homepage from "@/components/Homepage";
import RealStories from "@/components/RealStories";
import StudentPanel from "@/components/Student/Studentpanel";
import TestimonialsSection from "@/components/TestimonialsSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
     
      <Header />
      <Homepage />
      <Hero />
      <CoverHeroSection/>
      <RealStories/>
      <BlogSection/>
      <TestimonialsSection/>
      <FooterSection/>
      <DobbyFooter/>
       <StudentPanel/>
      {/* Page Content */}
      {/* <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome to DOBBY Store
        </h1>
        <p className="text-gray-600">
          Your one-stop shop for all furniture covers and outdoor protection.
        </p>
      </main> */}
    </div>
  );
}