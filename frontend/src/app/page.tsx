// pages/index.js (or app/page.js for App Router)

import Header from "@/components/Header";
import Homepage from "@/components/Homepage";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Homepage />
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