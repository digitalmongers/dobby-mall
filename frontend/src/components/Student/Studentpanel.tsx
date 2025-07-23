'use client';
import React from 'react';
import StudentSidebar from './StudentSidebar';
import StudentDashboard from './StudentDashboard';
import Studentshop from './Studentshop';
import StudentEarnings from './StudentEarnings';
import StudentPayouts from './StudentPayouts';

import SchoolRegistrationForm from '../SchoolRegistrationForm';


const StudentPanel = () => {
  return (
    <div>
      <StudentSidebar/>
      <div><StudentDashboard/></div>
      <Studentshop/>
      <StudentEarnings/>
      <StudentPayouts/>
      {/* <StudentSignIn/> */}
      <SchoolRegistrationForm/>
    
    </div>
  );
};

export default StudentPanel;