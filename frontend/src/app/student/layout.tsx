
import React from 'react';
import StudentNavbar from '@/components/Student/StudentNavbar';
import StudentSidebar from '@/components/Student/StudentSidebar';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content Area (with Navbar inside it) */}
      <div className="flex flex-col flex-1">
        {/* Navbar (limited width) */}
        <StudentNavbar />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-screen-lg w-full mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
